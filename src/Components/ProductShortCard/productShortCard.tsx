import styles from './productShortCard.module.scss';
import { IProduct } from '../../types/entityTypes';
import { HTMLAttributes, useState, useEffect } from 'react';
import Stars from '../Common/SvgGenComponent/svgGenComponent';
import placeholderImg from '../../assets/images/png/placeholderImg.png';
import formatToPrice from '../../utils/formatToPrice';

export interface ProductShortCardProps extends HTMLAttributes<HTMLDivElement> {
    product: IProduct;
}

export default function ProductShortCard({ product, ...props }: ProductShortCardProps) {
    const { id, title, price, picture, rating } = product;
    const [imageUrl, setImageUrl] = useState(placeholderImg);

    useEffect(() => {
        if (picture) {
            const img = new Image();
            img.src = picture;
            img.onload = () => setImageUrl(picture);
            img.onerror = () => setImageUrl(placeholderImg);
        }
    }, [picture]);

    // console.log('id :', id);

    return (
        <div {...props} className={styles.productCard}>
            <div className={styles.imgBlock}>
                <img className={styles.image} src={imageUrl} alt={'product image'}/>
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.title}>
                    {title}
                </div>
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
                <div className={styles.price}>
                    {price && formatToPrice(price)} &#8381;
                </div>
            </div>
        </div>
    );
}