// // 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
const formatDate = date => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

console.log(formatDate(new Date('2021/7/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"

// 2. 요일 구하기
const getDay = date => {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  return dayNames[new Date(date).getDay()] + '요일';
};
console.log(getDay('2021-07-24')); // => '토요일'
console.log(getDay('2021-07-25')); // => '일요일'
console.log(getDay('2021-07-26')); // => '월요일'

// 3. 특정 달의 말일 구하기
const getLastDateOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

console.log(getLastDateOfMonth(2021, 0)); // => 31
console.log(getLastDateOfMonth(2021, 1)); // => 28

// 4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

console.log(getFirstDayOfMonth(2021, 0)); // => 5
console.log(getFirstDayOfMonth(2021, 11)); // => 3

// 5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
const getLastDayOfMonth = (year, month) =>
  new Date(year, month + 1, 0).getDay();

console.log(getLastDayOfMonth(2021, 0)); // => 0
console.log(getLastDayOfMonth(2021, 11)); // => 5

// 6. 두 날짜 사이의 일수 구하기

const diffDays = (date1, date2) =>
  Math.floor(Math.abs(date1 - date2) / (1000 * 3600 * 24));

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364

// 6. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
const isEqualDate = (date1, date2) =>
  date1.toString().slice(0, 16) === date2.toString().slice(0, 16);

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false
