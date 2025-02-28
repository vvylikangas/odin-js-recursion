// skip node and filepath
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please provide at least one number.');
  process.exit(1);
}

// parse input into an array
let numbers = args[0].split(',').map(Number);

// validate that inputs are integers
if (numbers.some((n) => !Number.isInteger(n))) {
  console.log('Invalid input. Please enter valid integers.');
  process.exit(1);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // add possible remaining elements to result
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(numbers));
