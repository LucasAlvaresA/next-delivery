import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import { useAppContext } from '../../contexts/app';
import { frontApi } from '../../libs/frontApi';
import styles from '../../styles/Home.module.css';
import { Product } from '../../types/Product';
import { Tenant } from '../../types/Tenant';

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  const [products, setProducts] = useState<Product[]>(data.products);

  useEffect(() => {
    setTenant(data.tenant);
  }, [])

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
              <div
                className={styles.menuButtonLine}
                style={{ backgroundColor: tenant?.mainColor }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput onSearch={handleSearch} />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        {products.map((item, index) => (
          <ProductItem
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Home

type Props = {
  tenant: Tenant,
  products: Product[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = frontApi(tenantSlug as string);


  // Get Tenant
  const tenant = await api.getTenant();
  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  // Get Products
  const products = await api.getAllProducts();

  return {
    props: {
      tenant,
      products
    }
  }
}