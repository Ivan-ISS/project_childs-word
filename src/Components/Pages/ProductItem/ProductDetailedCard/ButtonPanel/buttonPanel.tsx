import styles from './buttonPanel.module.scss';
import { defaultStateValid } from '../../../../../data';
import { IResultValidateCart } from '../../../../../types/dataTypes';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../redux/store';
import { addToCart } from '../../../../../redux/slices/cartSlice/cartSlice';
import { selectCart, selectTotalPrice } from '../../../../../redux/slices/cartSlice/cartSelector';
import { fetchSubmitCart } from '../../../../../redux/slices/ordersSlice/ordersSlice';
import validateCart from '../../../../../utils/validateCart';
import hasProductInCart from '../../../../../utils/hasProductInCart';
import findProductInCart from '../../../../../utils/findProductInCart';
import PrimaryButton from '../../../../Common/Buttons/PrimaryButton/primaryButton';
import Counter from '../../../../Common/Counter/counter';

export interface ButtonPanelProps {
    id: string;
}

export default function ButtonPanel({ id }: ButtonPanelProps) {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);
    const totalPrice = useAppSelector(selectTotalPrice);
    const [resValidate, setResValidate] = useState<IResultValidateCart>(defaultStateValid);

    useEffect(() => {
        setResValidate(validateCart(cart, totalPrice));
    }, [cart, totalPrice]);

    const handleClickBtnCart = async () => {
        dispatch(addToCart([{ id, quantity: 1 }]));
    };

    const handleClickCounter = async (id: string, quantity: number) => {
        dispatch(addToCart([{ id, quantity }]));
    };

    const handleClickBtnOrder = () => {
        dispatch(fetchSubmitCart());
    };

    return (
        <>
            {!hasProductInCart(cart, id) ? (
                <PrimaryButton text={'Добавить в корзину'} onClick={handleClickBtnCart} />
            ) : (
                <div className={styles.buttonPanel}>
                    <Counter
                        idEntity={id}
                        value={findProductInCart(cart, id)?.quantity || 0}
                        handleClickCounter={handleClickCounter}
                    />
                    <PrimaryButton
                        text={'Оформить заказ'}
                        isDisabled={
                            !resValidate.maxPrice.isValid ||
                            !resValidate.minPrice.isValid ||
                            !resValidate.maxQuantity.isValid
                        }
                        onClick={handleClickBtnOrder}
                    />
                </div>
            )}
            {!resValidate.maxPrice.isValid && (
                <div className={styles.errorMessage}>{resValidate.maxPrice.error}</div>
            )}
        </>
    );
}
