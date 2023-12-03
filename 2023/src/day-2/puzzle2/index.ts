interface RGB {[key: string]: number}
const CUBES_IN_BAG: RGB = {
  red: 12,
  green: 13,
  blue: 14
};

export default async function (input: string[]): Promise<number> {
  return input.reduce((sum: number, line: string, idx: number): number => {
    const gameID = idx+1;
    const rounds = line.replace(`Game ${gameID}: `, '');

    const power = rounds
      .split(/,|;/g)
      .map((str) => str.trim())
      .reduce((obj: RGB, str: string) => {
        const [amount, colour] = str.split(' ');
        if (Number(amount) > obj[colour]) {
          obj[colour] = Number(amount);
        }

        return obj;
      }, {red: 0, green: 0, blue: 0});

    return sum + (power.red * power.green * power.blue);
  }, 0);
}