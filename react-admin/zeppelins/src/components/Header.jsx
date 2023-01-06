import Logo from "./icons/Logo";

export default function Header() {
  return (
    <div>
      <div className="logo">
        <Logo />
      </div>
      <ul className="menu">
        <li>portfolio</li>
        <li>blog</li>
        <li>cv</li>
        <li>store</li>
        <li>freelance</li>
        <li>about me</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
