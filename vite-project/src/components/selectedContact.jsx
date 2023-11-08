import { useEffect, useState } from "react";
export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const contact = await response.json();
        setContact(contact);
      } catch (error) {
        setError(error);
      }
    }
    fetchSelectedContact();
  }, [])};
