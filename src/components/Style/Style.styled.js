import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
`;
export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

// Home
export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Contacts
export const ContainerContacts = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// UserMenu
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  font-weight: 700;
`;

// AuthNav
export const Navlink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #000000;
  text-shadow: 2px 2px 5px #ffffff;
  &.active {
    color: #ffffff;
    text-shadow: 2px 2px 5px #000000;
  }
`;

// AppBar
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

// Section
export const SectionContainer = styled.div`
  padding: 20px 0px;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;
