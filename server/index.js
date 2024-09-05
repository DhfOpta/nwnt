const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const devOProdct='dev'
const app=express()
app.use(cors())
app.use(express.json())

const PORT=8080
app.get('/gettry',(req,res)=>{
    res.json({msg:"GetData"}).status(200)
})


const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.join(__dirname, '../frontend') });
const handle = nextApp.getRequestHandler();




const MOng='mongodb+srv://dhfopta:dhfopta1234@cluster0.bzblg64.mongodb.net/Nxt'
const conctDb=async()=>{
    try {
     await mongoose.connect(MOng)
     console.log('conct DB')  
    } catch (error) {
        console.log(error);
//    process.exit(0)
    }
}


// Next.js routing
nextApp.prepare().then(() => {
    // Serve Next.js frontend
    app.get('*', (req, res) => handle(req, res));
  
    const port = PORT 
    app.listen(port, () => console.log(`Server running on port... chk:) ... ${port}`));
  });


conctDb().then(() => {
    app.listen(PORT, () => console.log('Server PORT:' + PORT))
  
  })
