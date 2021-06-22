const  { io }  = require("../http");
const { createUsers, findByEmail } = require("../services/UsersService");
const {
  createConnection,
  findByUserId,
  findBySocketID,
  findAllWithoutAdmin,
  deleteBySocketId
} = require("../services/ConnectionsService");
const { createMessages, ListByUser,deleteMessages } = require("../services/MessagesService");

io.on("connect", (socket) => {
  let userId = null;
  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params;
    let user_id = null;
    const userExists = await findByEmail(email);

    if (!userExists) {
      const user = await createUsers(email);

      await createConnection({
        user_id: user.id,
        socket_id,
      });
      user_id = user.id;
      userId = user.id
    } else {
      user_id = userExists.id;
      userId = userExists.id
      const connection = await findByUserId(userExists.id);

      if (!connection) {
        await createConnection({
          user_id: userExists.id,
          socket_id,
        });
      } else {
        connection.socket_id = socket_id;
        connection
          .update({
            socket_id: socket_id,
          })
          .then((e) => {
            e.save();
          });
      }
    }
    await createMessages({
      text,
      user_id,
    });

    const allMessages = await ListByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);

    const allUsers = await findAllWithoutAdmin();

    io.emit("admin_list_all_users", allUsers);
  });

  socket.on("client_send_to_admin", async (params) => {
    const { text, socket_admin_id } = params;
    const socket_id = socket.id;

    const { user_id } = await findBySocketID(socket_id);
    const message = await createMessages({
      text,
      user_id,
    });

    io.to(socket_admin_id).emit("admin_receive_message", {
      message,
      socket_id,
    });
  });

  socket.on("disconnect", async () => {
    await deleteBySocketId(socket.id)
    await deleteMessages(userId);
  });
});
