// server.js
import express from "express";
import configViewEngine from "./configs/viewEngine";
import bodyParser from "body-parser";
const { initWebRoutes } = require("./routes/web");
const app = express();


//cấu hình body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Cấu hình view engine
configViewEngine(app);
initWebRoutes(app);



// Khởi tạo server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
