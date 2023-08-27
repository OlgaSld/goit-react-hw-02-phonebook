import { List, ContactItem, ButtonDel } from "./ContactList_styled";

export const ContactsList = ({ contacts, onDelete }) => {
    return (
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
                {contact.name} : {contact.number}
            <ButtonDel type="button" onDelete={onDelete}>Delete</ButtonDel>
          </ContactItem>
        ))}
      </List>
    );
}