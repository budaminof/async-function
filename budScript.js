// const { exec } = require('child_process');


let num = 0;

// function execScript (limit) {
//
//   exec('node ./app.js', (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//     num++;
//     if( num < limit ) {
//       execScript(limit)
//     }
//   });
//
// }
//
// execScript(5);


const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function execScriptAsync(numOrders, numScriptRuns, orderName) {
  //hgjh
  let startingLocation = 0;
  let endingLocation = 100;
  let orderNameLocal = orderName;
  for (let i = 0; i < numOrders; i++) {
    if (!i == 0)  {
      orderNameLocal = orderName + i;
    }
    for (let j = 0; j < numScriptRuns; j++) {
      startingLocation += 100;
      endingLocation += 100;
      const { stdout, stderr } = await exec(`node app.js -o ${orderNameLocal} -e ${endingLocation} -s ${startingLocation}`);
      console.log("Loop ", j)
      console.log(stdout);
    }
  }
}


execScriptAsync(2, 3, "Test")
// // Script with spaces in the filename:
// const bat = spawn('"my script.cmd"', ['a', 'b'], { shell: true });
// // or:
// exec('"my script.cmd" a b', (err, stdout, stderr) => {
//   // ...
// });
