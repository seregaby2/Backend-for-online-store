import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/redux';
import { createBrand } from '../../http/deviceApi';

type MyProps = {
  show: boolean;
  onHide(): void;
};

export const CreateBrand = (props: MyProps) => {
  const { show, onHide } = props;

  const dispatch = useAppDispatch();
  const [value, setValue] = useState({ name: '' });

  const addBrand = () => {
    dispatch(createBrand(value));
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
        <Modal.Title id="contained-modal-title-vcenter">Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Enteer brand"
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
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
