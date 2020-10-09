A simple library to fluently convert an HTML string to an HTML element. 

## Import

```js
import { html } from "./node_modules/fluentelement/index.js";
```

or if you're using WebPack (if you're using create-react-app or angularcli you are):

```js
import { html } from "fluentelement";
```

## Usage

```js
html`<div class="myDiv">hello world</div>`
```
returns an `HTMLDivElement`.

## Limitations and future work

 - The string must represent only one HTML element (though this element may have many children).
 - Currently, there is no model binding; any changes to variables after using the tagged template method will not automatically propagate to the element. You'll need to recreate the element or change the element manually. 
