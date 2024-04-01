const express = require('express');
const pool = "../configs/connectDb";
const router = express.Router();
const homeController = require("../controllers/homeController");
const initWebRoutes = (app) => {
    router.get('/', homeController.handleHome);
    router.get('/user', homeController.handleUser);
    router.post('/user/create-user', homeController.handleCreateUser);
    return app.use("/", router);
}


router.use(express.json());
module.exports = { initWebRoutes, router };
