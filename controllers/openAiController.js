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




if (response && response.data && response.data.data && response.data.data[0]) {
  imageUrl = response.data[0].url;
} else {
  // Manejar el caso en que la propiedad no está definida
  console.error('Error: No se pudo obtener la URL de la imagen.');
  res.status(500).json({
    success: false,
    data: 'Error interno al procesar la respuesta de OpenAI.'
  });
  return;
}


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