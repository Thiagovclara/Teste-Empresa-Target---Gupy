function reverteString(string) {
  let str = "";
  str = string;

  let string_rev = "";

  let i = 0;
  for (i = str.length - 1; i >= 0; i--) {
    string_rev = string_rev + str[i];
  }

  console.log(string_rev);
}

reverteString(process.argv[2]);
