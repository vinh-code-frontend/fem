import { Outlet } from 'react-router';
import './assets/css/index.css';
import ThemeProvider from './contexts/themeContext';
import Header from './shared/components/Header';

const ForeignExchangeChecker = () => {
  return (
    <ThemeProvider>
      <main id="fec">
        <Header />
        <p className=" bg-fec-">ForeignExchangeChecker</p>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default ForeignExchangeChecker;
