import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from './App';

test('should match will snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot();
});
test('should add item to list', () => {
  const comp = render(<App />);
  const input = comp.getByTestId('Input-Area');
  //test id si Input-Area olan komponenti getir

  fireEvent.changeText(input, 'test element');
  //inputa test element değerini yaz
  const submitButton = comp.getByTestId('button-touchable');
  fireEvent.press(submitButton);
  //submitbuttondaki ilgili test ıd inin olduğu komponenti getir ve ona basılıp basılmadığını test et

  const list = comp.getByTestId('list').props;
  expect(list.data.length).toBe(1);

  //submitButtonu 1 kez fireEvent ile çağırdığımız için datada 1 eleman mı oluşuyor diye kontrol ediyoruz
});
