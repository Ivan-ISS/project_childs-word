import styles from './trashButton.module.scss';
import { HTMLAttributes } from 'react';
import Trash from '../../Common/SvgGenComponent/svgGenComponent';
import Item from '../../Common/Item/item';

export interface TrashButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function TrashButton({ ...props }: TrashButtonProps) {

    return (
        <button {...props} className={styles.trashButton}>
            <Trash iconName={'trash'} className={styles.trash} width={20} height={20}/>
            <Item text={'Удалить'}/>
        </button>
    );
}