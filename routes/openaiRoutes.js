import express from 'express';
import generateImage from '../controllers/openAiController.js';
var app= express();


const router = express.Router();

app.get('/chat', function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('/public/signup.html');
});

router.post("/generate",generateImage);


//router.post("/generateChat", generateChat);






export default router;

