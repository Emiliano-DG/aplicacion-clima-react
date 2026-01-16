# 🌤️ Aplicación del Clima - React

Una aplicación web moderna para consultar el clima de cualquier ciudad del mundo en tiempo real, desarrollada con React y Vite.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## 📋 Descripción

Esta aplicación permite a los usuarios consultar información meteorológica actual de diferentes ciudades alrededor del mundo. Utiliza la API de OpenWeatherMap para obtener datos en tiempo real sobre temperatura, condiciones climáticas, humedad y más.

## ✨ Características

- 🔍 Búsqueda de clima por ciudad y país
- 🌡️ Información detallada del clima en tiempo real
- 📱 Diseño responsive y moderno
- ⚡ Interfaz rápida y fluida con Vite
- 🎨 Interfaz de usuario intuitiva
- 🔄 Actualización dinámica de datos

## 🛠️ Tecnologías Utilizadas

- **React 18.x** - Librería de JavaScript para construir interfaces de usuario
- **Vite** - Build tool y dev server ultra rápido
- **OpenWeatherMap API** - API para datos meteorológicos
- **CSS3** - Para estilos y diseño responsive
- **ESLint** - Linter para mantener código limpio

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Emiliano-DG/aplicacion-clima-react.git
cd aplicacion-clima-react
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tu API Key de OpenWeatherMap:
   - Regístrate en [OpenWeatherMap](https://openweathermap.org/api) para obtener tu API Key gratuita
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu API Key:
   ```
   VITE_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Crea la versión de producción
npm run preview      # Previsualiza la build de producción
npm run lint         # Ejecuta ESLint para revisar el código
```

## 📂 Estructura del Proyecto

```
aplicacion-clima-react/
├── src/
│   ├── components/      # Componentes React reutilizables
│   ├── assets/         # Imágenes y recursos estáticos
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/             # Archivos públicos estáticos
├── index.html          # HTML base
├── vite.config.js      # Configuración de Vite
├── eslint.config.js    # Configuración de ESLint
└── package.json        # Dependencias y scripts
```

## 🎯 Funcionalidades Principales

### Búsqueda de Clima
Los usuarios pueden buscar el clima de cualquier ciudad ingresando el nombre de la ciudad y seleccionando el país correspondiente.

### Visualización de Datos
La aplicación muestra:
- Temperatura actual
- Descripción del clima
- Temperatura mínima y máxima
- Humedad
- Ícono representativo del clima

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

## 👤 Autor

**Emiliano DG**

- GitHub: [@Emiliano-DG](https://github.com/Emiliano-DG)

## 🙏 Agradecimientos

- [OpenWeatherMap](https://openweathermap.org/) por proporcionar la API de datos meteorológicos
- [Vite](https://vitejs.dev/) por el excelente tooling
- [React](https://react.dev/) por la increíble librería

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella en GitHub!
