// "Next.js / TypeScript / ASP.NET Core"
export default function TechList({ items }) {
  return <p className="tech">{items.join(' / ')}</p>
}
