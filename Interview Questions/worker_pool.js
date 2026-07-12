    class WorkerPool {
    constructor(maxWorkers) {
        this.maxWorkers = maxWorkers;
        this.activeWorkers = 0;
        this.queue = [];
    }

    run(taskFunction) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                taskFunction,
                resolve,
                reject,
            })

            this.next();
        })
    }

    next() {
        if (this.activeWorkers >= this.maxWorkers) {
            return;
        }

        if (this.queue.length === 0) {
            return;
        }

        this.activeWorkers++;

        const {taskFunction, resolve, reject } =this.queue.shift();
        
        Promise.resolve()
        .then(taskFunction)
        .then(resolve)
        .catch(reject)
        .finally(() => {
            this.activeWorkers--;
            this.next();
        })

    }
}

const pool = new WorkerPool(2);

async function task(id, delay) {
	return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), delay));
}

pool.run(() => task(1, 1000)).then(console.log);
pool.run(() => task(2, 500)).then(console.log);
pool.run(() => task(3, 200)).then(console.log);
