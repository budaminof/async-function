const axios = require('axios');

let numCalls = 0;

// Get user input and store in json file.
//     Json is read by dfp.js script.
// Execute dfp.js

// const limit = parseInt(process.argv[2]);

if (process.argv[2] === '-h' || process.argv[2] === '--help' || !process.argv[2]) {
  console.log("help string with instructions and possible flags")
  process.exit(0);
}

let args = {};
for (let i = 1; i < process.argv.length; i++) {
  let arg = process.argv[i];
  if (/-\w/.test(arg)) {
    args[arg.replace("-", "")] = process.argv[i + 1];
    i++;
  }
}

// console.log(args);

console.log(args.o, args.s, args.e);

return axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
  console.log(res.data);
  return res;
})

// function getDogStuff(limit) {
//   return axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
//     console.log("resolved " + numCalls);
//     numCalls++;
//     if (numCalls < limit) {
//         return getDogStuff(limit);
//     }
//   })
// }

// getDogStuff(limit)
