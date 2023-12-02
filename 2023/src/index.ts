import {promises as fs} from 'fs';

const day = parseInt(process.argv[2]) || 'all';

async function run(day: number) {
  console.log(`🎁 Running day: ${day}`);
  const runPath = `${__dirname}/day-${day}`;

  // Load input for the day
  const input = (await fs.readFile(`${runPath}/input.txt`, 'utf8')).split('\n');

  await runPuzzle(`${runPath}`, 1, input);
  await runPuzzle(`${runPath}`, 2, input);
}
async function runPuzzle(path: string, puzzle: number, input: string[]): Promise<number> {
  const file = await import(`${path}/puzzle${puzzle}`);
  const result: unknown = await file.default(input);

  if (typeof result !== 'number') {
    throw new Error(`Puzzle ${puzzle} result is not a number`);
  }

  console.log(`   Puzzle ${puzzle}: ${result}`);

  return result;
}

(async () => {
  const days = (await fs.readdir(__dirname)).filter((f) => f.match(/day-\d+/)).length;

  if (day === 'all') {
    for (let i = 1; i <= days; i++) {
      await run(i);
      console.log(''); // Add a blank line between days
    }
  } else {
    await run(day);
  }

  console.log('🎄🎄 Happy Code-mas!! 🎄🎄')
})();
