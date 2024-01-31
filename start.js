const array = Array.from(
  { length: 1000 },
  () => Math.floor(Math.random() * 100) + 1
);

function linier(arrayz) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arrayz.length - 1; i++) {
      if (arrayz[i] > arrayz[i + 1]) {
        let temp = arrayz[i];
        arrayz[i] = arrayz[i + 1];
        arrayz[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arrayz;
}

function sorts(arrayz) {}

console.time("linier");
console.log(linier(array));
console.timeEnd("linier");
