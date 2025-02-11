function foo(a, b) {
  // Type checking and conversion
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Please provide numbers.';
  }

  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('abc', 2)); //Output: Invalid input: Please provide numbers.