export default async function (input: string[]): Promise<number> {
  return input.reduce((sum: number, line: string): number => {
    const digits = line.replace(/\D/g, '').split('').map(Number);
    const first = digits.shift();
    const last = digits.pop();

    return sum + Number((first || last) + '' + (last || first));
  }, 0);
}