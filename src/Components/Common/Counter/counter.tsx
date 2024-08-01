import styles from './counter.module.scss';
import { ButtonHTMLAttributes, useState, useEffect } from 'react';
import SecondaryButton from '../SecondaryButton/secondaryButton';
import CounterInput from '../Input/CounterInput/counterInput';
import IconPlus from '../SvgGenComponent/svgGenComponent';
import IconMinus from '../SvgGenComponent/svgGenComponent';

export interface CounterProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    idEntity: string;
    value: number;
    indicatorOfChange?: number;
    handleClickCounter: (id: string, quantity: number) => void;
}

export default function Counter({ idEntity, value, indicatorOfChange, handleClickCounter, ...props }: CounterProps) {
    let [ count, setCount ] = useState(value);

    useEffect(() => {
        setCount(value);
    }, [value, indicatorOfChange]);

    const handleClickPlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
        setCount(count += 1);
        handleClickCounter(idEntity, count);
    };

    const handleClickMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
        setCount(count -= 1);
        handleClickCounter(idEntity, count);
    };

    const handleChangeInput = (count: number) => {
        setCount(count);
        handleClickCounter(idEntity, count);
    };

    return (
        <div className={styles.counter}>
            <SecondaryButton
                segment={'counter'}
                edges={'leftRounded'}
                onClick={handleClickMinus}
                // isDisabled={count === 1}
            >
                <IconMinus iconName={'minus'} width={20} height={20}/>
            </SecondaryButton>
            <CounterInput value={count} handleChangeInput={(count) => handleChangeInput(count)}/>
            <SecondaryButton
                segment={'counter'}
                edges={'rightRounded'}
                onClick={handleClickPlus}
                // isDisabled={count === 1}
            >
                <IconPlus iconName={'plus'} width={20} height={20}/>
            </SecondaryButton>
        </div>
    );
}