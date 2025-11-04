
#### 1. criando projeto
```
npm create vite@5.5.2 todo-react 
```

#### 2. Adicionar o TailwindCSS
```
npm install tailwindcss @tailwindcss/vite
```

#### 3. passo vite.config.js
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

#### 4. index.css
```
@import "tailwindcss";
```