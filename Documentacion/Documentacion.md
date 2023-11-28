# **Servicio de creación de imágenes en Node.js**


### _Objetivo:_  

Este proyecto tiene como objetivo brindar una solución flexible y escalable para la creación de imágenes mediante la implementación de microservicios en Node.js. Los microservicios son una arquitectura que nos permite descomponer una aplicación en componentes independientes, lo que facilita el desarrollo, el mantenimiento y la escalabilidad de los servicios. 


### _Características Destacadas:_ 

Almacenamiento y Gestión de Archivos: Se ofrecerán opciones para almacenar y gestionar las imágenes resultantes, ya sea en sistemas de archivos locales o en servicios en la nube como Amazon S3 o Azure blobs. 

API Documentada: se creará una API fácil de usar y bien documentada para que otros desarrolladores puedan integrar estos servicios en sus propias aplicaciones de manera sencilla. 


### _Características técnicas:_

 El servicio propuesto se apoya de tecnologías propias de un ambiente de desarrollo DevOps, se contará con un Backend orientado a microservicios con un sistema de manejo de archivos en azure blobs y microservicios orientados a la manipulación de imágenes con nodejs y Sharp (High performance Node.js image processing ), sistema de login con base de datos en MySql. Frontend en angular js para una mejor puesta a produccion de cara al usuario final. 

El backend y el frontend comunicaran datos atravez de protocolo http. Con metodos get y post. 

Palabras clave: nodejs, azure, backend, MySql, microservicios

  
### _Despliegues:_ 

A continuación, una propuesta del despliegue de microservicios para la puesta a producción y desarrollo. 

Diagrama 1

  
  ![Imagen](/imagesreadme/Captura.PNG)

Diagrama 2 

  ![Imagen](/imagesreadme//Captura2.PNG)

<br>

### _REQ-001- Realizar interfaz de registro y login para usuarios_ 

Se requiere desarrollar un login para que los usuarios puedan ingresar a la aplicación y revisar las imágenes que han modificado y guardado. Adicionalmente si el usuario no se encuentra registrado, crear una pantalla en la cual se puedan registrar para poder utilizar las funcionalidades del aplicativo  
   
   Diagrama de flujo de proceso:
   
   ![Imagen](/imagesreadme//Captura3.PNG)
   Ilustración - Interfaz de login y registro. 


  Casos de uso:

| Identificado   | CU-001  |
|-----|-----|
| Nombre  | Registro y login para el usuario. |
|Descripción |Se describe a continuación el proceso que realiza el interfaz de modificación de imágenes. |
|Actores |Desarrollador |
|Secuencia Normal|
|Actor |Software |
|Ingresa al aplicativo ||
|Ingresa al login o al registro de usuario |Valida si el usuario se encuentra registrado |
||Invita al usuario a registrarse en caso de que no lo esté. |
||Valida credenciales de registro del usuario  |
||Si el usuario no se encuentra registrado, el sistema no permite su ingreso. |

### _REQ-002- Realizar interfaz Para generar imagenes_ 

Se requiere desarrollar una interfaz de usuario mediante la cual el usuario va a interactuar con la aplicación para generar imagenes  

   Diagrama de flujo de proceso:
   
   ![Imagen](/imagesreadme//Captura4.PNG)
   Ilustración - Interfaz para generar imagenes. 


  Casos de uso:

| Identificado   | CU-002   |
|-----|-----|
| Nombre  | Interfaz para generar imagenes. |
|Descripción |Se describe a continuación el proceso que realiza el interfaz de Generación de imágenes. |
|Actores |Desarrollador |
|Secuencia Normal|
|Actor |Software |
|Se describe imagen para generar  ||
| |Genera la imagen |
||Muestra resultado al usuario  |
|Si está de acuerdo con el resultado la Descarga, sino puede generar una nueva |  |


### _REQ-003- Realizar Un chatbot Para que ayude al usuario_ 

Se requiere desarrollar un apartado en el cual el usuario va a contar con la ayuda de un chatbot para poder utilizar el generador  

   Diagrama de flujo de proceso:
   
  ![Imagen](/imagesreadme//Captura5.PNG)
  Ilustración - Chat de ayuda. 


  Casos de uso:

| Identificado   | CU-003   |
|-----|-----|
| Nombre  | chat de ayuda al usuario. |
|Descripción |Se describe a continuación el proceso que realiza el chat de ayuda. |
|Actores |Desarrollador |
|Secuencia Normal|
|Actor |Software |
|Despliega el chat  ||
| |El Chat saluda al usuario |
|El usuario ingresa error que desee solucionar|  |
| | El sistema analiza el error   |
| | Busca en la base de datos|
| | Devuelve una solución|
|Visualiza la solucion| |
