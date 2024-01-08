const promise1 = Promise.resolve(`Promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));

/* 
  This is console the promise1 first and then promise2 after 2 seconds. But we want to get all the results together.
*/

Promise.all([promise1, promise2]).then((res) => {
    console.log(res);
});

/* 
  Now we will get an array of results like this:
  [ 'Promise 1 resolved', 'Promise 2 resolved' ]
*/

/* 
  Now if we need only one promise to be resolved and we want the promise that resolves faster than all other promises, we can use Promise.race
*/

Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});
// This will only console the promise1 result because it resolves faster than promise2.
