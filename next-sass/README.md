# Next + Sass Linters ⚛️

This guide will help you configure [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) as **Static Code Analyzers (linters)** and [Prettier](https://prettier.io/) as a code formatter in your Next + TypeScript + Sass project.

## Set-up Linters in your Local Environment
Steps to follow are different depending on the linter to be configured:
- Go to [ESLint](#eslint-)
- Go to [Stylelint](#stylelint-)
- Go to [Prettier](#prettier-)
---

### ESLint 🔩
Follow these steps to configure **ESLint** in your project:

1. Run this line in your terminal:
```
npm install --save-dev typescript@5.4.5 eslint@8.57.0 eslint-config-next@14.2.5 @typescript-eslint/eslint-plugin@7.16.1 eslint-config-prettier@9.1.0
```
2. Copy [.eslintrc.json](./.eslintrc.json) to your project's root folder.
3. Run `npx eslint . --ext ts,tsx` to display linter errors if any.
4. Fix linter errors

> **WARNING: don't make any changes to [.eslintrc.json](./.eslintrc.json) since it represents the best practices and guidelines that you share with your team. If you think the changes are necessary let your team know about them.**

> NOTE: feel free to explore the auto-fix option by running `npx eslint . --ext ts,tsx --fix`. However, fixing linter errors manually will help you grab the habit of writing clean code!

---

### Stylelint 🤵
Follow these steps to configure **Stylelint** in your project:

1. Run this line in your terminal:
```
npm install --save-dev stylelint@16.8.1 stylelint-config-standard-scss@13.1.0
```
2. Copy [.stylelintrc.json](./.stylelintrc.json) to your project's root folder.
3. Run `npx stylelint "**/*.scss"` to display linter errors if any.
4. Fix linter errors

> **WARNING: don't make any changes to [.stylelintrc.json](./.stylelintrc.json) since it represents the best practices and guidelines that you share with your team. If you think the changes are necessary let your team know about them.**

> NOTE: feel free to explore the auto-fix option by running `npx stylelint "**/*.scss" --fix`. However, fixing linter errors manually will help you grab the habit of writing clean code!

---

### Prettier 🦋
Follow these steps to configure **Prettier** in your project:

1. Run this line in your terminal:
```
npm install --save-dev --save-exact prettier
```
2. Copy [.prettierrc.json](./.prettierrc.json) and [.prettierignore](./.prettierignore) to your project's root folder.
3. Run `npx prettier -c .` to look for formatting errors in files or run `npx prettier -w .` to format files automatically.

> **WARNING: don't make any changes to [.prettierrc.json](./.prettierrc.json) and [.prettierignore](./.prettierignore) since they represent the best practices and guidelines that you share with your team. If you think the changes are necessary let your team know about them.**

> NOTE: Ideally you want Prettier to format files in a pre-commit hook. That way each of your committed files will be formatted by the time they reach your codebase.
>
> To achieve this run `npx mrm@2 lint-staged`. This will install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), it will also create a configuration in your `package.json` file that will format your code automatically on each commit. Just add this line into your `lint-staged` object in your project's `package.json`:
>
>```
>    "*": "prettier -w -u"
>``` 

---

## Set-up GitHub Actions
Follow these steps to enable linter checks on GitHub Pull Requests:

1. Copy the [.github](./.github) folder from this directory to your project's root folder.
2. Once this is done, linter checks should run on each GitHub Pull Request.
3. Read the [root level README.md](../README.md) file to have a bigger picture of how to address and fix linter errors in GitHub Actions.
