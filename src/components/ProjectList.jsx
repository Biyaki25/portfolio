import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return (
      <p className="empty">
        No projects match your search. Clear the search box or add a new project below.
      </p>
    );
  }
  return (
    <ul className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
    </ul>
  );
}