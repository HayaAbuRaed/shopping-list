import Carousel from "../../components/Carousel";
import ProductsList from "./components/ProductsList";
import { images } from "./data";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Carousel images={images} />
      <ProductsList />
    </div>
  );
};

export default Home;
