exports.generateArray = ({ minimum, maximum }) => {
  const newArray = [];
  for (let i = minimum; i <= maximum; i++) {
    newArray.push(i);
  }
  return newArray;
};
