function NavbarMenuItem({ item }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={item.link}>
        {item.label}
      </a>
    </li>
  );
}

export default function NavbarMenu({ items = [], title = "", toggleOffMenu }) {
  return (
    <>
      <button
        className="navbar-toggler"
        style={{ display: "block", marginRight: 20 }}
        onClick={toggleOffMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item, index) => (
            <NavbarMenuItem item={item} key={`menu-item-${index}`} />
          ))}
        </ul>
      </div>
    </>
  );
}
