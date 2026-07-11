import { Outlet } from 'react-router';
import './assets/css/index.css';

const ForeignExchangeChecker = () => {
  return (
    <main id="exchange-checker">
      <p className="">ForeignExchangeChecker</p>
      <Outlet />
    </main>
  );
};

export default ForeignExchangeChecker;
