const  { http }   = require("./http")
require("./websocket/client")
require("./websocket/admin")

http.listen( process.env.PORT || 3333, () => {
  console.log("server running on port 3333!")
})
