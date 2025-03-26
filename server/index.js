import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import route from './routes/userRoutes.js';
import cors from 'cors'
const app = express();

app.use(bodyParser.json()) // giúp chuyển đổi từ json() sang định dạng javascript và gán vào res.body, nếu không có thì code sẽ khong hiểu file json()

// lõi để liên kêt api cho FontEnd
app.use(cors()) //Khi frontend và backend chạy trên hai domain khác nhau (hoặc hai cổng khác nhau).


dotenv.config() // Nạp biến môi trường .env vào process.env có nghĩa là lấy dữ liệu từ .env qua process.env 😊
const PORT = process.env.PORT || 7000
const MONGOURL = process.env.MONGO_URL


mongoose.connect(MONGOURL)// thường tới đây là kết nối được rồi còn phần ở dưới chị chạy và thực hiện thôi
    .then(
        () => {
            console.log(),
                app.listen(PORT,() => {
                    console.log(`Đang chạy trên: ${PORT}`)
                })
        }

    ).catch((e)=>console.log(e))


app.use("/api", route)
