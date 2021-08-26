const getName = async () => {
  const name = await fetch("http://localhost:8000/");
  return name;
};

getName()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
