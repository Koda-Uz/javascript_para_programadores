export default function sumPositiveElements(array) {
  let suma = 0;
  array.forEach((element) => {
    if (element > 0) {
      suma = suma + element;
    }
  });
  return suma;
}
