import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/redux';
import { createType } from '../../http/deviceApi';

type MyProps = {
  show: boolean;
  onHide(): void;
};

export const CreateType = (props: MyProps) => {
  const { show, onHide } = props;
  const dispatch = useAppDispatch();

  const [value, setValue] = useState({ name: '' });

  const addType = () => {
    dispatch(createType(value));
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Enteer type"
            value={value.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ name: e.target.value })
            }
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
