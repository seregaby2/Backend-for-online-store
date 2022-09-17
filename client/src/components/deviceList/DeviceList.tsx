import React from 'react';
import { Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';
import { DeviceItem } from '../DeviceItem/DeviceItem';

export const DeviceList = () => {
  const { devices } = useAppSelector((store) => store.reducerDevice);
  return (
    <Row>
      {devices.map((e) => (
        <DeviceItem key={e.id} devices={e} />
      ))}
    </Row>
  );
};
