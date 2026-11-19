export default function Header({ count }) {
  return (
    <header className="hero">
      <h1>Fieldwork Studio</h1>
      <p>
        We design brands, products and stories for people who make things.
        Browse {count} recent projects below.
      </p>
      <a className="btn" href="#add-project">Add a project</a>
    </header>
  );
}