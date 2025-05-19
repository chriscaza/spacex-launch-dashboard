# 🚀 SpaceX Launch Dashboard

**SpaceX Launch Dashboard** es una aplicación frontend construida con **React + TypeScript + Vite + TailwindCSS**, que consume la API pública de SpaceX para visualizar lanzamientos espaciales. Incluye funcionalidades como filtros por año, estado del lanzamiento, búsqueda por nombre, favoritos almacenados en `localStorage` y visualización de ubicaciones en un mapa de Google Maps.

---

## 🛠️ Tecnologías utilizadas

- React 19 + React Router 7
- TypeScript
- Vite
- TailwindCSS
- Google Maps API
- Icons de `react-icons`

---

## ⚙️ Instrucciones para la instalación

Sigue estos pasos para clonar, instalar y correr el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone https://github.com/chriscaza/spacex-launch-dashboard.git
cd spacex-launch-dashboard
```

### 2. Instalar las dependencias

Asegúrate de tener Node.js v18+ instalado. Luego ejecuta:

```bash
npm install
```

### 3. Clave de google maps


1. Esta está ubicada en el archivo .env

```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSyAxj3v8QBOCv68HShK7-i65KcH72XcY3B4
```

### 4. Correr el proyecto en desarrollo

```bash
npm run dev
```

## 🧭 Instrucciones de uso

Una vez que abras la app en el navegador `http://localhost:5173`, podrás:

### 🔎 Explorar lanzamientos

- Ver tarjetas con información de cada lanzamiento (nombre, fecha, estado).
- Usar la **barra de búsqueda** para encontrar lanzamientos por nombre de misión.

### 📅 Filtros

- Filtrar por año de lanzamiento.
- Filtrar por estado: exitoso, fallido o todos.
- Filtar por cohete.
- Limpiar filtros con un botón dedicado.

### ⭐ Favoritos

- Marca cualquier lanzamiento como favorito con un icono de corazón.
- Tus favoritos se guardan automáticamente en `localStorage`.
- Puedes ver los favoritos presionando el iciono de corazon que está en el menú.

## 📂 Scripts útiles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run lint`: Corre ESLint para verificar el código

---

## 🧑‍💻 Autor

Desarrollado por **Christian Iván Cazarin de Anda**  
Frontend Developer | Tecnólogo en Electrónica | Ingeniero en Software  
[LinkedIn](https://www.linkedin.com/in/chris-cazarin-b26ab32b5) • [GitHub](https://github.com/chriscaza)