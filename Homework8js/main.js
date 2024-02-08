// // str1

// function printInitialLetters(n) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const initialLetters = alphabet.slice(0, n).toUpperCase();
//   console.log(initialLetters);
// }

// const n = 5;
// printInitialLetters(n);

// // str2

// function identifyCharacterType(character) {
//   const digits = "0123456789";
//   const letters = "abcdefghijklmnopqrstuvwxyz";

//   if (digits.includes(character)) {
//     console.log("digit");
//   } else if (letters.includes(character.toLowerCase())) {
//     console.log("lotin");
//   } else {
//     console.log("Nol");
//   }
// }

// identifyCharacterType("7");
// identifyCharacterType("A");
// identifyCharacterType("@");

// // str3

// function printUTF16Codes(str) {
//   const firstCharCode = str.charCodeAt(0);
//   const lastCharCode = str.charCodeAt(str.length - 1);

//   console.log("Birinchi belgi UTF-16 kodi:", firstCharCode);
//   console.log("Oxirgi belgi UTF-16 kodi:", lastCharCode);
// }

// const string = "Hello";
// printUTF16Codes(string);

// // str4

// function generateString(n, character) {
//     const result = character.repeat(n);

//     console.log(result);
// }
// const n = 5;
// const character = 'A';
// generateString(n, character);

// // str5

// function reverseString(str) {
//   const reversedStr = str.split("").reverse().join("");
//   console.log(reversedStr);
// }

// const inputString = "Hello";
// reverseString(inputString);

// // str6

// function getStringStars(str, n) {
//     const characters = str.split('');
//         let result = [];

//     characters.forEach((char, index) => {
//         result.push(char);
//         if (index < characters.length - 1) {
//             for (let i = 0; i < n; i++) {
//                 result.push('*');
//             }
//         }
//     });
//         return result.join('');
// }

// const inputString = "Hello";
// const n = 3;
// const resultString = getStringStars(inputString, n);
// console.log(resultString);

// // str7

// function countDigits(str) {
//   let digitCount = 0;
//   for (const char of str) {
//     if (!isNaN(parseInt(char))) {
//       digitCount++;
//     }
//   }
//   console.log("Stringdagi raqamlar soni:", digitCount);
// }
// const inputString = "Hello123World456";
// countDigits(inputString);

// // str8

// function countSmallLetters(str) {
//     var smallLatinCount = str.replace(/[^a-z]/g, "").length;
//     var smallCyrillicCount = str.replace(/[^а-я]/g, "").length;
//     return smallLatinCount + smallCyrillicCount;
// }

// var string8 = "String8. String berilgan.";
// var smallLettersCount = countSmallLetters(string8);
// console.log("Umumiy kichik harflar soni: " + smallLettersCount);

// // str9

// function convertToUpperToLower(str) {
//   var result = str.replace(/[A-Z]/g, function (match) {
//     return match.toLowerCase();
//   });

//   return result;
// }

// var string9 = "String9. String berilgan.";
// var convertedString = convertToUpperToLower(string9);
// console.log("Natija: " + convertedString);

// // str10

// function swapCase(str) {
//   var result = "";
//   for (var i = 0; i < str.length; i++) {
//     var char = str.charAt(i);
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }
//   return result;
// }

// var string10 = "String10. String berilgan.";
// var swappedString = swapCase(string10);
// console.log("Natija: " + swappedString);

// // str11

// function checkNumberType(str) {
//     if (!isNaN(parseFloat(str)) && isFinite(str)) {
//         if (str.indexOf('.') !== -1) {
//             return 2;
//         } else {
//             return 1;
//         }
//     } else {
//         return 0;
//     }
// }
// var string11 = "12345";
// var result = checkNumberType(string11);
// console.log("Natija: " + result);

// // str12

// function getInverseNumber(n) {
//     var inverse = 0;
//     while (n > 0) {
//         inverse = inverse * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }
//     return inverse;
// }
// var n = 12345;
// var result = getInverseNumber(n);
// console.log("Teskarisi: " + result);

// // str13

// function evaluateExpression(expression) {
//   var parts = expression.split(/\s*[\+\-]\s*/);
//   var result = parseInt(parts[0]);
//   for (var i = 1; i < parts.length; i++) {
//     var operator = expression.charAt(parts[i - 1].length).trim();
//     var operand = parseInt(parts[i]);

//     if (operator === "+") {
//       result += operand;
//     } else if (operator === "-") {
//       result -= operand;
//     }
//   }

//   return result;
// }

// var expression = "7 + 3 - 2";
// var result = evaluateExpression(expression);
// console.log("Ifoda qiymati: " + result);

// // str14

// function combineStrings(N1, N2, S1, S2) {
//   var firstPart = S1.substring(0, N1);
//   var secondPart = S2.substring(S2.length - N2);
//   var newString = firstPart + secondPart;

//   return newString;
// }
// var N1 = 3;
// var N2 = 2;
// var S1 = "abcdefgh";
// var S2 = "ijklmn";
// var result = combineStrings(N1, N2, S1, S2);
// console.log("Yangi string: " + result);

// // str15

// function duplicateChar(C, S) {
//   var regex = new RegExp(C, "g");
//   var duplicatedString = S.replace(regex, C + C);
//   return duplicatedString;
// }
// var C = "a";
// var S = "abcdeafgahai";
// var result = duplicateChar(C, S);
// console.log("Yangi string: " + result);
