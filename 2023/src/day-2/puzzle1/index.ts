const CUBES_IN_BAG: {[key: string]: number | undefined} = {
  red: 12,
  green: 13,
  blue: 14
};

export default async function (input: string[]): Promise<number> {
  return input.reduce((sum: number, line: string, idx: number): number => {
    const gameID = idx+1;
    const rounds = line.replace(`Game ${gameID}: `, '');

    const impossible = rounds
      .split(/,|;/g)
      .map((str) => str.trim())
      .some((str) => {
        const [amount, colour] = str.split(' ');
        const cubesInBag = CUBES_IN_BAG[colour];
        if (!cubesInBag) throw new Error(`Unknown colour: ${colour}`);
        return Number(amount) > cubesInBag;
      })

    return (impossible) ? sum : sum + gameID;
  }, 0);
}