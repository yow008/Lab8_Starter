// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2
test('test a valid phone number', () => {
    expect(functions.isPhoneNumber('(949) 345-8793')).toBe(true)
})

test('test a valid phone number', () => {
    expect(functions.isPhoneNumber('838-948-2948')).toBe(true)
})

test('test an invalid phone number', () => {
    expect(functions.isPhoneNumber('19898098202')).toBe(false)
})

test('test an invalid phone number', () => {
    expect(functions.isPhoneNumber('103-idp-3928')).toBe(false)
})

test('test a valid email', () => {
    expect(functions.isEmail('isusoe@qi.com')).toBe(true)
})

test('test a valid email', () => {
    expect(functions.isEmail('20392039@Qart.cN')).toBe(true)
})

test('test an invalid email', () => {
    expect(functions.isEmail('isusoe@qi.c')).toBe(false)
})

test('test an invalid email', () => {
    expect(functions.isEmail('20392039@QartcN')).toBe(false)
})

test('test a valid/strong password', () => {
    expect(functions.isStrongPassword('Ad28')).toBe(true)
})

test('test a valid/strong password', () => {
    expect(functions.isStrongPassword('z2I_8birth00__e')).toBe(true)
})

test('test a(n) invalid/weak password', () => {
    expect(functions.isStrongPassword('z2i8ieicsecie_lol')).toBe(false)
})

test('test a(n) invalid/weak password', () => {
    expect(functions.isStrongPassword('96iii')).toBe(false)
})

test('test a valid date', () => {
    expect(functions.isDate('09/10/2019')).toBe(true)
})

test('test a valid date', () => {
    expect(functions.isDate('19/1/2020')).toBe(true)
})

test('test an invalid date', () => {
    expect(functions.isDate('9/9/19')).toBe(false)
})

test('test an invalid date', () => {
    expect(functions.isDate('2020.11.11')).toBe(false)
})

test('test a valid hex code for a color', () => {
    expect(functions.isHexColor('#e93Dd6')).toBe(true)
})

test('test a valid hex code for a color', () => {
    expect(functions.isHexColor('449')).toBe(true)
})

test('test a valid hex code for a color', () => {
    expect(functions.isHexColor('#4830')).toBe(false)
})

test('test a valid hex code for a color', () => {
    expect(functions.isHexColor('#10e43p')).toBe(false)
})