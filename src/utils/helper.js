const charactersO = "asdfjkl;";
const charactersR = charactersO.split("").reverse().join("");
const generateArray = (characters) => {
  const charactersLength = characters.length;
  let x = [];
  for (let i = 0; i < charactersLength - 1; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      let y = "";
      y = y + characters.charAt(i) + characters.charAt(j) + " ";
      x.push(y);
    }
  }
  return x;
};
const arr1 = generateArray(charactersO);
const arr2 = generateArray(charactersR);
const bigramsArray = [...arr1, ...arr2];

export const generateProblem = (combination, repetition) => {
  const arrLen = bigramsArray.length;
  let x = "";
  for (let i = 0; i < combination; i++) {
    x = x + bigramsArray[Math.floor(Math.random() * arrLen)];
  }
  x = x.repeat(repetition);
  x = x.trim();
  return x;
};

export const ToBeTyped = (problemString, inputString) => {
  let value = "";
  if (inputString.length === 0) {
    value = problemString.charAt(0);
  } else if (problemString.startsWith(inputString)) {
    const tvalue = problemString.charAt(inputString.length);
    if (tvalue === " ") {
      value = "space";
    } else {
      value = tvalue;
    }
  } else {
    value = "Error ! click backspace";
  }
  return value;
};
