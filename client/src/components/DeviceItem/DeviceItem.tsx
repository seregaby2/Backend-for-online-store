import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/star_disable.png';
import { useAppSelector } from '../../hooks/redux';
import { IDevices } from '../../interfaces/interfaceDevices';
import { AppRoute, REACT_APP_API_URL } from '../../utils/consts';
import styles from './DeviceItem.module.scss';

type Myprops = {
  devices: IDevices;
};

export const DeviceItem = (props: Myprops) => {
  const { devices } = props;
  const { brands } = useAppSelector((state) => state.reducerBrand);
  const navigate = useNavigate();
  return (
    <Col>
      <Card
        className={styles.card}
        onClick={() => navigate(AppRoute.DEVICE_ROUTE + '/' + devices.id)}
      >
        <div className={styles.wrapperImage}>
          <Image src={`${REACT_APP_API_URL}/${devices.img}`} />
        </div>

        <div className={styles.wrapperDescription}>
          <div className={styles.titleBrand}>
            {brands.map((e) => (e.id === devices.brandId ? e.name : ''))}
          </div>
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
