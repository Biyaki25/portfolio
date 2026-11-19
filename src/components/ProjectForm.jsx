import { useState } from "react";
import { categories } from "../data";

const emptyForm = {
  title: "",
  category: "Branding",
  year: new Date().getFullYear(),
  description: "",
  image: "",
};

export default function ProjectForm({ onAddProject }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page
    if (!form.title.trim() || !form.description.trim()) {
      setError("Add a title and a short description before saving.");
      return;
    }
    onAddProject({ ...form, year: Number(form.year) });
    setForm(emptyForm);
    setError("");
  };

  return (
    <section id="add-project" className="form-section">
      <h2>Add a project</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={form.title} onChange={handleChange} />

        <div className="row">
          <div>
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={form.category} onChange={handleChange}>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input id="year" name="year" type="number" value={form.year} onChange={handleChange} />
          </div>
        </div>

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="3" value={form.description} onChange={handleChange} />

        <label htmlFor="image">Image URL (optional)</label>
        <input id="image" name="image" type="url" value={form.image} onChange={handleChange} />

        {error && <p className="error" role="alert">{error}</p>}
        <button className="btn" type="submit">Save project</button>
      </form>
    </section>
  );
}