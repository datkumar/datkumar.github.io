---
title: Code Journal
description: A statically-generated site for showcasing and organizing my coding notes, with personalized formatting and syntax highlighting for better readability and structure
code_url: https://github.com/datkumar/code-journal
demo_url: https://datkumar.github.io/code-journal
tech_stack: [astro, ts, css]
---

## Background

I tried out many note-taking solutions such [Notion](https://www.notion.so/product), [Obsidian](https://obsidian.md/) as well as just hosting plain markdown files on [Github Pages](https://pages.github.com/). They had various features that worked for some cases, but i wanted a more custom layout and styling aimed especially at displaying code snippets and other specialised content. This meant i was particularly looking for features like **syntax-highlighting**, nicer **themes** (for the code snippets as well as the whole site), **diagrams**, **math expresions** etc. I had heard great things about [Astro](https://astro.build/) on the internet, most saying how great it is for static-content focussed sites; so I felt this could be an exciting new side-projecet. Writing notes that are publicly would also make me likely to put more effort into their content

## Features

- Statically-built site with very **mininal javascript overhead**, making it fast and light-weight
- Each markdown document's frontmatter is **type-validated** against a schema with the help of Typescript and [Zod](https://zod.dev/)
- Light and Dark **theme slider**, that automatically sets based on your system and site **preferences**
- For syntax-highlighting, I've used the [expressive-code](https://expressive-code.com/) package, that Astro uses for their documentation site too
- For diagrams, i've added [Mermaid](https://mermaid.js.org/) support and also I'm generating some diagrams via [Graphviz](https://graphviz.org/) code
- For rendering math expressions, I've imported a [MathJax](https://www.mathjax.org/) script from a CDN
