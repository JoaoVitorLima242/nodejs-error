import Http from 'http'

let count = 1
async function handler(req, res) {
  count++;
  try {
    if (count % 2 === 0) {
      await Promise.reject('error into the handler')
    }
    for await (const data of req) {
      if (count % 2 !== 0) {
        await Promise.reject('error into the for')
      }
      res.end()
    }
  }

  catch (e) {
    console.log('Server error: ', e)
    res.writeHead(500)
    res.write(JSON.stringify({ message: "internal server error" }))
    res.end()
  }

}

Http.createServer(handler).listen(3000, () => console.log('running at 3000'))
