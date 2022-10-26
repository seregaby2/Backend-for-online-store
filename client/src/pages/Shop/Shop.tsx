import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { BrandBar } from '../../components/brandBar/BrandBar';
import { DeviceList } from '../../components/deviceList/DeviceList';
import { TypeBar } from '../../components/typeBar/TypeBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getTypes, getBrands, getDevices } from '../../http/deviceApi';
import { DeviceSlice } from '../../store/reducers/Devices/DevicesSlice';
import styles from './Shop.module.scss';
import styleForPagination from './pagination.module.scss';
import { TypeSlice } from '../../store/reducers/Devices/TypeSlice';
import { BrandSlice } from '../../store/reducers/Devices/BrandSlice';

export const Shop = () => {
  const dispatch = useAppDispatch();
  const { GetCurrentPage } = DeviceSlice.actions;
  const { TypeSelectedItem } = TypeSlice.actions;
  const { BrandSelectedItem } = BrandSlice.actions;
  const { totalCountDevice, limitDevice, currentPage } = useAppSelector(
    (store) => store.reducerDevice
  );
  const { selectedType } = useAppSelector((store) => store.reducerType);
  const { selectedBrand } = useAppSelector((store) => store.reducerBrand);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: any) => {
    dispatch(GetCurrentPage(event.selected + 1));
  };

  const resetFilter = () => {
    dispatch(TypeSelectedItem({ name: '', id: null }));
    dispatch(BrandSelectedItem({ name: '', id: null }));
    dispatch(getDevices(null, null, currentPage, limitDevice));
  };

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getBrands());
    currentPage > totalCountDevice / limitDevice
      ? dispatch(getDevices(selectedType.id || null, selectedBrand.id || null, 1, limitDevice))
      : dispatch(
          getDevices(selectedType.id || null, selectedBrand.id || null, currentPage, limitDevice)
        );
  }, [currentPage, selectedBrand, selectedType]);
  return (
    <Container fluid>
      <Row>
        <Col className={styles.wrapperLeftSide} md={3}>
          <TypeBar />
          <Button className={styles.resetFilterButton} variant="warning" onClick={resetFilter}>
            Reset filter
          </Button>
        </Col>
        <Col className={styles.wrapperBrand} md={9}>
          <BrandBar />
          <DeviceList />
          {totalCountDevice > 0 ? (
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
          ) : (
            <div className={styles.helpTitle}>Sorry, we do not have such a device</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
