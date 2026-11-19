export default function ProjectCard({ project, onDelete }) {
  const { id, title, category, year, description, image } = project;
  return (
    <li className="card">
      {image && <img src={image} alt={`${title} preview`} loading="lazy" />}
      <div className="card-body">
        <span className="tag">{category} · {year}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="link-btn" onClick={() => onDelete(id)} aria-label={`Remove ${title}`}>
          Remove
        </button>
      </div>
    </li>
  );
}