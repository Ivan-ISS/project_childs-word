import styles from './cart.module.scss';
import CartIcon from '../Common/SvgGenComponent/svgGenComponent';
import Item from '../Common/Item/item';
import useScreenSize from '../../hooks/useScreenSize';

export default function Cart() {
    const [ screenWidth ] = useScreenSize();

    return (
        <div className={styles.cart}>
            <CartIcon iconName={'cart'}/>
            <Item text={screenWidth > 560 ? 'Корзина' : ''} value={5}/>
        </div>
    );
}