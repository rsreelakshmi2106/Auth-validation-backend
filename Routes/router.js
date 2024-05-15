const express = require('express')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = express.Router()

router.post('/add-user',userController.register)
router.post('/login',userController.login)

module.exports = router