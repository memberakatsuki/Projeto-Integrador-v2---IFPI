const express = require('express')
const routes = express.Router()
const SettingsController = require("./controllers/SettingsController")
const MessagesController = require("./controllers/MessagesController")
const UsersController = require("./controllers/UsersController")

const settingsController = new SettingsController
const messagesController = new MessagesController
const usersController = new UsersController

routes.post('/settings', settingsController.create)
routes.post('/users', usersController.create)
routes.post('/messages', messagesController.create)

routes.get('/settings/:username', settingsController.findByUserSettings)
routes.get("/messages/:id", messagesController.showByUser)
routes.put('/settings/:username', settingsController.update)


module.exports = routes