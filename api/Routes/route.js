import controler from './../Routes/places.js';
import express from 'express';


const router = express.Router()
router.post('/connexion',controler.Login)
router.post('/inscription',controler.addUser)
router.get('/users',controler.getUsers)


export default router;