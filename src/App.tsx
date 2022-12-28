import { useState } from 'react'
import { Container } from 'react-bootstrap';

import reactLogo from './assets/react.svg'
// import './App.css'
import Footer from './components/Footer';
import Header from "./components/header";

function App() {

  return (
    <>
    <Header />
      <Container>
        <h1>First line of the app</h1>
      </Container>
    <Footer />
    </>
  )
}

export default App
