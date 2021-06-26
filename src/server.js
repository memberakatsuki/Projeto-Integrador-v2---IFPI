const  { http }   = require("./http")
require("./websocket/client")
require("./websocket/admin")

http.listen(process.env.PORT)
