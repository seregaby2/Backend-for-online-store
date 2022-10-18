import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { BrandBar } from '../../components/brandBar/BrandBar';
import { DeviceList } from '../../components/deviceList/DeviceList';
import { TypeBar } from '../../components/typeBar/TypeBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTypes, getBrands, getDevices } from '../../http/deviceApi';
import { DeviceSlice } from '../../store/reducers/Devices/DevicesSlice';
import styles from './Shop.module.scss';
import styleForPagination from './pagination.module.scss';

export const Shop = () => {
  const dispatch = useAppDispatch();
  const { GetCurrentPage } = DeviceSlice.actions;
  const { totalCountDevice, limitDevice } = useAppSelector((store) => store.reducerDevice);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    dispatch(GetCurrentPage(event.selected + 1));
  };

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getBrands());
    dispatch(getDevices());
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
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(totalCountDevice / limitDevice)}
            marginPagesDisplayed={1}
            previousLabel="previous"
            breakClassName={styleForPagination.page_item}
            containerClassName={styleForPagination.pagination}
            pageClassName={styleForPagination.page_item}
            previousClassName={styleForPagination.page_prev}
            nextClassName={styleForPagination.page_next}
            activeClassName={styleForPagination.active}
          />
        </Col>
      </Row>
    </Container>
  );
};
