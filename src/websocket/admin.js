const { io } = require("../http")
const ConnectionsService = require("../services/ConnectionsService")
const MessagesService = require("../services/MessagesService")


io.on("connect", async (socket) =>{

  const connectionsService = new ConnectionsService
  const messagesService = new MessagesService

  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin()

  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allMessages = await messagesService.ListByUser(user_id);

    callback(allMessages);
  });

  socket.on("admin_send_message", async (params) => {
    const { user_id, text } = params;

    await messagesService.createMessages({
      user_id: user_id,
      admin_id: socket.id,
      text,
    });

    const { socket_id } = await connectionsService.findByUserId(user_id);

    io.to(socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id,
    });
  });

  socket.on("admin_user_in_support", async (params) =>{
    const { user_id } = params
    

    await connectionsService.updateAdminID({
      user_id,
      admin_id: socket.id
    })
    const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin()

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);
  })
})


// video 1:36