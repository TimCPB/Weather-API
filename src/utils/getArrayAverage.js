exports.getArrayAverage = ({ array }) => {
  const nonNullArray = _removeNullValues({ array: array });
  const average = _returnAverage({ array: nonNullArray });

  return nonNullArray.length > 0 ? average : null;
};

_removeNullValues = ({ array }) => {
  return array.filter((e) => e != null);
};

_returnAverage = ({ array }) => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};
