import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarDropDown from "./Navbar/NavbarDropdown";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export default function Navbar() {
  const menuItems = [
    { label: "Home", link: "#" },
    { label: "News", link: "#" },
    { label: "Articles", link: "#" },
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
      <NavbarMenu title="Admin" items={menuItems} />
      <NavbarDropDown
        items={dropdownItems}
        picture="https://github.com/mdo.png"
      />
    </NavbarWrapper>
  );
}
