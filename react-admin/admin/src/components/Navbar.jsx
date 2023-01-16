import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarDropDown from "./Navbar/NavbarDropdown";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export default function Navbar({ toggleOffMenu }) {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "News", link: "#" },
    { label: "Articles", link: "/articles" },
    { label: "Feedback", link: "#" },
    { label: "Files", link: "#" },
  ];

  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign Out", link: "#" },
  ];
  return (
    <NavbarWrapper>
      <NavbarMenu
        title="Admin"
        items={menuItems}
        toggleOffMenu={toggleOffMenu}
      />
      <NavbarDropDown
        items={dropdownItems}
        picture="https://github.com/mdo.png"
      />
    </NavbarWrapper>
  );
}
