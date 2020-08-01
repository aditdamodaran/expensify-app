// any long running task (asynchronous)
const promise = new Promise((resolve, reject) => {
  // Long running task
  setTimeout(() => {
    // resolve('This is my resolved data')
    reject('Something went wrong!')
  }, 1500)
})

console.log('before')

promise.then((data) => {
  // fires when/if promise resolves
  console.log(data)
}).catch((error) => {
  // fires when/if promise rejects
  console.log('error: ', error)
})

console.log('after')