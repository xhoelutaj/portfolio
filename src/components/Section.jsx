// On phones the title sticks to the top while you scroll the section.
// On wide screens it's hidden, since the sidebar nav shows where you are.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-label={title}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
