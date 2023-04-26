import NewExpense from './components/newExpense/NewExpense'
import Expenses from './components/expenses/Expenses'
import Header from './components/header/Header'
import Login from './components/login/Login'
import { useEffect, useState } from 'react'
import Button from './components/UI/button/Button'
import styled from 'styled-components'
import Users from './components/users/Users'
const product =[
  {
    id: '1',
    title: 'Apple',
    price: 120,
    date: new Date('2023, 2, 9'),
  },
]

function App() {
  const [isLogin,setLogin]=useState(false)
  const [user,setUser]=useState(false)
  const [newExpense, setNewExpense] = useState((product))

useEffect(() => {

const local =   localStorage.getItem("Auth")
setLogin(local)
const expenceFromLocal = localStorage.getItem("Users")

setUser(expenceFromLocal)
}, [isLogin])
  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data])
  }
function loginHandler(){
setLogin(true)
localStorage.setItem('Auth', !isLogin)

}
function logOutHandler(){
  setLogin(false)
  localStorage.removeItem('Auth')
}

function showUsers(){
  setUser(true)
  localStorage.setItem('Users',setUser)
}
function showExpenses(){
  setUser(false)
  localStorage.removeItem('Users')
}
return (
    <>
    <Header showUsers={showUsers}
        showExpenses={showExpenses} isLogin={isLogin} logOutHandler={logOutHandler} />
   {
    isLogin?(
      user?(

        <Users/>
      ):(

      <>
      
      <NewExpense addNewExpense={addNewExpense} />
       <Expenses newExpense={newExpense} />
      </>
      )
    ):(

      <Login onLogin={loginHandler}/>
    )}
      
     

    
    
    
    
    </>
  )
}

export default App

