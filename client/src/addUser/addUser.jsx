import React, { useState } from 'react'
import './addUser.css'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const addUser = () => {
  const users = {
    name: "",
    email: "",
    product: "",
  }
  const navigate = useNavigate();

  const [user, setUser] = useState(users)

  // xử lý phần nhập vào của form 
  const inputHandler = (e) => {
    // lấy dự liệu của tại tên của input
    const { name, value } = e.target // đây là phần lấy dữ liệu nhập vào 
    //e.target.name === "name"
    //e.target.value === "John"

    setUser({ ...user, [name]: value }) // ...user: gọi lại dữ liệu, [name]: vaule này thêm mới vào 
    //Vd đang nhập name: "quan" --> {name:"quan",đây là phần thêm mới vào}  --> nhập xong lưu nhạp mà không bị mất dữ liệu từ ô trước

  }

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/user", user) // đây là core
      .then((response) => {
        console.log("Đã thêm thành công");
        navigate("/")
      })
      .catch((e) => {
        console.log(` Lỗi ${e} `)
      })
  }

  return (

    <div className='addUser'>
      <h3>Add New User</h3>
      <form action="" className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="name">Name</label>
          <input name='name' type="text" id='name' onChange={inputHandler} autoComplete='off' placeholder='Enter your name' />

          <label htmlFor="email">Email</label>
          <input name='email' type="text" id='email' autoComplete='off' onChange={inputHandler} placeholder='Enter your email' />

          <label htmlFor="product">Product</label>
          <input name='product' type="text" id='product' autoComplete='off' onChange={inputHandler} placeholder='Enter product name' />
        </div>
        <div className='inputgroup'>
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>


  )
}

export default addUser
