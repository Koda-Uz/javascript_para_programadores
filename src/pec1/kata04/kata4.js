export default function removeFirtAndLast(string) {
  if (string.length > 2) {
    return string.substring(1, string.length - 1);
  }
  return string;
}
