import MainContentTitle from "../components/Maincontent/MainContentTitle";
import MainContentTable from "../components/Maincontent/MainContentTable";
import MainContentWrapper from "../components/Maincontent/MainContentWrapper";
import DynamicModals from "../components/utilities/DynamicModals";
import { useState } from "react";

export default function Articles() {
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainContentWrapper>
      <MainContentTitle title="Blog" handleShow={handleShow} />
      <MainContentTable />
      <DynamicModals
        show={show}
        handleClose={handleClose}
        title="Create Post"
      />
    </MainContentWrapper>
  );
}
