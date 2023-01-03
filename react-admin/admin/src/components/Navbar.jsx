import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarDropDown from "./Navbar/NavbarDropdown";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export default function Navbar() {
  const menuItems = [
    { label: "Home", link: "#" },
    { label: "News", link: "#" },
  ];

  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Sign Out", link: "#" },
  ];
  return (
    <NavbarWrapper>
      <NavbarMenu title="Menu" items={menuItems} />
      <NavbarDropDown
        items={dropdownItems}
        picture="https://github.com/mdo.png"
      />
    </NavbarWrapper>
  );
}
