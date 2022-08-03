import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css';

const Home = () => {

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
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor="#FB9400"
            onSearch={handleSearch}
          />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: '/temp/burger.png',
            categoryName: 'Tradicional',
            name: 'X-Burger',
            price: 'R$ 20,00'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 2,
            image: '/temp/burger.png',
            categoryName: 'Tradicional',
            name: 'X-Burger',
            price: 'R$ 20,00'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 3,
            image: '/temp/burger.png',
            categoryName: 'Tradicional',
            name: 'X-Burger',
            price: 'R$ 20,00'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 4,
            image: '/temp/burger.png',
            categoryName: 'Tradicional',
            name: 'X-Burger',
            price: 'R$ 20,00'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 5,
            image: '/temp/burger.png',
            categoryName: 'Tradicional',
            name: 'X-Burger',
            price: 'R$ 20,00'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
      </div>
    </div>
  );
}

export default Home