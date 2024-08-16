import styles from './productItem.module.scss';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { fetchProduct } from '../../../redux/slices/productItemSlice/productItemSlice';
import { selectProduct, selectStatus, selectError } from '../../../redux/slices/productItemSlice/productItemSelector';
import { fetchUpdateCart } from '../../../redux/slices/cartSlice/cartSlice';
import { selectCart, selectCartState } from '../../../redux/slices/cartSlice/cartSelector';
import ProductDetailedCard from './ProductDetailedCard/productDetailedCard';
import IconButton from '../../Common/Buttons/IconButton/iconButton';
import Loader from '../../Common/Loader/loader';
import Error from '../LoadError/loadError';

export default function ProductItem() {
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectError);
    const status = useAppSelector(selectStatus);
    const product = useAppSelector(selectProduct);
    const cart = useAppSelector(selectCart);
    const cartState = useAppSelector(selectCartState);
    const navigate = useNavigate();
    const { id } = useParams();
    // const product = products.find(product => product.id === id);

    useEffect(() => {
        dispatch(fetchProduct({ id: id as string }));
    }, [dispatch, id]);

    useEffect(() => {
        if (cartState.length || (cart.length === 1 && !cartState.length)) {
            dispatch(fetchUpdateCart({ data: cartState }));
        }
    }, [cart.length, cartState, dispatch]);

    return (
        <section className={styles.productItem}>
            <div className={styles.elIconButton} onClick={() => navigate(-1)}>
                <IconButton iconName={'arrowLeft'} text={'Назад'}/>
            </div>
            {status === 'in progress' ? (
                <div className={styles.elLoader}>
                    <Loader/>
                </div>
            ) : error ? (
                <Error text={error}/>
            ) : (
                <ProductDetailedCard product={product}/>
            )}
        </section>
    );
}