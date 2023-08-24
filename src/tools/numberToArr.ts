const numberToArr = (num: number, start: number = 0): number[] => {
  const result: number[] = [];
  for (let i = start; i <= num; i++) result.push(i);
  return result;
};

export { numberToArr };
