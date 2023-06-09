import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Jonh Doe',
      email: 'jonh.doe@gmail.com'
    })
  }

  return res.writeHead(404).end('Hoje não amigo')
})

server.listen(3333)
