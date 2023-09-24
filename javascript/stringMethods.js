// JS String Methods

// ⭐️ length method
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lengthOfTxt = txt.length;
console.log(lengthOfTxt); // 26

// ⭐️ indexOf method
var txt = "Please locate where 'locate' occurs!";
var indexOfTxt = txt.indexOf("locate"); // First occurrence
console.log(indexOfTxt); // 7

// ⭐️ lastIndexOf method
var txt = "Please locate where 'locate' occurs!";
var lastIndexOfTxt = txt.lastIndexOf("locate"); // Last occurrence
console.log(lastIndexOfTxt); // 21

// ⭐️ search method: similar to indexOf method
var txt = "Please locate where 'locate' occurs!";
var searchTxt = txt.search("locate"); // First occurrence
console.log(searchTxt); // 7

// ⭐️ There are 3 methods for extracting string parts:

// slice(start, end)
// slice can accept negative values
var txt = "Apple, Banana, Kiwi";
var sliceTxt = txt.slice(7, 13);
console.log(sliceTxt); // Banana

var txt = "Apple, Banana, Kiwi";
var sliceTxt = txt.slice(-12, -6);
console.log(sliceTxt); // Banana

// substring(start, end)
// substring cannot accept negative values
var txt = "Apple, Banana, Kiwi";
var substringTxt = txt.substring(7, 13);
console.log(substringTxt);

// substr(start, length)
var txt = "Apple, Banana, Kiwi";
var substrTxt = txt.substr(7, 6);
console.log(substrTxt);

// ⭐️ replace method
var txt = "Please visit Microsoft!";
var replaceTxt = txt.replace("Microsoft", "W3Schools");
console.log(replaceTxt); // Please visit W3Schools!

// it only replaces the first match
var txt = "Please visit Microsoft and Microsoft!";
var replaceTxt = txt.replace("Microsoft", "W3Schools");
console.log(replaceTxt); // Please visit W3Schools and Microsoft!

// by default, the replace() method is case sensitive
// to replace case insensitive, use a regular expression with an /i flag (insensitive)
var txt = "Please visit Microsoft!";
var replaceTxt = txt.replace(/MICROSOFT/i, "W3Schools");
console.log(replaceTxt); // Please visit W3Schools!

// ⭐️ toUpperCase method
var txt = "Hello World!";
var upperCaseTxt = txt.toUpperCase();
console.log(upperCaseTxt); // HELLO WORLD!

// ⭐️ toLowerCase method
var txt = "Hello World!";
var lowerCaseTxt = txt.toLowerCase();
console.log(lowerCaseTxt); // hello world!

// ⭐️ concat method
var txt1 = "Hello";
var txt2 = "World";
var concatTxt = txt1.concat(" ", txt2);
console.log(concatTxt); // Hello World

// contact() can be used instead of the plus operator
var txt1 = "Hello";
var txt2 = "World";
var concatTxt = txt1 + " " + txt2;
console.log(concatTxt); // Hello World

// ✅ all string methods return a new string. They don't modify the original string (immutable). Strings are immutable: Strings cannot be changed, only replaced.

// ⭐️ trim method: removes whitespace from both sides of a string
var txt = "       Hello World!        ";
var trimTxt = txt.trim();
console.log(trimTxt); // Hello World!

// ⭐️ String Padding
// padStart(length, string)
var txt = "5";
var padStartTxt = txt.padStart(4, 0);
console.log(padStartTxt); // 0005

// padEnd(length, string)
var txt = "5";
var padEndTxt = txt.padEnd(4, 0);
console.log(padEndTxt); // 5000

// ⭐️ charAt: Extracting String Characters
var txt = "HELLO WORLD";
var charAtTxt = txt.charAt(0);
console.log(charAtTxt); // H

// ⭐️ charCodeAt: The charCodeAt() method returns the unicode of the character at a specified index in a string
var txt = "HELLO WORLD";
var charCodeAtTxt = txt.charCodeAt(0);
console.log(charCodeAtTxt); // 72

// ⭐️ Property Access: consider a string as an array of characters
var txt = "HELLO WORLD";
var propertyAccessTxt = txt[0];
console.log(propertyAccessTxt); // H

// ⭐️ if we want to access a string as an array, we can use the split method
var txt = "Hello World"; 
var splitTxt = txt.split("");
console.log(splitTxt); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// we can also split like this
// var txt = "a, b, c, d, e";
// var splitTxt = txt.split(",");
// console.log(splitTxt); // ["a", "b", "c", "d", "e"]
// var txt = "a b c d e";
// var splitTxt = txt.split(" ");
// console.log(splitTxt); // ["a", "b", "c", "d", "e"]