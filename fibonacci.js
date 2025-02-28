// skip node and filepath
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide a number.');
  process.exit(1);
}

let n = Number(args[0]);

if (!Number.isInteger(n) || n < 0) {
  console.log('Invalid input. Please enter a non-negative integer.');
  process.exit(1);
}

console.log(fibsRec(n));

// Recursive
function fibsRec(number) {
  if (number === 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];
  let prevFibs = fibsRec(number - 1);
  let nextFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2];

  return [...prevFibs, nextFib];
}
