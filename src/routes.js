const express = require('express')
const routes = express.Router()
const { findByUserSettings, create, update } = require("./controllers/SettingsController")
const { showByUser } = require("./controllers/MessagesController")

routes.post('/settings', create)
routes.get('/settings/:username', findByUserSettings)
routes.put('/settings/:username', update)
routes.get("/messages/:id", showByUser)

/*
const SettingsController = require("./services/SettingsController")
const UsersControllers = require("./services/UsersControllers")
const MessagesController = require("./services/MessagesController")

const settingsController = new SettingsController()
const usersControllers = new UsersControllers()
const messagesController = new MessagesController()

const routes = express.Router()

routes.post('/settings', settingsController.create)
routes.post('/users', usersControllers.create)
routes.post('/messages', messagesController.create)

routes.get("/messages/:id", messagesController.showByUser)*/

module.exports = routes