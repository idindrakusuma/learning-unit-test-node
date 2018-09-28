const aritmethic = require('./aritmethic');
const expect = require('expect');

it('Should add 2 numbers', () => {
  const res = aritmethic.add(3,2);

  /* use standard mocha */
  // if (res !== 5) {
  //   throw new Error(`Expected 5, but got ${res}`);
  // }

  /* use expect library */
  expect(res).toBe(5);
})

it('Should divide 2 numbers', () => {
  const res = aritmethic.divide(6,3);
  expect(res).toBe(2);
})

it('Shoudl square number', () => {
  const res = aritmethic.square(4);
  expect(res).toBe(2);
})

it('It should be Genap', () => {
  const res = aritmethic.isEven(12);
  expect(res).toBe(true);
})

it('It should to be Ganjil', () => {
  const res = aritmethic.isEven(113);
  expect(res).toBe(false);
})

/* async test */
it('It should be Async Add from 2 numbers', (done) => {
  aritmethic.asyncAdd(10, 2, (sum) => {
    expect(sum).toBe(12);
    done();
  })
})