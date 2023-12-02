const strDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const strDigitsRegex = new RegExp(`\\d|${strDigits.join('|')}`, 'g');

export default async function (input: string[]): Promise<number> {
  return input.reduce((sum: number, line: string): number => {
    const digits = line.match(strDigitsRegex);
    if (!digits) throw new Error('No digits found in line');

    const firstStr = digits.shift() || '';
    const lastStr = digits.pop() || '';

    const first = (isNaN(Number(firstStr))) ? strDigits.indexOf(firstStr) : Number(firstStr);
    const last = (isNaN(Number(lastStr))) ? strDigits.indexOf(lastStr) : Number(lastStr);

    return sum + Number((first || last) + '' + (last || first));
  }, 0);
}