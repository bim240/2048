const calculateWinner = (data) => {
  return data
    .map((row) => row.slice())
    .flat()
    .includes(2048);
};

export default calculateWinner;
