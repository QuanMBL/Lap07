import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import User from './getuser/User.jsx'
import AddUser from './addUser/addUser.jsx' // ✅ Sửa lại chữ hoa

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User/>
    },
    {
      path: "/add",
      element: <AddUser/> // ✅ Sửa lại chữ hoa
    },
  ])

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
