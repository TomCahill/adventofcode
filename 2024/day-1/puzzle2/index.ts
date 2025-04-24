export default async function (input: string[]): Promise<number> {
  const leftCol: string[] = [];
  const split = input.reduce((out: { [key: string]: number }, item) => {
    const [l, r] = item.split("   ");
    leftCol.push(l);

    if (!out[l]) out[l] = 0;
    if (!out[r]) out[r] = 0;

    out[r] += 1;

    return out;
  }, {});

  return leftCol.reduce((out, key) => {
    return out + (parseInt(key) * split[key]);
  }, 0);
}
