import { useAuth } from '../hooks';
import { Navlink } from '../AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      {isLoggedIn && <Navlink to="/contacts">Contacts</Navlink>}
    </nav>
  );
};
