import { Col, Container, Row } from 'react-bootstrap';
import { BrandBar } from '../../components/brandBar/BrandBar';
import { TypeBar } from '../../components/typeBar/TypeBar';
import styles from './Shop.module.scss';

export const Shop = () => {
  return (
    <Container fluid>
      <Row>
        <Col className={styles.wrapperLeftSide} md={3}>
          <TypeBar />
        </Col>
        <Col className={styles.wrapperBrand} md={9}>
          <BrandBar />
        </Col>
      </Row>
    </Container>
  );
};
