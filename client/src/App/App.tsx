import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import { ErrorModal } from '../components/modals/errors/ErrorModal';
import NavBar from '../components/navBar/NavBar';
import { Router } from '../components/Router';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { checkAuthorization } from '../http/userApi';
import { ErrorSlice } from '../store/reducers/error';
import styles from './App.module.scss';

function App() {
  const { isLoading, isTokenActive } = useAppSelector((state) => state.reducerUser);
  const { error } = useAppSelector((state) => state.reducerError);
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState({ isError: false, textError: '' });

  useEffect(() => {
    if (error) {
      setErrors({ isError: true, textError: error });
    }
  }, [error]);

  useEffect(() => {
    dispatch(checkAuthorization());
  }, [isTokenActive]);

  const hideErrorModal = () => {
    setErrors({ isError: false, textError: '' });
    dispatch(ErrorSlice.actions.FetchingError(''));
  };

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
      <ErrorModal show={errors.isError} onHide={hideErrorModal} textError={errors.textError} />
    </>
  );
}

export default App;
