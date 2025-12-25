import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShopByCollection from './components/ShopByCollection/ShopByCollection';
import Marquee from './components/Marquee/Marquee';
import NewIn from './components/NewIn/NewIn';
import Brands from './components/Brands/Brands';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopByCollection />
      <Marquee />
      <NewIn />
      <Brands />
    </>
  );
}

export default App;
