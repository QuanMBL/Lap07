import User from '../model/userModel.js';


export const create = async(req,res)=>{
    try {
        // tạo 1 User mới
        const newUser = new User(req.body); // lấy json chuyển javascript để code hiểu 

        // lấy email từ newUser mới tạo
        const {email} = newUser;

        // kiểm tra coi email đó đã được tạo trong User chưa
        const userExist = await User.findOne({email}) 
        if (userExist) {
           return res.status(404).json({message: "Đã được dùng"})
        }
        const saveData = await newUser.save(); // thực hiện save 
        res.status(200).json(saveData) // in ra save
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}
export const getAllUser = async(req,res)=>{
    try {
        const UserData = await User.find();
        if (!UserData || UserData.length === 0) {
            return res.status(404).json({message: `Không tìm thấy`})
        }

        res.status(200).json(UserData);
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}


export const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExits = await User.findById(id);
        if (!userExits) {
           return res.status(404).json({message: `Khongo tìm thấy ${id}`})
        }

        res.status(200).json(userExits)
        
    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExits = await User.findById(id);
        if (!userExits) {
           return res.status(404).json({message: `Không tìm thấy ${id}`})
        }

        // core chính dùng để thực hiện
        //req.body này từ client Nó chứa dữ liệu mà cliet gửi đi
        // còn req.body khi bên posmad
        const updateUser = await User.findByIdAndUpdate(id, req.body,{ 

            new: true // trả về dữ liệu trước khi cập nhập
        })

        // này dùng để in ra đối tượng API được cập nhập
        res.status(200).json(updateUser)


    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}

export const deletes = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
           return res.status(404).json({message: ` Không tìm thấy id: ${id} `})
        }

        const deleteData = await User.deleteOne(userExist);
        res.status(200).json(deleteData)

    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}

export const deleteAllUser = async(req,res)=>{
    try {
        const UserData =await User.find();
        if (!UserData || UserData.length === 0) {
            return res.status(404).json({message: `Không tìm thấy`})
        }

     
        await User.deleteMany({}); // Sửa: Xóa toàn bộ user bằng điều kiện rỗng `{}`

        res.status(200).json({ message: "Đã xóa tất cả người dùng thành công!" });

    } catch (error) {
        res.status(500).json({message: `${error}`});
    }
}