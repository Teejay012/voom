import Hero from "./containers/hero/Hero";
import Categories from "./containers/categories/Categories";
import LatestProducts from "./containers/latestProducts/LatestProducts";
import TopRating from "./containers/topRating/TopRating";
import BestSelling from "./containers/bestSelling/BestSelling"
import Suscribe from "./containers/suscribe/Suscribe"

const Home = () => {
  return (
    <div className="text-primary-color">
      <Hero />
      <Categories />
      <LatestProducts />
      <TopRating />
      <BestSelling />
      <Suscribe />
    </div>
  )
}

export default Home