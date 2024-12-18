const day = parseInt(Deno.args.shift() || '') || 'all';

async function run(day: number) {
  console.log(`🎁 Running day: ${day}`);
  const runPath = `${import.meta.dirname}/day-${day}`;

  // Load input for the day
  const decoder = new TextDecoder('utf-8');
  const input = (decoder.decode(await Deno.readFile(`${runPath}/input.txt`))).split('\n');
  
  await runPuzzle(`${runPath}`, 1, input);
  await runPuzzle(`${runPath}`, 2, input);
}
async function runPuzzle(path: string, puzzle: number, input: string[]): Promise<number> {

  // Check to see if the puzzle file exists
  try {
    await Deno.stat(`${path}/puzzle${puzzle}/index.ts`);
  } catch {
    console.log(`   Puzzle ${puzzle}: not found, skipping`);
    return 0;
  }

  const file = await import(`${path}/puzzle${puzzle}/index.ts`);
  const result: unknown = await file.default(input);

  if (typeof result !== 'number') {
    throw new Error(`Puzzle ${puzzle} result is not a number`);
  }

  console.log(`   Puzzle ${puzzle}: ${result}`);

  return result;
}

(async () => {
  if (!import.meta.dirname) throw new Error('dirname not available');
  const mainFiles = await Array.fromAsync(Deno.readDir(import.meta.dirname));
  const days = mainFiles.filter((f) => f.name.match(/day-\d+/)).length;

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
