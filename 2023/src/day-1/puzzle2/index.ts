const strDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const strDigitsRegex = `\\d|${strDigits.join('|')}`;
const digitsRegexFirst = new RegExp(strDigitsRegex, 'g');
const digitsRegexLast = new RegExp(`.*(${strDigitsRegex})`, 'g');

export default async function (input: string[]): Promise<number> {
  return input.reduce((sum: number, line: string, idx): number => {
    const [firstMatch] = [...line.matchAll(digitsRegexFirst)];
    const [lastMatch] = [...line.matchAll(digitsRegexLast)];

    const firstStr = firstMatch[0] || '';
    const lastStr = lastMatch[1] || '';

    const first = (isNaN(Number(firstStr))) ? strDigits.indexOf(firstStr) : Number(firstStr);
    const last = (isNaN(Number(lastStr))) ? strDigits.indexOf(lastStr) : Number(lastStr);

    const combined = Number((first || last) + '' + (last || first));

    // const formatted = line.replace(new RegExp(`${firstStr}|${lastStr}`), (x) => `\x1b[4m${x}\x1b[0m`);
    // console.log(idx+1,':', formatted, '', firstStr, '+', lastStr,'=', combined, ',', 'sum:', sum, 'total:', sum + combined);

    return sum + combined;
  }, 0);
}