
export default function Navigation() {
  return (
    <nav className="text-3xl font-bold m-6 p-8 font-mono">
      <ul className="space-y-2">
        <li className="m-2 p-2">
          <a href="/">Home</a>
        </li>
        <li className="m-2 p-2">
          <a href="/software resume.docx" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li className="m-2 p-2">
          <a href="/projects">Projects</a>
        </li>
        <li className="m-2 p-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
