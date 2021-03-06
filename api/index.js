// import express from 'express'
// import bodyParser from 'body-parser'

// const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false}))

// const port = process.env.PORT || 3000

// app.get('*', (req, res) => res.status(200).send('<html><h1>Hello World!</h1></html>'))

// app.listen(port, () => {
//     console.log(`Server is running on PORT ${port}`)
// }) 

import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './server/routes/ProductRoutes';
import orderRoutes from './server/routes/OrderRoutes';

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('*', (req, res) => res.status(200).send({
   message: 'lalallalla'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app