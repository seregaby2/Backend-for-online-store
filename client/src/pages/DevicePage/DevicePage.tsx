import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDevice } from '../../http/deviceApi';
import { IDevices } from '../../interfaces/interfaceDevices';
import { REACT_APP_API_URL } from '../../utils/consts';
import styles from './DevicePage.module.scss';

export const DevicePage = () => {
  const { device } = useAppSelector((store) => store.reducerDevice);
  const dispatch = useAppDispatch();

  // const [device1, setDevice1] = useState<IDevices>({ info: [] });

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDevice(Number(id)));

    console.log(device, 'device');
  }, []);

  return (
    <>
      <Container fluid>
        <div className={styles.wrapperDevicePage}>
          <Col md={4}>
            <Image
              src={`${REACT_APP_API_URL}/${device.img}`}
              className={styles.deviceImage}
            ></Image>
          </Col>
          <Col md={4} className={styles.wrapperMiddleCollumn}>
            <div className={styles.deviceName}>{device.name} </div>
            <div className={styles.ratingImage}>{device.rating}</div>
          </Col>
          <Col md={4}>
            <Card className={styles.wrapperEndCollumn}>
              <h3>The price is {device.price} $</h3>
              <Button size={'lg'} variant={'outline-secondary'}>
                Add to basket
              </Button>
            </Card>
          </Col>
        </div>
        <Row className={styles.wrapperDescription}>
          <h2>Характеристики:</h2>
          {device.info?.map((e, i) => (
            <Row key={e.id} style={{ background: i % 2 === 0 ? 'lightgray' : 'transparent' }}>
              {e.title}: {e.description}
            </Row>
          ))}
        </Row>
      </Container>
    </>
  );
};
