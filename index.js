const  MongoClient  = require('mongodb').MongoClient
const express = require('express')

const app = express() 
const uri = 'mongodb+srv://superadmin:Khemika_2543@cluster0.zp5v5.mongodb.net/sample_restaurants?retryWrites=true&w=majority'
const client =  new MongoClient(uri, { useNewUrlParser: true  , useUnifiedTopology: true})

async function connect() {
    await client.connect()
} 
connect()

app.get('/restaurants' , async (req, res) => {
    try { 
        const cuisine = req.query.cuisine 
        const db = client.db('sample_restaurants')
        const collection = db.collection('restaurants')
        const query = {cuisine: cuisine}
        const cursor = collection.find(query).limit(10)
        let restuarants = []
        await cursor.forEach(doc => restuarants.push(doc.name))
      
        res.send(restaurants)
    } catch(e) {
        console.error(e)
    }
    
})

app.listen(3000, console.log('Start application at port 3000'))

//async function run() {
   // try { 
        
     //   await client.connect()
       // const db = client.db('sample_mflix')
        //const collection = db.collection('movies')
        //const query = { rated: 'TV-G' }
       // const cursor = collection.find(query)
       // await cursor.forEach(console.dir)
        // console.log(movie)
   // } catch(e) {
     //   console.log(e)
   // } finally { 
     //   await client.close()
   // }
// }

// run().catch(console.dir)
