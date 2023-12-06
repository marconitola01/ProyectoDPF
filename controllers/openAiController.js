import OpenAI  from "openai";
import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve();
dotenv.config({ path: __dirname + '/.env' });

const APIKEY = process.env.OPEN_AI_API_KEY;


const openai = new OpenAI({
    apiKey: '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',
  });

  //generar imagen
const generateImage = async (req, res) => {

    const { prompt, imageSize } = req.body;
    console.log(imageSize);

    try {
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: imageSize == 'Pequeña' ? '256x256' : imageSize == 'mediana' ? '512x512' : '1024x1024',
        });
      let imageUrl;
        
    console.log(response);
        
        res.status(200).json({
            success: true,
            data: imageUrl
        }
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            data: 'No se pudo generar!'
        }
        );
        console.log(error);
    }
}




export default generateImage
