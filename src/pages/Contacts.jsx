import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { ContainerContacts } from 'components/Style/Style.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerContacts>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      {contacts?.length > 0 ? (
        <Section title="Contacts">
          {contacts?.length > 1 ? <Filter /> : ''}
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactsList />
        </Section>
      ) : (
        <b>Your phonebook is currently empty</b>
      )}
    </ContainerContacts>
  );
};

export default Contacts;
