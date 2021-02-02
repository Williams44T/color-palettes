const HEXCODES = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

export default function getOppositeColor(color) {
  var color = color.slice(1);
  var reversed = color
    .split('')
    .map((char, i) => HEXCODES[HEXCODES.length - i - 1])
    .join('');
  return '#' + reversed;
}
