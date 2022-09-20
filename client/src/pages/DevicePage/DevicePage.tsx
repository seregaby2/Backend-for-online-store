import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';
import styles from './DevicePage.module.scss';

export const DevicePage = () => {
  const { devices } = useAppSelector((store) => store.reducerDevice);
  const description = [
    { id: 1, title: 'RAM', description: '5 Gb' },
    { id: 2, title: 'Camera', description: '12 Mp' },
    { id: 3, title: 'CPU', description: 'Intel Core' },
    { id: 4, title: 'Count of cores', description: '2' },
    { id: 5, title: 'Battery', description: '5 Ah' },
  ];
  return (
    <>
      <Container fluid>
        <div className={styles.wrapperDevicePage}>
          <Col md={4}>
            <Image src={devices[0].img} className={styles.deviceImage}></Image>
          </Col>
          <Col md={4} className={styles.wrapperMiddleCollumn}>
            <div className={styles.deviceName}>{devices[0].name} </div>
            <div className={styles.ratingImage}>{devices[0].rating}</div>
          </Col>
          <Col md={4}>
            <Card className={styles.wrapperEndCollumn}>
              <h3>The price is {devices[0].price} $</h3>
              <Button size={'lg'} variant={'outline-secondary'}>
                Add to basket
              </Button>
            </Card>
          </Col>
        </div>
        <Row className={styles.wrapperDescription}>
          <h2>Характеристики:</h2>
          {description.map((e, i) => (
            <Row key={e.id} style={{ background: i % 2 === 0 ? 'lightgray' : 'transparent' }}>
              {e.title}: {e.description}
            </Row>
          ))}
        </Row>
      </Container>
    </>
  );
};
