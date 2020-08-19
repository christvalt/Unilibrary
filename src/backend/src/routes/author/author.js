var express = require("express");
const router = express.Router();


const Author = require("../../models/authormodel/autormodel");


//new actor
router.get("/new_actor",(req,res)=>{
    res.render('author/new_actor',{author:new Author()})
});

//crete actor 
router.post ("/",async (req,res)=>{
    const author= new Author({
        name:req.body.name
    })
    try {
        const newAuthor = await author.save()
        //res.redirect('author/${newAthor.id}')
        res.redirect('/all_actor')
    } catch (error) {
        res.render('author/new_actor',{
            author:author,
            Message:'error creation actor'
        })
    }
  
});

//list all actor
router.get("/all_actor",async (req,res)=>{
    let searchOptions ={}
    if (req.query.name !=null && req.query != '') {
        searchOptions.name = new RegExp(req.query.name,'i')
        
    }
    try {
        const authors = await  Author.find(searchOptions)
        res.render('',{
            authors:authors ,
            searchOptions:req.query
        })
      
        
    } catch{
        res.redirect('/all_actor')
        
    }
    res.send()


});

router.get('/:id',(req,res)=>{
    res.send('show author '+req.params.id)
})

router.get('/:id/edit',async(req,res)=>{
    try {
        const author =Author.findByIdreq.params.id
        res.render('author/edit',{author:author})   
    } catch  {
        res.redirect('./authors')
        
    }
    
})
router.put('/:id',(req,res)=>{
    const author= new Author({
        name:req.body.name
    })
    try {
        author=Author.findById(req.params.id)
      /*const newAuthor = await author.save() */  
        //res.redirect('author/${newAthor.id}')
        res.redirect('/all_actor')
    } catch (error) {
        res.render('author/new_actor',{
            author:author,
            Message:'error creatin actor'
        })
    }
  
})


router.delete('/:id',(req,res)=>{
    res.send('delete author '+req.params.id)
})
module.exports = router;

/*



author.save((err,newAuthor)=>{
    if (err) {
        res.render('author/new_actor',{
            author:author,
            erroMessage:'error creatin actor'
        })
        
    } else {
        res.redirect('/all_actor')
        
    }
})
 */