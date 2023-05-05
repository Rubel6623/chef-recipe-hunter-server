const express=require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;

const chefsData=require('./data/chefData.json');
const recipe=require('./data/chefRecipe.json');

app.use(cors());

app.get('/', (req,res)=>{
    res.send('server is running')
});

app.get('/chefsData', (req,res)=>{
    res.send(chefsData);
})

app.get('/recipe',(req,res)=>{
    res.send(recipe)
})

app.get('/recipe/:id', (req,res)=>{
    const id =req.params.id;
    const selectedRecipe=recipe.find(r=>r.id==id);
    console.log(selectedRecipe);
    res.send(selectedRecipe)
})

app.get('/chefsData/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const chefRecipe=recipe.filter(r=>r.id==id);
    res.send(chefRecipe)

})

app.listen(port, ()=>{
    console.log(`Chef API is running on port : ${port}`);
})