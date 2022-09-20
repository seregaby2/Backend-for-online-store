import { stringify } from 'querystring';
import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';

type MyProps = {
  show: boolean;
  onHide(): void;
};

export const CreateDevice = (props: MyProps) => {
  const { show, onHide } = props;
  const { devices } = useAppSelector((store) => store.reducerDevice);
  const { brands } = useAppSelector((store) => store.reducerBrand);
  const [info, setInfo] = useState([{ title: '', description: '', number: 0 }]);

  const addinfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
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
        <Modal.Title id="contained-modal-title-vcenter">Add device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder="Enter device's name" />
          <Form.Control placeholder="Enter device's price" type="number " />
          <Form.Control type="file" />
          <hr />
          <Button variant={'outline-dark'} onClick={addinfo}>
            Add new device
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
