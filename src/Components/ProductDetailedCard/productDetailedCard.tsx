import styles from './productDetailedCard.module.scss';
import { IProduct } from '../../types/entityTypes';
import { useState, useEffect } from 'react';
import Stars from '../Common/SvgGenComponent/svgGenComponent';
import ArrowUndo from '../Common/SvgGenComponent/svgGenComponent';
import PrimaryButton from '../Common/PrimaryButton/primaryButton';
import formatToPrice from '../../utils/formatToPrice';
import Item from '../Common/Item/item';
import placeholderImg from '../../assets/images/png/placeholderImg.png';

export interface ProductDetailedCardProps {
    product: IProduct;
}

export default function ProductDetailedCard({ product }: ProductDetailedCardProps) {
    const { title, price, picture, rating } = product;
    const [imageUrl, setImageUrl] = useState(placeholderImg);

    useEffect(() => {
        if (picture) {
            const img = new Image();
            img.src = picture;
            img.onload = () => setImageUrl(picture);
            img.onerror = () => setImageUrl(placeholderImg);
        }
    }, [picture]);

    return (
        <div className={styles.detailedCard}>
            <div className={styles.data}>
                <div className={styles.imgBlock}>
                    <img className={styles.image} src={imageUrl} alt={'product image'}/>
                </div>
                <div className={styles.infoBlock}>
                    <div>
                        <h1 className={styles.title}>
                            {title}
                        </h1>
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
                    </div>
                    <div>
                        <div className={styles.price}>
                            {price && formatToPrice(price)} &#8381;
                        </div>
                        <PrimaryButton text={'Добавить в корзину'}/>
                    </div>
                    <div>
                        <div className={styles.undo}>
                            <ArrowUndo iconName={'arrowUndo'} className={styles.arrowUndo} width={20} height={20}/>
                            <Item text={'Условия возврата'}/>
                        </div>
                        <p>
                            Обменять или вернуть товар надлежащего качества можно в течение 14 дней с момента покупки.
                        </p>
                    </div>
                    <p className={styles.postscript}>
                        Цены в интернет-магазине могут отличаться от розничных магазинов.
                    </p>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.label}>Описание</div>
                <p className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: product.description}}>

                </p>
            </div>
        </div>
    );
}