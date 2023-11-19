<div align=center>

# Proyecto de frontend

<img src="./src/images/cat-tattoo-studio-logo.png" alt="logo-studio" width="50%">


## <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/black-cat.png" alt="black-cat"/> BLACK CAT <img width="64" height="64" src="https://img.icons8.com/external-ddara-fill-ddara/64/1A1A1A/external-rose-natural-scent-ddara-fill-ddara.png" alt="external-rose-natural-scent-ddara-fill-ddara"/>
## <img width="50" height="50" src="https://img.icons8.com/ios/50/tattoo-machine.png" alt="tattoo-machine"/> Tattoo Studio <img width="50" height="50" src="https://img.icons8.com/ios/50/tattoo-machine.png" alt="tattoo-machine"/>


 Este es el frontend del sistema de gestion de citas de un estudio de tatuaje. Este proyecto se realizó como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)


## Tecnologias Utilizadas
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/document/)[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.css3.com/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)[![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://stackoverflow.com/)[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)[![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://react-bootstrap.netlify.app/)[![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)](https://www.canva.com/)
</div>

## Tabla de Contenidos
- 👁️‍🗨️[Vistas](#vistas)
- ⚙️[Instalacion en local](#einstalacion-en-local)
- 🛠️[Posibles Mejoras](#posibles-mejoras)
- 💻[Contacto](#contacto)
- 🪪[Creditos](#creditos)

## Descripcion 

El frontend desarrollado con React se centra en la gestión de citas para un estudio de tatuajes. La aplicación permite registrarse, que los tatuadores creen turnos disponibles y que los usuarios tomen o cancelen citas de manera eficiente.

## Vistas

[![Home](https://t.gyazo.com/teams/vanbrigo/68330443e0e551d298adf9ff19198408.gif)](https://vanbrigo.gyazo.com/68330443e0e551d298adf9ff19198408)

#### Inicio de Sesión:

Autenticación de usuarios, con la capacidad de iniciar sesión como tatuador o usuario.

[![Login](https://t.gyazo.com/teams/vanbrigo/b0059b477f0833844310d174dab76887.gif)](https://vanbrigo.gyazo.com/b0059b477f0833844310d174dab76887)


#### Panel de Tatuador:

Creación de turnos disponibles: Los tatuadores pueden especificar fechas y horarios para los turnos disponibles.

[![Image from Gyazo](https://t.gyazo.com/teams/vanbrigo/d67d07d3e134e22144480f7e43f6f928.gif)](https://vanbrigo.gyazo.com/d67d07d3e134e22144480f7e43f6f928)

#### Reservas de Citas:

Los usuarios pueden visualizar los turnos disponibles y reservar citas indicando el motivo de la cita (tatuaje o piercing).

[![Take an appointment](https://t.gyazo.com/teams/vanbrigo/8c9894a9da050be8eb680c7ae7cc3c20.gif)](https://vanbrigo.gyazo.com/8c9894a9da050be8eb680c7ae7cc3c20)

#### Cancelación de Citas:

Funcionalidad para que los usuarios cancelen citas existentes si es necesario.

[![Cancel an appointment](https://t.gyazo.com/teams/vanbrigo/193e4e7c75a868475bc5ed2f04790b50.gif)](https://vanbrigo.gyazo.com/193e4e7c75a868475bc5ed2f04790b50)

Diseño limpio que facilita la navegación tanto para tatuadores como para usuarios.

#### Vista como super_admin:

El super admin puede iniciar sesion y obtener informacion de todos los clientes, tatuadores, citas disponibles y citas agendadas.

[![super_admin view](https://t.gyazo.com/teams/vanbrigo/9cce580931d301b4593916a3f2d40e2a.gif)](https://vanbrigo.gyazo.com/9cce580931d301b4593916a3f2d40e2a)

## Instalacion en local

1. Clonar el repositorio con el comando `$ git clone [URL del repositorio]`
2. Instalar dependencias con el comando` $ npm install `
3. Iniciar en desarrollo con `$ npm run dev`

## Posibles mejoras
🔹 Poder actualizar datos de los usuarios desde la vista del perfil<br>
🔹 Busqueda dinamica de citas y tatuadores<br>
🔹 Bloqueo en calendario de festivos o dias puntuales<br>
🔹 Asignarle rol de tatuador a un usuario como super_admin<br>

## Contacto

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vanessabritogonzalez@gmail.com)[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vanessabritogonzalez/)

## Creditos
Este proyecto ha sido realizado por mi, Vanessa Brito, como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)