export default function NoteList({ data }) {
  return (
    <ul>
      {data.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}
