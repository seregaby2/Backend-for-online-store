import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/star_disable.png';
import { IDevices } from '../../interfaces/interfaceDevices';
import { AppRoute } from '../../utils/consts';
import styles from './DeviceItem.module.scss';

type Myprops = {
  devices: IDevices;
};

export const DeviceItem = (props: Myprops) => {
  const { devices } = props;
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col>
      <Card
        className={styles.card}
        onClick={() => navigate(AppRoute.DEVICE_ROUTE + '/' + devices.id)}
      >
        <Image src={devices.img} />
        <div className={styles.wrapperDescription}>
          <div className={styles.titleBrand}>Samsung</div>
          <div className={styles.wrapperRating}>
            <div>{devices.rating}</div>
            <Image src={star} className={styles.star} />
          </div>
        </div>
        <div>{devices.name}</div>
      </Card>
    </Col>
  );
};
