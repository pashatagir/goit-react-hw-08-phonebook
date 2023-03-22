import { Navlink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Navlink to="/register">Register</Navlink>
      <Navlink to="/login">Log In</Navlink>
    </div>
  );
};
