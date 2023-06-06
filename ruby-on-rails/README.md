# Ruby on Rails Linters

This guide will help you configure [RuboCop](https://rubocop.org/) as a **Static Code Analyzer (linter)** and code formatter in your Ruby on Rails Project. Since this guide was meant for an API only application, it won't contain a section to configure a linter for styles.

## Set-up Linters in your Local Environment
Follow these steps to configure **RuboCop** in your project:

1. Add this line to your `Gemfile`:
```
gem 'rubocop', '~> 1.52', require: false
```
2. Run `bundle install` to install **RuboCop** and its dependencies.
3. Copy [.rubocop.yml](./.rubocop.yml) to your project's root folder.
4. Run `rubocop` to display linter errors if any.
5. Fix linter errors

> **WARNING: don't make any changes to [.rubocop.yml](./.rubocop.yml) since it represents the best practices and guidelines that you share with your team. If you think the changes are necessary let your team know about it.**

> NOTE: feel free to explore the auto-fix option by running `rubocop -A`. However, fixing linter errors manually will help you grab the habit of writing clean code!

## Set-up GitHub Actions
Follow these steps to enable linter checks on GitHub Pull Requests:

1. Copy the `.github` from this directory to your project's root folder.
2. Once this is done, linter checks should run on each GitHub Pull Request.
3. Read the [root level README.md](../README.md) file to have a bigger picture of how to address and fix linter errors in GitHub Actions.
