/*
The keyword await makes JavaScript wait until that promise settles 
and returns its result.
Here’s an example with a promise that resolves in 1 second:
*/
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f();