// A numbered section: "01 About ———". On phones the heading sticks to the top.
export default function Section({ id, number, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 className="section-title" id={`${id}-title`}>
        <span className="section-num">{number}</span>
        {title}
        <span className="section-rule" aria-hidden="true" />
      </h2>
      {children}
    </section>
  )
}
