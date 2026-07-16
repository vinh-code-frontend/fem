import { useThemeContext } from '../../contexts/themeContext';

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleChangeTheme = () => {
    toggleTheme();
  };

  return (
    <div className=" cursor-pointer" onClick={handleChangeTheme}>
      {theme}
    </div>
  );
};

export default Header;
