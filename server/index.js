const express = require('express')
const keycloak = require('./keycloak-config.js').initKeycloak()
const cors = require('cors')

const router = express.Router()

const app = express()
app.use(cors())

app.use(keycloak.middleware())

router.get('/user', keycloak.protect('user'), (req, res) =>
  res.send('Cześć user')
)
router.get('/admin', keycloak.protect('admin'), (req, res) =>
  res.send('Czesć admin')
)

router.get('/all', keycloak.protect(['admin', 'user']), (req, res) =>
  res.send('Cześć wszyscy')
)

app.use(router)

app.use('/', (req, res) => {
  res.send('Access denied')
})
app.listen(5000, console.log('Running'))
