import { useState } from 'react'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value)
    console.log(event.target.password.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password"/>
      </label>
      <button>Send</button>
    </form>
  )
}

export default App
