export default function TagList({ tags }) {
  return (
    <ul className="tags" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="tag">{tag}</li>
      ))}
    </ul>
  )
}
