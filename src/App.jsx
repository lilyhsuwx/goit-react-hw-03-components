import { Component } from 'react'
import data from "./components/data.json"
import transactions from "./components/transactions.json"
import friend from "./components/friends.json"
import Profile from './components/Profile'
import TransactionHistory from './components/TransactionHistory'
import FriendList from './components/FriendList' 
import Statistics from './components/Statistics'
import './App.css'

class App extends Component{

  render(){
    return(
      <>
        <Profile/>
        <Statistics title="Upload stats" stats={data}/>
        <FriendList friends={friend}/>
        <TransactionHistory items={transactions}/>
      </>
    )
  }
}

export default App
