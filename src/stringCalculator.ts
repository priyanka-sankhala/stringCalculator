const extractDelimiters = (input: string): number[] => {
  let numbers = input;
  //findout the delimiters and provide the array of numbers
  if (input.startsWith("//")) {
    const delimiter = input.substring(2, input.indexOf("\n"));
    const skipCount = 4 + delimiter.length;

    //skip
    return numbers
      .substring(skipCount - 1)
      .split(delimiter)
      .map(Number);
  } else if (input.indexOf("\n")) {
    return numbers.replace("\n", ",").split(",").map(Number);
  } else {
    return numbers.split(",").map(Number);
  }
};

export const add = (input: string): number => {
  // If input is empty or only contains whitespace, return 0
  if (!input.trim()) return 0;
  const numberArray = extractDelimiters(input);
  const negatives: number[] = [];

  // Compute sum and collect negative numbers in a single pass
  const sum = numberArray.reduce((acc, current) => {
    if (current < 0) {
      negatives.push(current);
    } else if (!isNaN(current)) {
      acc += current;
    }
    return acc;
  }, 0);

  // If there are negative numbers, throw an exception with a message
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return sum;
};



