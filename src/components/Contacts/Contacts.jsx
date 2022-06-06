export function Contacts({ contacts, onClick }) {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button onClick={() => onClick(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
