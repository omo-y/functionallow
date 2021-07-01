function func1(str) {
  return str;
}
console.log(func1("合格"));

function func11() {
  return "合格１";
}
console.log(func11());

function func2(a, b) {
  return a * b;
}
console.log(func2(10, 6));

function func3(str1, str2, str3) {
  return str1 + str2 + str3;
}
console.log(func4("合", "格", "した"));

//テンプレート文字列使用
function func4(str1, str2, str3) {
  return `${str1}${str2}${str3}`;
}
console.log(func4("合", "格", "したよ"));

//アロー関数
const func10 = (str) => str;
console.log(func10("合格2"));

//アロー関数その2
const func110 = () => "合格110";
console.log(func110());

//アロー関数その3
const func22 = (a, b) => a * b;
console.log(func22(20, 50));

//アロー関数その3
const func33 = (str1, str2, str3) => `${str1}${str2}${str3}`;
console.log(func33("合", "格", "したで"));
