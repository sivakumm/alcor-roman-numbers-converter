import {convertToRoman} from './roman.converter';

describe('Converter', () => {

  [
    {arabic: 1, roman: 'I'},
    {arabic: 2, roman: 'II'},
    {arabic: 3, roman: 'III'},
    {arabic: 4, roman: 'IV'},
    {arabic: 5, roman: 'V'},
    {arabic: 6, roman: 'VI'},
    {arabic: 7, roman: 'VII'},
    {arabic: 8, roman: 'VIII'},
    {arabic: 9, roman: 'IX'},
    {arabic: 10, roman: 'X'},
    {arabic: 11, roman: 'XI'},
    {arabic: 12, roman: 'XII'},
    {arabic: 20, roman: 'XX'},
    {arabic: 30, roman: 'XXX'},
    {arabic: 40, roman: 'XL'},
    {arabic: 50, roman: 'L'},
    {arabic: 51, roman: 'LI'},
    {arabic: 60, roman: 'LX'},
    {arabic: 70, roman: 'LXX'},
    {arabic: 80, roman: 'LXXX'},
    {arabic: 90, roman: 'XC'},
    {arabic: 100, roman: 'C'},
    {arabic: 200, roman: 'CC'},
    {arabic: 300, roman: 'CCC'},
    {arabic: 400, roman: 'CD'},
    {arabic: 500, roman: 'D'},
    {arabic: 600, roman: 'DC'},
    {arabic: 700, roman: 'DCC'},
    {arabic: 800, roman: 'DCCC'},
    {arabic: 900, roman: 'CM'},
    {arabic: 1000, roman: 'M'},
    {arabic: 846, roman: 'DCCCXLVI'},
    {arabic: 1999, roman: 'MCMXCIX'},
    {arabic: 2008, roman: 'MMVIII'},
  ]
    .forEach(({arabic, roman}) => {
      it(`should convert arabic ${arabic} into roman ${roman}`, () => {
        const actual = convertToRoman(arabic);

        expect(actual).toBe(roman);
      });
    });
});
