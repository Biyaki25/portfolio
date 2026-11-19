export default function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <label htmlFor="search">Search projects</label>
      <input
        id="search"
        type="search"
        placeholder="Try “web” or “coffee”"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}