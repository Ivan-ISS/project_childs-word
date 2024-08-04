import styles from './cartWidget.module.scss';
import { useAppSelector } from '../../redux/store';
import { selectCart, selectTotalPrice } from '../../redux/slices/cartSlice/cartSelector';
import ProductBasketCard from '../ProductBasketCard/productBasketCard';
import PrimaryButton from '../Common/PrimaryButton/primaryButton';
import formatToPrice from '../../utils/formatToPrice';

export default function CartWidget() {
    const cart = useAppSelector(selectCart);
    const totalPrice = useAppSelector(selectTotalPrice);

    return (
        <div className={styles.cartModal}>
            <ul className={styles.list}>
                {cart.map((item, index) => (
                    <li key={index}>
                        <ProductBasketCard product={item.product} quantity={item.quantity}/>
                    </li>
                ))}
            </ul>
            <div className={styles.totalPrice}>
                <div className={styles.label}>Итого</div>
                <div className={styles.price}>
                    { formatToPrice(totalPrice) } &#8381;
                </div>
            </div>
            <PrimaryButton text={'Оформить заказ'}/>
        </div>
    );
}