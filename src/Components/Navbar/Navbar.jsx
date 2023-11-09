import Link from "next/link";
import "./Navbar.css";
import { links } from "./data";
import Button from "../elements/Button/Button";
import Logo from "../elements/Logo/Logo";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";

export default function Navbar() {
  return (
    <div className="container">
      <Logo />
      <div className="links">
        <DarkMoodToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="link">
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
}
