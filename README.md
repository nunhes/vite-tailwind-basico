# Sitio con TailwindCSS+Vite Básico

```bash
 pnpm create vite
 ```
&rarr;_ref:  https://vitejs.dev/guide/

- Reorganizar activos na carpeta `./src`
 

 ```arduino
 ┣ src
 ┃ ┣ css
 ┃ ┃ ┗ style.css
 ┃ ┣ js
 ┃ ┃ ┗ main.js
 ┃ ┗ index.html
 ┣ .gitignore
 ┣ package.json
 ┣ pnpm-lock.yaml
 ┗ vite.config.js
 ```

- Editar `vite.config.js`
 ```js
 import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    // publicDir: 'public',
});
```

- Instalar dependencias:
    - TailwindCSS
    &rarr;_ref:  https://tailwindcss.com/docs/installation/using-postcss

    ```bash
    npm install -D tailwindcss postcss autoprefixer    // istala dependencias de desenvolvemento
    npx tailwindcss init -p   // inicializa os arquivos tailwind.config.js + postcss.config.js
    ```
- Editar ``tailwind.config.js``.

```js
/** @type {import('tailwindcss').Config} */
export default {

  content: ["./src/**/*.{html,js}"],  // engadir orixe 

  theme: {
    extend: {},
  },
  plugins: [],
}
```

##### TODO
## Usar fontes variables:

&rarr; _ref: https://fontsource.org/
