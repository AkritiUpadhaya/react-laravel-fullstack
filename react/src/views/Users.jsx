import axios from 'axios'
import axiosClient from '../axios-client'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers]= useState([])
  const [loading, setLoading]= useState(false) 
  const {setNotification}= useStateContext()
  useEffect(()=>{
   getUsers()
  },[])
  const onDelete=(u)=>{
    if(!window.confirm("Are you sure want to delete this user?")){
      return
    }
    axiosClient.delete(`/users/${u.id}`)
    .then(()=>{
      setNotification("User was successfully deleted")
      getUsers()
    })
  }
  const getUsers=()=>{
    setLoading(true)
    axiosClient.get('/users')
    .then(({data})=>{
      setLoading(false)
      console.log(data)
      setUsers(data.data)
    })
    .catch(()=>{
      setLoading(false)
    })
  }
  return (
    <>
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <h1>Users</h1>
      <Link to="/users/new" className="btn-add">Add new</Link>
      </div>
      <div className='card animated fadeInDown'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
           {loading && <tbody>
            <tr>
              <td colSpan='5' className='text-center'>
                Loading...
              </td>
            </tr>
          </tbody>
          }
          {!loading && <tbody>
            {users.map(u=>(
             <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.created_at}</td>
              <td>
                <Link className='btn-edit' to={'/users/'+u.id}>Edit</Link>
                
                <button onClick={()=> onDelete(u)} className='btn-delete'>Delete</button>
              </td>
             </tr>
            ))}
          </tbody>
          }
        </table>
      </div>
    </div>
    </>
  )
}

export default Users
