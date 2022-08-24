const promise = new Promise(function (resolve, reject) {
  resolve('hey');
});

const cows = 19;

const countCows = new Promise((resolve, reject) => {
  if (cows > 15) {
    resolve(`we have ${cows} cows in the farm`);
  } else {
    reject('There is not enough cows');
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log('Counting done'));
