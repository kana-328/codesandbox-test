const hoge = {
  name: "nami",
  age: 26
};
//スプレッド構文
// const arr = [1,2];
// console.log(arr)
// console.log(...arr);
// console.log({...hoge});
// console.log(hoge);

// const sunFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// }

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, ...arr3] = arr2;
// console.log(arr3);
// console.log(num1)
// console.log(arr2)

//配列のコピー結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);
//配列の結合

const arr7 = [...arr4, ...arr5];
arr7[0] = 100;
console.log(arr7);
console.log(arr4);

//sunFunc(arr[0], arr[1]);
// sunFunc(...arr);
//const message = `私の名前は${hoge.name}です。年齢は${hoge.age}です`;
//console.log(message);
//分割代入
// const { name, age } = hoge;
// const message2 = `私の名前は${name}です。年齢は${age}ですよ！！！`;

// console.log(message2);

// const myProfile = ['kana', '28'];
// const [namae, nennrei] = myProfile;
// const message3 = `名前は${namae}です。年齢は${nennrei}だよ！！！`
// console.log(message3);

// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(5, 6));

// //デフォルト値 指定しないとundefindになる
// const sayHello = (name = "gesut") => {
//   return console.log(`hello!!!${name}さん`)
// }

// sayHello();

//mapやfilter

// const nameArr = ["田中", "山田", "加藤"]

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2)

// const newNameArr = nameArr.map((name, index) => {
//   if(name === "田中") {
//     return `${index + 1}番目${name}さん`;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr)
// const numArr = [1,2,3,4,5]
// const newNumArr = numArr.filter((num) => {
//   return num % 2 !==1;
// })
// console.log(newNumArr);

//javascriptはnullはfalse判定

// const num = null;
// const fee = num || null;
// console.log(fee)
