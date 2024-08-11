import styles from './undo.module.scss';
import ArrowUndo from '../../Common/SvgGenComponent/svgGenComponent';
import Item from '../../Common/Item/item';

export default function IconButton() {

    return (
        <div className={styles.undo}>
            <ArrowUndo iconName={'arrowUndo'} className={styles.arrowUndo} width={20} height={20}/>
            <Item text={'Условия возврата'}/>
        </div>
    );
}