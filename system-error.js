import timers from 'timers/promises'
const timeoutAsync = timers.setTimeout

// const arr = ['1', '2']
// const result = arr.map(async (item) => {
//   console.log('starting process')
//   await timeoutAsync(100)
//   console.log(item)
//   console.log(await Promise.resolve('timeout order!'))
//   await timeoutAsync(100)
//   console.log('debug')
//
//   return parseInt(item) * 2
// })
//
// console.log('results', await Promise.all(result))

setTimeout(async () => {
  console.log('starting process')
  await timeoutAsync(100)
  console.log('debug')
  console.log(await Promise.resolve('timeout order!'))
  await timeoutAsync(100)
  console.log('debug')

  await Promise.reject('promise reject on timeout')
}, 1000)

const throwError = (msg) => { throw new Error(msg) }

process.on('unhandledRejection', (e) => {
  console.log('unhandledRejection', e)
})

try {
  console.log('hello')
  console.log('world')
  throwError('ERROR on try')
} catch (e) {
  console.log('got on catch', e.message)
}

Promise.reject('Promise reject in any local')

setTimeout(() => { Promise.reject('Promise reject in timeout') }, 1000)
