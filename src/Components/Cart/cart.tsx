import styles from './cart.module.scss';
import SvgGenComponents from '../Common/SvgGenComponent/svgGenComponent';
import Item from '../Common/Item/item';

export default function Cart() {

    return (
        <div className={styles.cart}>
            <SvgGenComponents iconName={'cart'}/>
            <Item text={'Корзина'} value={5}/>
        </div>
    );
}