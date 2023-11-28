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
<img src="/imagesreadme/Captura.PNG" alt="gitclone command" width="500"/>
Diagrama 1

  
  ![Imagen](/imagesreadme/Captura.PNG)

Diagrama 2 
  ![Imagen](/imagesreadme//Captura2.png)

<br>

### _REQ-001- Realizar interfaz de registro y login para usuarios _ 

Se requiere desarrollar un login para que los usuarios puedan ingresar a la aplicación y revisar las imágenes que han modificado y guardado. Adicionalmente si el usuario no se encuentra registrado, crear una pantalla en la cual se puedan registrar para poder utilizar las funcionalidades del aplicativo  
   
   Diagrama de flujo de proceso:
   
  ![Imagen](/imagesreadme//captura3.png)
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
