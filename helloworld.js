var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Week 2 Homework Successful!\n\nUpdated on September 3, 2023 for Week 3 Ansible Playbook\n')
}).listen(3333)

// Console will print the message
console.log('Server running')