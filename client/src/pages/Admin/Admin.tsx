import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreateBrand } from '../../components/modals/CreateBrand';
import { CreateDevice } from '../../components/modals/CreateDevice/CreateDevice';
import { CreateType } from '../../components/modals/CreateType';
import styles from './Admin.module.scss';

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className={styles.wrapperButtonAdmin}>
      <Button
        onClick={() => setTypeVisible(true)}
        variant={'outline-dark'}
        className={styles.adminButton}
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={'outline-dark'}
        className={styles.adminButton}
      >
        Add brand
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={'outline-dark'}
        className={styles.adminButton}
      >
        Add device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};
