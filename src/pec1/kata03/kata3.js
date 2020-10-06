export default function repeatString(string, num) {
  let answer = '';
  while (num > 0) {
    answer += string;
    num -= 1;
  }
  return answer;
}
