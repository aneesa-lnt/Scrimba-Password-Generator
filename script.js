var chars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// let passwordLength = passLength;
let password;
let password2;
let password3;
let password4;

let pass1 = document.getElementById("pass-one");
let pass2 = document.getElementById("pass-two");
let pass3 = document.getElementById("pass-three");
let pass4 = document.getElementById("pass-four");

function getPass() {
  password = "";
  let passLength = document.getElementById("pass-length").value;
  for (i = 0; i < passLength; i++) {
    let character = Math.floor(Math.random() * chars.length);
    password += chars[character];
  }
  return password;
}

function getPassTwo() {
  password2 = "";
  let passLength = document.getElementById("pass-length").value;
  for (i = 0; i < passLength; i++) {
    let character = Math.floor(Math.random() * chars.length);
    password2 += chars[character];
  }
  return password2;
}

function getPassThree() {
  password3 = "";
  let passLength = document.getElementById("pass-length").value;
  for (i = 0; i < passLength; i++) {
    let character = Math.floor(Math.random() * chars.length);
    password3 += chars[character];
  }
  return password3;
}

function getPassFour() {
  password4 = "";
  let passLength = document.getElementById("pass-length").value;
  for (i = 0; i < passLength; i++) {
    let character = Math.floor(Math.random() * chars.length);
    password4 += chars[character];
  }
  return password4;
}

function genPass() {
  getPass();
  pass1.textContent = password;
  getPassTwo();
  pass2.textContent = password2;
  getPassThree();
  pass3.textContent = password3;
  getPassFour();
  pass4.textContent = password4;
}

function copyPassOne() {
  navigator.clipboard.writeText(password).then(() => {
    alert("Copied to clipboard " + password);
  });
}

function copyPassTwo() {
  navigator.clipboard.writeText(password2).then(() => {
    alert("Copied to clipboard " + password2);
  });
}

function copyPassThree() {
  navigator.clipboard.writeText(password3).then(() => {
    alert("Copied to clipboard " + password3);
  });
}

function copyPassFour() {
  navigator.clipboard.writeText(password4).then(() => {
    alert("Copied to clipboard " + password4);
  });
}
