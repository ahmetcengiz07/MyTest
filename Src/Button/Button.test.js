import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import Button from './Button';
import {styles} from './ButtonStyle';

beforeAll(() => {
  console.log('Bir kere çalış arkasından diğer testler çalışssın ');
});

beforeEach(() => {
  console.log('Her testten önce bir kez çalış');
});

afterEach(() => {
  console.log('Her testten sonra bir kez çalış');
});

afterAll(() => {
  console.log('Tüm testlerden sonra bir kez çalış');
});
//cleanup() fonksiyonu kullanama gerek yok çünkü afterAll içerisinde mevcut

test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot(); 
  //Cevap almak istenilen nesneyi parametre olarak alır.Burada toMatchSnapshot koşulunu sağlayan nesne comp mudur ?
});

test('Check Number', () => {
  expect(5 + 2).toBe(7);
});
//Button komponenti ile oluşturuluna texte gönderilen title parametresi Button komponenti içersindeki text de yazan string ifade ile aynı mı değil mi ?
//koşul kontrolünü jest yapar , Komponentin renderını da testing-library yapar.
test('should render title correctly', () => {
  const testTitle = 'test';
  const comp = render(<Button title={testTitle} />);
  const buttonText = comp.getByTestId('button-title').children[0];
  console.log(buttonText);
});

test('should be trigged onPress', () => {
  const mockFunction = jest.fn(); //fonks ismi önemli değil jest.fn() ile mockFunctionun her çağırıldığında çalışıp çalışmadığını görebiliriz
  const comp = render(<Button onPress={mockFunction} />);
  const buttonTouchable = comp.getByTestId('button-touchable');
  fireEvent(buttonTouchable, 'Press'); //user eventi (tıklama) kontrolü
  expect(mockFunction).toBeCalledTimes(1); //kontrolünü yaptığımız yer
});

test('should render given or default theme style', () => {
  const selectedTheme = 'primary';
  const comp = render(<Button theme={selectedTheme} />);
  const buttonContainer = comp.getByTestId('button-touchable').props.style;
  expect(buttonContainer).toMatchObject(styles[selectedTheme].container);
  //verilen theme başarılı bir şekilde buttonun içerisine verilmiş
});
