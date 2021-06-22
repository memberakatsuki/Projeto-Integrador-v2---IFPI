const { io } = require("../http")
const { ListByUser, createMessages } = require("../services/MessagesService")
const { findAllWithoutAdmin, findByUserId, updateAdminID } = require("../services/ConnectionsService")
const connection = require("../models/Connection")

io.on("connect", async (socket) =>{

  const allConnectionsWithoutAdmin = await findAllWithoutAdmin()

  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

  socket.on("admin_list_messages_by_user", async (params, callback) => {
    const { user_id } = params;

    const allMessages = await ListByUser(user_id);

    callback(allMessages);
  });

  socket.on("admin_send_message", async (params) => {
    const { user_id, text } = params;

    await createMessages({
      user_id,
      admin_id: socket.id,
      text,
    });

    const { socket_id } = await findByUserId(user_id);

    io.to(socket_id).emit("admin_send_to_client", {
      text,
      socket_id: socket.id,
    });
  });

  socket.on("admin_user_in_support", async (params) =>{
    const { user_id } = params
    
    //const { socket_id } = await findByUserId(user_id);

/*     await updateAdminID({
      user_id: user_id,
      admin_id: socket.id
    }) */
/*     await connection.update(
      {
        admin_id: socket.id
      },
      {
        where: {
          user_id: user_id
        }
      }
    ) */
    
    const allConnectionsWithoutAdmin = await findAllWithoutAdmin()

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);
  })
})


// video 1:36