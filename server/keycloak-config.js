const session = require('express-session')
const Keycloak = require('keycloak-connect')
const chalk = require('chalk')

let keycloak

const keycloakConfig = {
  realm: 'rrk-test2',
  'bearer-only': true,
  'auth-server-url': 'http://localhost:8080/auth/',
  'ssl-required': 'external',
  resource: 'node',
  'verify-token-audience': true,
  'use-resource-role-mappings': true,
  'confidential-port': 0,
}

const initKeycloak = () => {
  if (keycloak) {
    console.log('Autotryzacja ')
    return keycloak
  } else {
    console.log('initializing keycloak')
    const memoryStore = new session.MemoryStore()
    keycloak = new Keycloak(
      {
        store: memoryStore,
        secret: 'dddd',
        resave: false,
        saveUninitialized: true,
      },
      keycloakConfig
    )
    return keycloak
  }
}

module.exports = { initKeycloak }
