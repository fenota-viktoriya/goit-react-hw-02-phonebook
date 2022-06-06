export function Filter({ value, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
}
