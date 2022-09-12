import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { TypeAction } from '../../store/reducers/Devices/TypeSlice';

export const TypeBar = () => {
  const { types, selectedType } = useAppSelector((store) => store.reducerType);
  const dispatch = useDispatch();
  return (
    <ListGroup>
      {types.map((e) => (
        <ListGroup.Item
          active={selectedType === e.name}
          key={e.id}
          onClick={() => dispatch(TypeAction.TypeSelectedItem(e.name))}
        >
          {e.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
