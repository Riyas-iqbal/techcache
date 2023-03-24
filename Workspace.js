let data = true;

asyncTask()
    .then((data) => asyncTask2(data))
    .then((data) => asyncTask3(data))
    .then((data) => asyncTask4(data))
    .catch((error) => console.log('error', error))

function asyncTask() {
    return new Promise((resolve, reject) => {
        console.log('First Promise worked')
        if (data) {
            resolve(data)
        } else {
            reject(false)
        }
    })
}

function asyncTask2(newData) {
    return new Promise((resolve, reject) => {
        console.log('Second Promise worked')
        if (newData) {
            resolve(newData)
        } else {
            reject(false)
        }
    })
}

function asyncTask3(newData) {
    return new Promise((resolve, reject) => {
        console.log('Third Promise worked')
        if (newData) {
            resolve(newData)
        } else {
            reject(false)
        }
    })
}

function asyncTask4(newData) {
    console.log('Fourth Promise worked')
    return new Promise((resolve, reject) => {
        if (newData) {
            resolve(newData)
        } else {
            reject(false)
        }
    })
}