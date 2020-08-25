const express =require('express');
const router =express.Router();
router.get('/',(req,res)=>{
    res.send('server up an runing')
})

module.exports=router;