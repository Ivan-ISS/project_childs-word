import styles from './cart.module.scss';
import { useAppSelector } from '../../redux/store';
import { selectCart } from '../../redux/slices/cartSlice/cartSelector';
import CartIcon from '../Common/SvgGenComponent/svgGenComponent';
import Item from '../Common/Item/item';
import useScreenSize from '../../hooks/useScreenSize';

export default function Cart() {
    const cart = useAppSelector(selectCart);
    const [ screenWidth ] = useScreenSize();

    return (
        <div className={styles.cart}>
            <CartIcon iconName={'cart'}/>
            <Item text={screenWidth > 560 ? 'Корзина' : ''} value={cart.length}/>
        </div>
    );
}