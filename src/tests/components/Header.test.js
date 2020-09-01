import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { startEditExpense } from '../../actions/expenses';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapeer = shallow(<Header startLogout={startLogout}/>)
  wrapeer.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled();
});