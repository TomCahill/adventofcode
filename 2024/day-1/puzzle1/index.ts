export default async function (input: string[]): Promise<number> {
  let distanceTotal = 0;

  const split = input.reduce((out: [string[], string[]], item) => {
    const [l, r] = item.split("  ");
    out[0].push(l);
    out[1].push(r);
    return out;
  }, [[], []]);

  split[0].sort();
  split[1].sort();

  for (let x = 0; x < split[0].length; x++) {
    const distance = Math.abs(parseInt(split[0][x]) - parseInt(split[1][x]));
    distanceTotal += distance;
  }

  return distanceTotal;
}
