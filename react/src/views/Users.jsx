import axios from 'axios'
import axiosClient from '../axios-client'
import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers]= useState([])
  const [loading, setLoading]= useState(false)
  useEffect(()=>{
   getUsers()
  },[])
  const getUsers=()=>{
    setLoading(true)
    axiosClient.get('/users')
    .then(({data})=>{
      setLoading(false)
      console.log(data)
    })
    .catch(()=>{
      setLoading(false)
    })
  }
  return (
    <>
    <div>
      <h1>Users</h1>

      <Link to="/users/new">Add new</Link>
    </div>
    </>
  )
}

export default Users
