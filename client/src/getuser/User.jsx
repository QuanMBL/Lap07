import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
    const [users, setUser] = useState([]);

    // Dùng API lấy dữ liệu từ MongoDB
    useEffect(() => { // cập nhập khi reset lại web mới cập nhập ❗❗❗ Rảnh update để nếu bên postmad lưu thì --> web tải lại 
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="userTable"> 
                {/* Link là core chính trong react-router-dom đây là phần định hướng  */}
                <Link to="/add" type="button" className="btn btn-primary add-user-btn">  
                    👤 + Add User
                </Link>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.product}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger action-btn">
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                        <button type="button" className="btn btn-info action-btn">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default User;
