exports.getArrayAverage = ({ array }) => {
  const nonNullArray = array.filter((e) => e != null);
  console.log(nonNullArray);
  const result = nonNullArray.reduce((a, b) => a + b, 0) / nonNullArray.length;
  console.log(result);
  return result;
};
