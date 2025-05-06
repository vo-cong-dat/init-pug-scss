# init-pug-scss

A starter project with Pug, SCSS, Gulp, ESLint, Prettier, and Stylelint.

## Features

- Compile Pug templates to HTML
- Compile SCSS to CSS with Autoprefixer
- Live-reload development server with BrowserSync
- Linting and formatting for JS and SCSS (ESLint, Prettier, Stylelint)

## Directory Structure

```
init-pug-scss/
├── src/
│   ├── pug/
│   │   └── index.pug
│   └── scss/
│       └── style.scss
├── dist/
├── gulpfile.js
├── package.json
├── .eslintrc.js
├── .prettierrc.js
├── .stylelintrc.js
```

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

2. **Start development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   This will compile Pug and SCSS, start a local server, and watch for changes.

3. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   ```

## Sample Files

### src/pug/index.pug

```pug
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    title My Awesome Website
    link(rel="stylesheet" href="css/style.css")
  body
    h1 Hello Pug and SCSS!
    p This is a sample page.
```

### src/scss/style.scss

```scss
// Sample SCSS
$primary-color: #3498db;

body {
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  color: $primary-color;
}

h1 {
  color: $primary-color;
}
```

## Gulp Tasks

- `gulp` / `gulp dev`: Start development server, compile Pug & SCSS, watch for changes
- `gulp build`: Compile Pug & SCSS for production

## Linting & Formatting

- **Lint JS:** `npx eslint .`
- **Format JS:** `npx prettier --write .`
- **Lint SCSS:** `npx stylelint "src/scss/**/*.scss"`

## Configuration

### ESLint (.eslintrc.js)

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  plugins: ['import'],
  rules: {},
}
```

### Prettier (.prettierrc.js)

```js
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
}
```

### Stylelint (.stylelintrc.js)

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
}
```

---

Feel free to modify the sample files and configuration to suit your project needs!
