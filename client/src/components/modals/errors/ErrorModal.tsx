import { Button, Modal } from 'react-bootstrap';

type MyProps = {
  show: boolean;
  onHide(): void;
  textError: string;
};

export const ErrorModal = (props: MyProps) => {
  const { show, onHide, textError } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{textError}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
