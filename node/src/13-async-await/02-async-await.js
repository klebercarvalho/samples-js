// We could explicitly return a promise, that would be the same:
async function f() {
    return Promise.resolve(1);
  }
  
  f().then(console.log); // 1