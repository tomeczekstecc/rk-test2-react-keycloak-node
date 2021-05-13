import React, { useState, useEffect } from 'react'
import Keycloak from 'keycloak-js'

import axiosInstance from './components/AxiosInter'

const Secured = () => {
  const [keycloakIns, setKeycloakIns] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [response, setResponse] = useState(null)

  const handleCall = (endpoint) => {
    axiosInstance
      .get(`http://localhost:5000/${endpoint}`)
      .then((res) => setResponse(res.data))
      .catch((err) => setResponse(err.message))
  }

  useEffect(() => {
    const keycloak = Keycloak('/keycloak.json')
    keycloak
      .init({
        onLoad: 'login-required',
      })
      .then((authenticated) => {
        if (authenticated) {
          setKeycloakIns(keycloak)
          setIsAuthenticated(authenticated)
          window.accessToken = keycloak.token
          console.log(window.accessToken)
        }
      })
  }, [])

  if (isAuthenticated) {
    return (
      <>
        <div>To jest tajna strona Twojej aplikacji</div>
        <button onClick={() => handleCall('user')}>Call user</button>
        <button onClick={() => handleCall('admin')}>Call admin</button>
        <button onClick={() => handleCall('all')}>Call all</button>
        <h3>Odpowiedź z backendu: {response}</h3>
      </>
    )
  } else {
    return (
      <div>
        <h2>Autoryzacja niezakończona...</h2>
      </div>
    )
  }
}

export default Secured
