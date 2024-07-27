import styles from './cart.module.scss';
import CartIcon from '../Common/SvgGenComponent/svgGenComponent';
import Item from '../Common/Item/item';

export default function Cart() {

    return (
        <div className={styles.cart}>
            <CartIcon iconName={'cart'}/>
            <Item text={'Корзина'} value={5}/>
        </div>
    );
}