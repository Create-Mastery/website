# Contributing to Create Mastery Website

Thanks for wanting to contribute! 🙌
Please follow these guidelines to make contributions smooth and clear.

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/Create-Mastery/website.git create-mastery-website
    cd create-mastery-website
    ```

2. Do you changes

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the project locally (if applicable):

    ```bash
    npm run dev
    ```

## Commit Guidelines

- Use clear and descriptive commit messages.
- Recommended format:

type: short description

Optional detailed explanation

Example:

```plaintext
feat: added Discord badge on homepage
```

Common types:

- feat → new feature
- fix → bug fix
- docs → documentation update
- style → formatting / whitespace only
- refactor → code change without behavior change

## Branching

- Create a branch for each feature or fix:

```bash
git checkout -b feature/feature-name
```

- Push your branch when done:

```bash
git push origin feature/feature-name
```

## Pull Request Guidelines

- Ensure code is linted and formatted correctly.
- Add a clear description: what changes and why.
- Link issues if applicable (#issue-number).
- Do not merge PRs yourself unless you are a maintainer.

## Coding Style

### TypeScript

- Use **2 spaces** for indentation (no tabs).   <!-- o 4 se ci tieni -->
- Always end statements with semicolons `;`.
- Prefer double quotes `"` for strings (be consistent).
- Use `const` and `let` instead of `var`.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for components and classes.
- Prefer arrow functions for inline callbacks.
- Keep lines under 80 characters.
- Add a newline at the end of each file.

### Astro

- Use 2 spaces for indentation (no tabs).
- Keep lines under 80 characters.
- Add a newline at the end of each file.
- Use the correct layout depending on the page type.
- Import only the components you actually use.
- Prefer Tailwind for styling; avoid unnecessary `.css` files.
- Keep imports organized and clean (put them in the frontmatters).

### Examples

❌ Wrong:

```ts
var my_var = "Hello world"
function my_function(){
    console.log("hi")
}
```

✅ Correct:

```ts
const myVar = 'Hello world';

function myFunction() {
  console.log('hi');
}
```

## Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions.
