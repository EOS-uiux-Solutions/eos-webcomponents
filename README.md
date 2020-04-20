# EOS-webcomponents

Welcome to the repository for the web component library used in the [EOS Design system](https://gitlab.com/SUSE-UIUX/eos). It's built on top of [Polymer](https://www.polymer-project.org/), which is an open-source JavaScript library for building web applications using web components.

## Installation

First, install Polymer globally:  `npm install -g polymer-cli` then install the dependecies with `npm i`.

Now you can run `polymer serve` for the development environment. You will then be able to access the web components here: http://127.0.0.1:8081/components/eos-webcomponents/

## Developing web components

EOS components use [LitElement](https://lit-element.polymer-project.org/), a base class for creating web components for Polymer.

### Creating a component

In order to create Please read through LitElement's guidelines in order to get an understanding of  the underlying concepts behind a web component:

* [Templates](https://lit-element.polymer-project.org/guide/templates)

* [Styles](https://lit-element.polymer-project.org/guide/styles)

* [Properties](https://lit-element.polymer-project.org/guide/properties)

In order to render new component you need to return  the HTML using the  `templateString`:

```javascript
class EosAlert extends LitElement {
    MORE CODE GOES HERE…

    render () {
        return html`
            <div class='alert ${this.type} ${this.scope}'>
                <i class="alert-icon eos-icons md-18">
                    ${this.icon[this.type]}
                 </i>
                 <div class='alert-body'>
                     <div class='alert-title ${(this.title || 'hide')}'>
                         ${this.title}
                     </div>
                     <p><slot/></p>
                 </div> 
...
```

### Styling your web component

Please have a look at LitElement's [styling guidelines](https://lit-element.polymer-project.org/guide/styles) before appliying styles to your component.

When creating a component, we define all root variables in a single css document. These are declared only once and then shared accross components. Our components' root variables are defined in `assets/eos-variables.css`.

#### This is how the root variables are defined

```css
.section.success,
.inline.success {
    background-color: var(--eos-bc-green-100);
    border-color: var(--eos-bc-green-500);
}
...
```

#### Each component has its own isolated styles

```javascript
static get styles () {
   return css`
   /* ==== General==== */
   .alert {
     border-left: 5px solid var(--eos-bc-green-500);
     display: flex;
     margin-bottom: 20px;
     margin: 16px;
...
```

### Using the web components in your projects

#### Implementation without Node.js

First, we need to bundle all our code and dependencies. Run the`npm run bundle` command which will bundle everything, compiling it with [Babel](https://babeljs.io/) and [rollup.js](https://rollupjs.org/).

Once you run the command, a `build` folder will be generated with `eos-components.bundle.js` inside. This is the file that will include all the components. This is the file that needs to be imported into your project.

Necessary files for the components are: 

- `eos-variables.css`  (the stylesheet with all the root CSS rules)

- `eos-components.bundle.js`

If you're using the [EOS Icons](icons.eosdesignsystem.com/) library in your project, we recommend including the files in the project header using the CDN link:

```html
<link rel="stylesheet" href="eos-variables.css">
<script src="eos-components.bundle.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css" />
```

You're ready to add a component:

```html
<eos-alert type='info' scope='section' title="Success alert!">
     Lorem ipsum dolor sit amet consectetur.
</eos-alert>
```

[Demo implementation of web component without Node.js](https://codepen.io/en3sis/pen/abzqKPW)

#### Implementation in React (or Angular)

For frameworks, we can deliver npm packages with the components without bundling them.

1. Add the `lit-element` package to our project running `npm i lit-element`.

2. Copy the components and assets folders.

3. Import [eos-icons CDN link ](https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css) to the project's `index.html`file.

4. Import both files to your component as shown in the example:

```javascript
import React from "react";
import ReactDOM from "react-dom";
/* EOS WEB COMPONENTS */
Import "./eos-variables.css";
import "../components/alerts/index";
 
function App() {
 return (
   <div className="App">
     <h1>React APP</h1>
     <h2>Testing custom element</h2>
 
     <eos-alert type="warning" scope="global">
         Lorem ipsum dolor sit amet consectetur elit. 
     </eos-alert>
...
```

[Demo implementation of web component using React](https://codesandbox.io/s/custom-component-react-pmfor)

# Learn more about the EOS Design System

* [EOS Design System](https://www.eosdesignsystem.com/)

* [EOS Icons](icons.eosdesignsystem.com/)

* [Follow us on Twitter](https://twitter.com/eosdesignsystem)

# Our "thank you" section

### Tested for every browser in every device

Thanks to [Browserstack](https://www.browserstack.com) and their continuous contribution to open source projects, we continuously test the EOS to make sure all our features and components work perfectly fine in all browsers.
Browserstack helps us make sure our Design System also delivers a peace of mind to all developers and designers making use of our components and layout in their products.


