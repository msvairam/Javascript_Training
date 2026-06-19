Array.prototype.chop = function (size) {
  // temp array
  const temp = [...this];

  if (!size) {
    return temp;
  }

  const output = [];
  let i = 0;

  // iterate the array
  while (i < temp.length) {
    output.push(temp.slice(i, i + size));
    i = i + size;
  }
  return output;
};


const mapLimit = function(arr, limit, fn)  {

    return new Promise((resolve, reject) => {
    const chopped = arr.chop(limit);

    const final = chopped.reduce((acc, curr) => {
        return acc.then((val) => {
           return new Promise((resolve, reject) => {
                const result = [];
                let totalCompleted = 0;
                curr.forEach((e) => {
                    fn(e, (error, value) => {
                        if (error) {
                            reject(error);
                        } else {
                            totalCompleted++;
                            result.push(value);
                            if (totalCompleted >= curr.length) {
                                resolve([...val, ...result]);
                            }
                        }
                    })
                })
           })
        })
    }, Promise.resolve([]));
        final.then((result) => {
            resolve(result);
        })
        .catch((err) => {
            reject(err);
        })
    });
}


let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
