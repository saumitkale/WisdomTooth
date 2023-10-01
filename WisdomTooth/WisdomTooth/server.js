const PORT = 8000
const express = require('express')
const cors = require('cors')
const fetch = require("node-fetch")

const app = express()

app.use(express.json())
app.use(cors())

const API_KEY = "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"

app.post('/completions', async( req, res) => {
    const options = {
        method: "POST",
        headers:{
            "Authorization": 'Bearer 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',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message}],
            max_tokens: 100,
        })
    }

    try{
       const response = await fetch('https://api.openai.com/v1/chat/completions',options)
       const data = await response.json()
       res.send(data)
       console.log(data)
    }catch(error)
    {
        console.log(process.env.OPENAI_API_KEY)


    }
})

app.listen(PORT,() => console.log('Your server is running on PORT' + PORT))