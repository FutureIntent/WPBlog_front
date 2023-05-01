# CryoCenter frontEnd

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#table-of-contents">Table of Contents</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contributing">Contributing</a>
<ul>
        <li><a href="#branches">Branches</a></li>
        <li><a href="#commits">Commits</a></li>
        <li><a href="#merge-requests">Merge requests</a></li>
        <li><a href="#testing">Testing</a>
</ul>
</li>
<li><a href="#jest--rtl-cheatsheets">Jest & RTL Cheatsheets</a>
      </li>
    <li><a href="#code-quality">Code quality</a>
<ul>
        <li><a href="#eslint">ESLint</a></li>
        <li><a href="#Prettier">prettier</a></li>
        <li><a href="#Editor setup">editor-setup</a></li>
        <li><a href="#emmet">Emmet</a>
</ul>
</li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#folder-structure">Folder structure</a></li>
    <li><a href="#useful-snippets">Useful snippets</a></li>
  </ol>
</details>

## Getting Started

First, install the dependencies:

```bash
yarn
```

Now you can run the development server:

```bash
yarn dev
```

Open [https://localhost:8000](https://localhost:8000) with your browser to see the result.

Also you can find Graphql query helper at [http://localhost:8000/\_\_graphql](http://localhost:8000/__graphql)

## Contributing

### Branches

All new branches should be created from `master` branch. New branches should follow predefined naming convention
`feat|fix|refactor/${ticket_number}_${descriptive-name}`

### Commits

Each commit must be prefixed with `feat|fix|refactor|move|${code-action-taken}:` and has to have a descriptive commit
message. Pre-commit hooks will check for code cleanliness using `eslint`. If the code does not comply with the rules
commit won’t be permitted.

### Merge requests

All merge requests must be created into the `staging` branch. Each merge request should get at least one approve from
the team member to be merged.

### Testing

For testing we are using Jest and RTL (React Testing Library).

`yarn test` - will run tests only once.

`yarn test:watch` - will run tests in background.

When writing tests, try to stick to these rules:

- For each molecule and organism, there should be a test included inside their respective "self-contained" folder.

  ```
  .
  ├── molecules
  │   ├── Dropdown
  │       ├── Dropdown.test.tsx
  │       ├── Dropdown.tsx
  │       ├── index.ts
  │   └── ...
  └── ...
  ```

- For each test we should render a fresh instance of component using `beforeEach()` and cleanup after test
  using `afterEach()`. Otherwise, test can change behavior of another test.
- Tests should cover interaction from user perspective. (What I see, what if I click, what if I type, etc.)
- If some of the component props are not mandatory, the test should cover all cases, with value / without value, if
  component depends on authorization: authorized / guest.
- Each scenario should be wrapped inside `describe()` with name of component and scenario type. (
  Example: `describe('<Dropdown>', () => {}`)

We are using Typescript, so tests should be written in Typescript also.

#### Jest & RTL Cheatsheets

- [React Testing library](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Jest](https://devhints.io/jest)

## Code quality

To be able to contribute to the projects code base you'll have to set up and use `eslint` & `prettier` on your editors
so all of the code that gets written and saved is automatically formated. This is to ensure that every developer that
contributes to the projects writes within the same style rules as everybody else - keeps people sane in the long run.

#### ESLint

To figure out how to set up `eslint` on your editor check the official guide on their website:
https://eslint.org/docs/user-guide/integrations

#### Prettier

To figure out how to set up `prettier` on your editor check the official guide on their website:
https://prettier.io/docs/en/editors.html

#### Editor setup

Every editor's setup to automatically format on save is different. Just google and see how to exactly do you set that up
on your editors.

For example for `VSCode` it's as easy as just adding a few extra lines in your settings. Go
to `Code -> Preferences -> Settings` and these settings to your config file

```
"editor.formatOnSave": true,
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

#### Emmet

To help with better and faster development most modern browsers come with the extension `Emmet` preinstalled. If your
editor does not have `emmet` preinstalled, check how to do so on their official website: https://emmet.io/

To enable `emmet` code autocompletion in your editor, you'll have to make sure that emmet is enabled for the languages
that you're going to be developing on. For example editors might have separate specific languages for `javascript`
& `javascriptreact`. The same goes for `typescript` & `typescriptreact`. To enable `emmet` for all of these not just
regular html files, you might need to edit how your browser's `emmet` extension sees these languages.

For example for `VSCode` you'll need to add these lines to your settings file for it to detect and work for `javascript`
& `typescript` files:

```
"emmet.triggerExpansionOnTab": true,
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
},
```

## Folder structure

We are following the ([Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)) methodology which enforce
principles of componentization, hierarchies, and reuses of code. Gatsby.js has feature, when a file is added to the
pages directory it's automatically available as a route.

```
assets              <-- global assets, that can be used in more then one component
components
├── atoms
├── molecules       <-- components that includes some logic and includes atoms
├── organisms       <-- components that includes some complicated logic, often including molecules and atoms
├── routes          <-- components route based
└── templates       <-- main page structure components
hooks               <-- all custom hooks goes here
locales             <-- all text translation goes here
providers           <-- surprise, surprise - providers goes here
theme
└── config
    ├── breakpoints   <-- file contains all breakpoints that is covered by project
    ├── mediaQueries  <-- mediaQuery helper for styled components
    ├── shadows       <-- all shadow-box styles should go here
    ├── space         <-- all paddings and margings should go here
    └── zIndices      <-- all zIndex should be added here
pages
```

## Useful snippets

For any new improvement that can be used often, feel free to share inside this block.

### Working with images

Main component that is going to be used for this landing is `<StaticImage />` and `<BgImage />`.

For proper aspect ratio of image, we should use prop `<StaticImage aspectRatio={ width / hight } />`.

For background images feel free to copy/paste already created component with needed adjustments. Component should
include path to image inside component, providing it as prop won't work. 
