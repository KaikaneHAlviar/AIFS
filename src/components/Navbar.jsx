import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="brand" to="/" aria-label="AI For Students Home" onClick={() => setOpen(false)}>
          <span className="brand__mark">AI</span>
          <span className="brand__name">AI For Students</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            About
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Events
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? "is-active" : undefined)}>
            Resources
          </NavLink>
        </nav>

        <div className="nav__social">
          <a href="#" aria-label="Instagram" title="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn" title="LinkedIn">in</a>
        </div>

        <button
          className="nav__hamburger"
          aria-label="Open menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      <div className="nav__mobile" hidden={!open}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link to="/resources" onClick={() => setOpen(false)}>Resources</Link>
      </div>
    </header>
  );
}
