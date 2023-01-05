import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PostCreate from "../Blogs/PostCreate";
export default function DynamicModals({
  show,
  handleClose,
  title = "",
  content = "",
  handleSave,
}) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostCreate />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
