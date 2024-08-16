import styles from './iconButton.module.scss';
import { HTMLAttributes } from 'react';
import Item from '../../Item/item';
import SvgGenComponents from '../../SvgGenComponent/svgGenComponent';


export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
    iconName: 'trash' | 'arrowLeft' | 'arrowUndo' | 'cart';
    text: string;
    value?: number;
}

export default function IconButton({ iconName, text, value, ...props }: IconButtonProps) {

    return (
        <button {...props} className={` ${styles.iconButton} ${styles[iconName + 'Wrap']} `}>
            <SvgGenComponents iconName={iconName} className={` ${styles.icon} ${styles[iconName]} `}/>
            <Item text={text} value={value}/>
        </button>
    );
}