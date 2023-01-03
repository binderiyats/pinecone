export default function NavbarMenu({ items = [], title = "" }) {
  return (
    <>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item) => {
            return (
              <li className="nav-item">
                <a className="nav-link" href={item.link}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
