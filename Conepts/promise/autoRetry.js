function fetchWithAutoRetry(fetcher, maximumRetryCount = 1) {
    try {
        if(maximumRetryCount > 0) {
            fetcher().then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err.message);
                fetchWithAutoRetry(fetcher, maximumRetryCount -1);
            });
        } else {
            console.log('Reached Maximum Retry count');
        }
    } catch(e) {

    }

}

 async function fetcher() { 
  
        return new Promise((resolve, reject) => {
            const ran = Math.random();
            if(ran > 0.5) {
                resolve('success');
            } else {
                reject(new Error('Failed'));
            }
        });
    /*} catch(e)  {
        return e.message;
    };*/

}


fetchWithAutoRetry(fetcher, 2);
