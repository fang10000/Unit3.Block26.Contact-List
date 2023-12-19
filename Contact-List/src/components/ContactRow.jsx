export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
        //   console.log("Row click", contact.id);
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  