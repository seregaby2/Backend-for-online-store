import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrandBar } from '../../components/brandBar/BrandBar';
import { DeviceList } from '../../components/deviceList/DeviceList';
import { TypeBar } from '../../components/typeBar/TypeBar';
import { useAppDispatch } from '../../hooks/redux';
import { getTypes } from '../../http/deviceApi';
import styles from './Shop.module.scss';

export const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col className={styles.wrapperLeftSide} md={3}>
          <TypeBar />
        </Col>
        <Col className={styles.wrapperBrand} md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};
