/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal, Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { createDevice, getBrands, getDevices, getTypes } from '../../../http/deviceApi';
import { BrandSlice } from '../../../store/reducers/Devices/BrandSlice';
import { TypeSlice } from '../../../store/reducers/Devices/TypeSlice';
import styles from './CreateDevice.module.scss';

type MyProps = {
  show: boolean;
  onHide(): void;
};

export const CreateDevice = (props: MyProps) => {
  const { show, onHide } = props;
  const { brands, selectedBrand } = useAppSelector((store) => store.reducerBrand);
  const { types, selectedType } = useAppSelector((store) => store.reducerType);
  const { totalCountDevice, limitDevice, currentPage } = useAppSelector(
    (store) => store.reducerDevice
  );

  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(1000);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [file, setFile] = useState<any | null>(null);
  const [info, setInfo] = useState([{ title: '', description: '', number: 0 }]);

  const addinfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeItem = (number: number) => {
    setInfo(info.filter((e) => e.number !== number));
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((e) => (e.number === number ? { ...e, [key]: value } : e)));
  };

  const addDevice = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', String(selectedBrand.id));
    formData.append('typeId', String(selectedType.id));
    formData.append('info', JSON.stringify(info));
    await createDevice(formData);
    setName('');
    setPrice(0);
    setInfo([{ title: '', description: '', number: 0 }]);
    onHide();
  };

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getBrands());
    dispatch(
      getDevices(selectedType.id || null, selectedBrand.id || null, currentPage, limitDevice)
    );
  }, []);

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
              <Dropdown.Toggle variant="success">
                {selectedType.name ? selectedType.name : 'Choose type'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {types.map((type) => (
                  <Dropdown.Item
                    key={type.id}
                    onClick={() => dispatch(TypeSlice.actions.TypeSelectedItem(type))}
                  >
                    {type.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                {selectedBrand.name ? selectedBrand.name : 'Choose brand'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {brands.map((brand) => (
                  <Dropdown.Item
                    key={brand.id}
                    onClick={() => dispatch(BrandSlice.actions.BrandSelectedItem(brand))}
                  >
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.customInput}>
            <Form.Control
              className={styles.customInput}
              placeholder="Enter device's name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <Form.Control
              className={styles.customInput}
              placeholder="Enter device's price"
              type="number"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(Number(e.target.value))
              }
            />
            <Form.Control className={styles.customInput} type="file" onChange={selectFile} />
          </div>

          <hr />
          <Button variant={'info'} onClick={addinfo}>
            Add new property
          </Button>
          {info.map((e) => (
            <Row key={e.number}>
              <Col>
                <Form.Control
                  placeholder="Enter property name"
                  value={e.title}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    changeInfo('title', event.target.value, e.number)
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Enter property description"
                  value={e.description}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    changeInfo('description', event.target.value, e.number)
                  }
                />
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
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
