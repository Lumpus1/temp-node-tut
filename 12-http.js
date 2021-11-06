const http = require('http')

    // req = användaren efterfrågar data
    // res = det vi skickar tillbaka
const server = http.createServer((req, res) => {
    // req kommer vara ett stort objekt med mycket information.
    if (req.url === '/') {
        /* res.write('Hey, listen!')
        res.end() */
        res.end('Hey, listen!')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
    
})

server.listen(5000)