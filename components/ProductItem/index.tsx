import Link from 'next/link';
import { useAppContext } from '../../contexts/app';
import { formatter } from '../../libs/formatter';
import { Product } from '../../types/Product';
import styles from './styles.module.css';

type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    const { tenant } = useAppContext();
    const fixPrice = formatter()

    return (
        <Link href={`/${tenant?.slug}/product/${data.id}`}>
            <a className={styles.container}>
                <div className={styles.head} style={{ backgroundColor: tenant?.mainColor }}></div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} alt="" />
                    </div>
                    <div className={styles.catName}>{data.categoryName}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{ color: tenant?.mainColor }}>{fixPrice.formatPrice(data.price)}</div>
                </div>
            </a>
        </Link>
    );
}