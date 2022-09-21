import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import NavBar from '../../components/navBar/NavBar';
import { Router } from '../../components/Router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkAuthorization } from '../../http/userApi';
import styles from './App.module.scss';

function App() {
  const { isLoading } = useAppSelector((state) => state.reducerUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization());
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <div className={styles.wrapperOverlay}></div>
          <Spinner animation="border" variant="primary" className={styles.spinner} />
        </>
      )}
      <NavBar />
      <Router />
    </>
  );
}

export default App;
