new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result);
    return result * 2; // <-- (1)
  
  }) // <-- (2)
  // .then…