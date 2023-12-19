import React from "react";
import ContactRow from "./ContactRow";
import { useState, useEffect } from "react";


export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  
    const [contact, setContact] = useState([]);

  //   console.log("Contact: ", contact);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

    // console.log(contact);

  return (
    <div>
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Address: </p>
            <ul>
                <li>Street: {contact?.address?.street}</li>
                <li>Suite: {contact?.address?.suite}</li>
                <li>City: {contact?.address?.city}</li>
                <li>Zipcode: {contact?.address?.zipcode}</li>
            </ul>
        <p>Website: {contact.website}</p>
        <button 
            onClick={() => setSelectedContactId(null)}
            style = {{ backgroundColor: 'greenyellow', color: 'black'}}
        >
                Return
        </button>
    </div>
  );
}
