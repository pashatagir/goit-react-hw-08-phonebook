import { useAuth } from '../hooks';
import { BtnToggleTheme } from 'components/Buttons/Buttons';
import { Navlink } from 'components/Style/Style.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts</Navlink>}
      <BtnToggleTheme />
    </nav>
  );
};
