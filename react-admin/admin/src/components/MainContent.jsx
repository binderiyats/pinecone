import MainContentTitle from "./Maincontent/MainContentTitle";
import MainContentTable from "./Maincontent/MainContentTable";
import MainContentWrapper from "./Maincontent/MainContentWrapper";
import DynamicModals from "./utilities/DynamicModals";
import { useState } from "react";

export default function MainContent() {
  const [show, setShow] = useState(false);

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
