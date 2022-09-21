import React, { useState } from 'react';
import { Button, Dropdown, Form, Modal, Row, Col } from 'react-bootstrap';
import { useAppSelector } from '../../../hooks/redux';
import styles from './CreateDevice.module.scss';

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

  const removeItem = (number: number) => {
    setInfo(info.filter((e) => e.number !== number));
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
          <div className={styles.wrapperDropdown}>
            <Dropdown>
              <Dropdown.Toggle variant="success">Choose type</Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">Choose brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.customInput}>
            <Form.Control className={styles.customInput} placeholder="Enter device's name" />
            <Form.Control
              className={styles.customInput}
              placeholder="Enter device's price"
              type="number"
            />
            <Form.Control className={styles.customInput} type="file" />
          </div>

          <hr />
          <Button variant={'info'} onClick={addinfo}>
            Add new property
          </Button>
          {info.map((e) => (
            <Row key={e.number}>
              <Col>
                <Form.Control placeholder="Enter property name" />
              </Col>
              <Col>
                <Form.Control placeholder="Enter property description" />
              </Col>
              <Col>
                <Button
                  className={styles.modalButtonDelete}
                  variant={'outline-danger'}
                  onClick={() => removeItem(e.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
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
