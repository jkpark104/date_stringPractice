// 1. 유효한 팰린드롬
// 문자열 s가 주어지면 영문자와 숫자만 고려하고 대소문자를 무시하여 회문인지 확인한다.
function isPalindrome(str) {
  const sample = str.toLowerCase().replace(/[^0-9a-z]/g, '');
  return sample === [...sample].reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false

// 2. 신규 아이디 추천
// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
function solution(newId) {
  return newId
    .toLowerCase() // 1단계
    .replace(/[^\w-.]/g, '') // 2단계 ; \w -> (알파벳 + 숫자 + _)
    .replace(/\.{2,}/g, '.') // 3단계
    .replace(/^\.|\.$/g, '') // 4단계
    .replace(/^$/g, 'a') // 5단계
    .slice(0, 15) // 6단계(1)
    .replace(/^\.|\.$/g, '') // 6단계(2)
    .replace(
      /^.{1,2}$/g,
      match => match + match[match.length - 1].repeat(3 - match.length) // 7단계
    );
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // bat.y.abcdefghi
console.log(solution('z-+.^.')); // z--
console.log(solution('abcdefghijklmn.p')); // abcdefghijklmn

// // 3. A를 #으로
const replaceAtoSharp = str => str.replace(/A/g, '#');

console.log(replaceAtoSharp('BANANA')); // => B#N#N#

// // 4. 대문자 찾기
const countUpperCase = str => str.match(/[A-Z]/g).length;

console.log(countUpperCase('KoreaTimeGood'));

// //5. 문자 찾기
const count = (str, char) => str.match(new RegExp(char, 'g')).length;

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3

// //6. 대소문자 변환
const toggleCase = str =>
  str.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
    lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  );

console.log(toggleCase('StuDY')); // => 'sTUdy'

// //7. 문자열 압축
const compress = str =>
  str.replace(/(.)\1+/g, match => match[0] + match.length);

console.log(compress('ABBCCCE')); // => AB2C3E
