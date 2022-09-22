import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { BrandAction } from '../../store/reducers/Devices/BrandSlice';
import styles from './BrandBar.module.scss';

export const BrandBar = () => {
  const { brands, selectedBrand } = useAppSelector((store) => store.reducerBrand);
  const dispatch = useDispatch();

  return (
    <Row className={styles.wrapperBrand}>
      {brands.map((e) => (
        <Card
          border={e.name === selectedBrand.name ? 'success' : 'light'}
          className={styles.card}
          key={e.id}
          onClick={() => dispatch(BrandAction.BrandSelectedItem(e))}
        >
          {e.name}
        </Card>
      ))}
    </Row>
  );
};
