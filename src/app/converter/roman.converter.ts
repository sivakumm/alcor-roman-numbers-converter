import {RomanNumber} from '../models/roman';
import {ArabicNumber} from '../models/arabic';

const arabicToRomanMap: Record<number, string> = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

const descending = (a: number, b: number) => b - a;

const arabicToRomanMapKeysInDescendingOrder = Object.keys(arabicToRomanMap)
  .map((stringKey) => Number(stringKey))
  .sort(descending)

export const convertToRoman = (arabicInput: ArabicNumber): RomanNumber => {
  // make a copy, so the input value is not modified
  let arabicNumber = Number(arabicInput);

  let romanOutput = '';

  for (const arabic of arabicToRomanMapKeysInDescendingOrder) {
    while (arabicNumber >= arabic) {
      const timesContainsArabicNumber = Math.floor(arabicNumber / arabic);
      romanOutput += arabicToRomanMap[arabic].repeat(timesContainsArabicNumber);
      arabicNumber -= (timesContainsArabicNumber * arabic);
    }
  }

  return romanOutput;
}
