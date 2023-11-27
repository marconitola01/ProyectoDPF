import OpenAI  from "openai";
import dotenv from 'dotenv';
import path from 'path';


const __dirname = path.resolve();
dotenv.config({ path: __dirname + '/.env' });

const APIKEY = process.env.OPEN_AI_API_KEY;


const openai = new OpenAI({
    apiKey: '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',
  });

//Generar chat

const callChatGpt = async(req = request, res = response)=>{

    try {

        const {prompt} = req.body;

        let queryObj = {
            model: "gpt-3.5-turbo",
            messages: [{"role":"user", "content": prompt}],
            max_tokens: 100,
            temperature:1
        }

        const completion = await openai.createChatCompletion(queryObj);
        const message = completion.data.choices[0].message;
        const usage = completion.data.usage;

        res.json({message,usage});

        
    } catch (error) {
        console.log(JSON.stringify(error));
    }

}

export default callChatGpt