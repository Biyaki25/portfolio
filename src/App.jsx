import { useState } from "react";
import { initialProjects } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState("");

  // Add: copy the old array and put the new project first (never mutate state).
  const handleAddProject = (project) =>
    setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);

  // Remove: keep every project except the one with this id.
  const handleDeleteProject = (id) =>
    setProjects((prev) => prev.filter((p) => p.id !== id));

  // Search: derived from state, so it needs no state of its own.
  const q = query.trim().toLowerCase();
  const visible = projects.filter((p) =>
    [p.title, p.category, p.description].some((f) => f.toLowerCase().includes(q))
  );

  return (
    <>
      <Header count={projects.length} />
      <main>
        <section className="toolbar" aria-label="Find projects">
          <SearchBar query={query} onQueryChange={setQuery} />
          <p className="result-count" aria-live="polite">
            {visible.length} of {projects.length} projects
          </p>
        </section>
        <ProjectList projects={visible} onDelete={handleDeleteProject} />
        <ProjectForm onAddProject={handleAddProject} />
      </main>
    </>
  );
}