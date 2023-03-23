import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, List, ListItem, Text } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List spacing={0.1}>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="8px"
          m="8px 0 8px"
          key={id}
        >
          <IoIosContact />
          <Text textTransform="capitalize" fontWeight={600} color="teal">
            {name}:
          </Text>
          <Text fontWeight={600}>{number}</Text>
          <Button
            leftIcon={<MdDeleteForever />}
            colorScheme="teal"
            size="xs"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
