import styles from './rating.module.scss';
import Stars from '../SvgGenComponent/svgGenComponent';

export interface RatingProps {
    rating: number;
}

export default function Rating({ rating }: RatingProps) {
    
    return (
        <div className={styles.rating}>
            <Stars iconName={'stars'} className={styles.substrate}/>
            <Stars
                iconName={'stars'}
                className={styles.fill}
                style={ rating ?
                    {
                        fill: '#fabc22',
                        clipPath: `inset(0 ${rating ? (1 - rating / 5) * 100 : 0}% 0 0)`
                    } :
                    { 
                        fill: '#f2f6fa' 
                    }
                }
            />
        </div>
    );
}