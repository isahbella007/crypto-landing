import "./App.css";
import Cryptocurrencies from "./component/Cryptocurrencies/Cryptocurrencies";
import Earn from "./component/Earn/Earn";
import Features from "./component/Features/Features";
import HashCard from "./component/HashCard/HashCard";
import Header from "./component/Header/Header";
import Numbers from "./component/Numbers/Numbers";
import SectionOne from "./component/SectionOne/SectionOne";
import WhyCrappo from "./component/WhyCrappo/WhyCrappo";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <Numbers/>
      <WhyCrappo/>
      <Earn/>
      <HashCard/>
      <Cryptocurrencies/>
      <Features/>
    </>
  );
}

export default App;
