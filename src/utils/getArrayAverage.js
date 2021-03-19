exports.getArrayAverage = ({ array }) => {
  const nonNullArray = array.filter((e) => e != null);
  const result = nonNullArray.reduce((a, b) => a + b, 0) / nonNullArray.length;
  return result;
};
