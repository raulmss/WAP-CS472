const express = require(`express`);
const path = require(`path`);
const productRouter = require('./routers');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(productRouter);
app.use('/myStyle', express.static(path.join(__dirname, 'css')));

app.use(function(err,req, res, next){
    console.error('errer:', err)
    res.status(500).send('Something broke!')
})

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'notFound.html'));
})

app.listen(3000, () => console.log('listening on 3000...'));