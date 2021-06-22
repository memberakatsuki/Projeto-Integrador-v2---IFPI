const  { http }   = require("./http")
require("./websocket/client")
require("./websocket/admin")

http.listen(3333, () => {
  console.log("Server is running on port 3333")
})
