// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('Phone number true 1', () => {
  expect(isPhoneNumber("559-789-3424")).toBe(true);
});

test('Phone number true 2', () => {
  expect(isPhoneNumber("423-423-6463")).toBe(true);
});

test('Phone number fasle 1', () => {
  expect(isPhoneNumber("1111")).toBe(false);
});

test('Phone number fasle 2', () => {
  expect(isPhoneNumber("")).toBe(false);
});

test('Email true 1', () => {
  expect(isEmail("ashu@ui.com")).toBe(true);
});

test('Email true 2', () => {
  expect(isEmail("adssd@uir.com")).toBe(true);
});

test('Email false 1', () => {
  expect(isEmail("ashu@uicom")).toBe(false);
});

test('Email false 2', () => {
  expect(isEmail("ashuui")).toBe(false);
});

test('Strong true 1', () => {
  expect(isStrongPassword("rsftw")).toBe(true);
});

test('Strong true 2', () => {
  expect(isStrongPassword("twxggtr")).toBe(true);
});

test('Strong false 1', () => {
  expect(isStrongPassword("4444")).toBe(false);
});

test('Strong false 2', () => {
  expect(isStrongPassword("yjeei&")).toBe(false);
});

test('Date true 1', () => {
  expect(isDate("12/31/2003")).toBe(true);
});

test('Date true 2', () => {
  expect(isDate("12/1/1903")).toBe(true);
});

test('Date false 1', () => {
  expect(isDate("1432/31/2003")).toBe(false);
});

test('Date false 2', () => {
  expect(isDate("Dec/31/2003")).toBe(false);
});

test('Hex true 1', () => {
  expect(isHexColor("#af8")).toBe(true);
});

test('Hex true 2', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('Hex false 1', () => {
  expect(isHexColor("10zb29")).toBe(false);
});

test('Hex false 2', () => {
  expect(isHexColor("red")).toBe(false);
});