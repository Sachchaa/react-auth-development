import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/authContext"
import Signup from "./components/signup"
import Dashboard from './components/dashboard'
import Login from './components/login'
import PrivateRoute from './components/privateRoute'
import ForgotPassword from './components/forgotPassword'

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
