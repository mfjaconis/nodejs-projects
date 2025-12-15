async function permittedCharacters() {
  let permitted = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVXYZ");
  }

  if (process.env.LOWERCASE_LETTERS === "true") {
    permitted.push(..."abcdefghijklmnopqrstuvxyz");
  }

  if (process.env.NUMBERS === "true") {
    permitted.push(..."0123456789");
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    permitted.push(...";.,>!@#$%¨&*()_-=+><:^~}[`]}^`");
  }

  //   console.log("special" + process.env.SPECIAL_CHARACTERS);
  //   console.log("LOWERCASE_LETTERS" + process.env.LOWERCASE_LETTERS);
  //   console.log("NUMBERS" + process.env.NUMBERS);
  //   console.log("UPPERCASE" + process.env.UPPERCASE_LETTERS);

  return permitted;
}

export default permittedCharacters;
