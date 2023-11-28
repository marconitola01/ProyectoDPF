# DP_Proyecto
proyecto DP. Seguridad en DevOps

## tecnologias usadas

- Node js
- Express
- Docker
- Open ai ( DALL·E 2) ( text-davinci-003 )

## Introduccion
Este proyecto se enfoca en el desarrollo de aplicacion web para la generacion de imagenes apoyado con inteligencia artificial, mediante la API distribuida por Open AI recibiendo parametros en forma de prompt, ademas el proyecto cuenta con un copilot tipo chat gpt para realizar consultas de informacion en tiempo real

## Arquitectura 

El proyecto cuenta con dos servicios (GenerateImage y GenerateChat) desplegados como microservicios en contenedores Docker para efectos de mantenibilidad y operacion.

## Usabilidad

###Interfaz de usuario para servicio de generacion de imagenes.

![GUI generateImage](/imagesreadme//Screenshot_8.png)

![GUI generateImage](/imagesreadme//Screenshot_12.png)

la interfaz permite escojer entre tres escalas de tamaño para las imagenes 
- pequeña = 256 x 256
- Mediana = 512 x 512
- Gande = 1024 x 1024

El servidor responde con un json y una url donde se aloja la imagen generada (la URL tiene duracion de una hora)

![GUI generateImage](/imagesreadme//Screenshot_13.png)
Ejemplos de Imagenes generadas
![GUI generateImage](/imagesreadme//Screenshot_9.png)
![GUI generateImage](/imagesreadme//Screenshot_6.png)

### Interfaz de usuario para generacion de chat.

### Puesta en funcionamiento

Clonar repositorio
~~~
git clone https://github.com/marconitola01/ProyectoDPF.git
~~~

Instalar dependencias del proyecto
~~~
npm install
~~~

correr en local

~~~
npm start
~~~



##Docker

Construir imagen Docker desde repositorio de github
~~~
docker buildx build https://github.com/marconitola01/ProyectoDPF.git --tag nodeproyect:latest
~~~

correr app desde imagen Docker "nodeproyect"
~~~
docker run nodeproyect
~~~

