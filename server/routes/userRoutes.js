import express from 'express';
import { create, deleteAllUser, deletes, getAllUser, getUserById, update } from '../controller/userController.js';


// gọi routes bằng express

const route = express.Router();


route.post("/user", create);
route.get("/users",getAllUser)
route.get("/user/:id",getUserById)
route.put("/update/user/:id",update)
route.delete("/delete/user/:id",deletes)
route.delete("/delete/users",deleteAllUser)

export default route