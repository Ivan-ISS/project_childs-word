import styles from './logo.module.scss';
import { Link } from 'react-router-dom';
import SvgGenComponents from '../../Common/SvgGenComponent/svgGenComponent';

export interface LogoProps {
    pathLink: string;
}

export default function Logo({ pathLink }: LogoProps) {

    return (
        <>
            <Link to={pathLink} className={styles.link}>
                <SvgGenComponents iconName={'logo'}/>
            </Link>
        </>
    );
}