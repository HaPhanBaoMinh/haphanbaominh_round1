import AccountCard from './components/AccountCard/AccountCard';
import BackButton from './components/Button/BackButton';
import CardList from './components/CardList/CardList';
import Layout from './components/layout/Layout';
import RankTitle from './components/RankTitle/RankTitle';
import image1 from "./image/332978403_1400008697475793_3725998274677160981_n.png";
import image2 from "./image/332914767_2235145039980321_8559766932600348987_n.png";
import image3 from "./image/332940884_714390280388309_796915159501947888_n.png";

const petrol = [
  { image: image1, title: '15 Coins', description: '50% discount for every $100 top-up on your Shell Petrol Card' },
  { image: image1, title: '1,000 Coins', type: 'dark', description: '70% discount top-up on your Shell Petrol Card' },
]

const rentalRebate = [
  { image: image2, title: '20 Coins', description: 'Get $20 Rental rebate' },
  { image: image2, title: '15 Coins', description: 'Get $500 Rental rebate' },
]

const foodAndBeverage = [
  { image: image3, title: '25 Coins', description: 'NTUC Fairprice $50 Voucher' },
  { image: image3, title: '5 Coins', description: 'Free Cold Stone Sundae at any flavour!' },
]


function App() {
  return (
    <Layout>
      {/* Main */}
      <div className="w-100 pb-[50px] h-full  relative before:block before:absolute before:w-full before:h-[50vh] before:bg-[#171725]">
        <BackButton />
        <RankTitle />
        <AccountCard />
        <CardList data={petrol} title="Petrol" />
        <CardList data={rentalRebate} title="Rental Rebate" />
        <CardList data={foodAndBeverage} title="Food and Beverage" />
      </div>
    </Layout>
  );
}

export default App;
