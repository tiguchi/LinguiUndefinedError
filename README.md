# Lingui Undefined Argument Error

This project is a minimal example to demonstrate a bug that is triggered when a `<Trans>` element contains HTML tags and not just plain text.

The project was created by using the latest version of `create-react-app` and following the exact Lingui installation and setup steps outlined
here: https://lingui.github.io/js-lingui/tutorials/react.html#installing-jslingui

The only difference is that I used yarn instead of npm for adding dependencies.

## Error Screenshot
![Screenshot](error-screen-shot.png?raw=true)

## Problematic JSX Code

The following JSX code snippet triggers the error:

```
<Trans id="someId">To get started, edit <code>src/App.js</code> and save to reload.</Trans>
```

The error only occurs when the `<Trans>` element contains HTML tags and if the `id` attribute is specified. If the `id` attribute is omitted then the page renders without error message, but the `<Trans>` block appears entirely blank.

I am not sure if I'm just misusing Lingui somehow, or if localizing embedded HTML markup is supported at all. However, the first example on the documentation page about "React patterns"
suggests that nested elements are OK. It just doesn't work. https://lingui.github.io/js-lingui/tutorials/react-patterns.html

# Development Environment

- Max OS X 10.13.6
- Google Chrome 67.0.3396.99
- Yarn 1.9.2 for managing dependencies and launching `react-scripts start`
