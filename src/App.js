import './App.css';
import BrandDescription from './components/BrandDescription';
import BrandInformation from './components/BrandInformation';
import BrandName from './components/BrandName';
import Collections from './components/Collections';
import CompanyHeritage from './components/CompanyHeritage';
import CompanyHistory from './components/CompanyHistory';
import CompanyValues from './components/CompanyValues';
import DeliveryNotification from './components/DeliveryNotification';
import DiscountNotification from './components/DiscountNotification';
import Footer from './components/Footer';
import GoldenEagle from './components/GoldenEagle';
import { Header } from './components/Header';
import LyleScottGeography from './components/LyleScottGeography';
import LyleScottRussia from './components/LyleScottRussia';
import ManInLyleScottClothes from './components/ManInLyleScottClothes';
import { SaleNotification } from './components/SaleNotification';

function App() {
  return (
    <div className="App">
      <SaleNotification />
      <Header />
      <DeliveryNotification />
      <BrandName />
      <BrandDescription />
      <ManInLyleScottClothes />
      <BrandInformation />
      <CompanyHistory />
      <LyleScottGeography />
      <GoldenEagle />
      <CompanyValues />
      <CompanyHeritage />
      <LyleScottRussia />
      <Collections />
      <DiscountNotification />
      <Footer />
    </div>
  );
}

export default App;
