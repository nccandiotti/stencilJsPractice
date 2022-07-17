# WebComponents & StencilJsPractice

## Why use web components

- encapsulate logic and UI
  - separation of concerns
- reusable across pages
  - only need to write logic once/don't need to worry about overlapping logic
- reusable between apps and projects

## What are web components

- "custom html elements"
- 3 important parts
  - custom HTML elements (register your own HTML tags)
  - shadow DOM
    - features to create your own DOM tree
    - manage a separate DOM node tree for your HTML elements (including scoped CSS styles )
  - template and slots
    - write HTML templates that you can add to your HTML elements
  - HTML imports (discontinued)

## Types of Custom elements

- Autonomous (more common?)
- Extended built in elements

## Web Component Lifecycle

- Element created => constructor() => basic initializations
- Element attached to DOM => connectedCallback() => DOM initializations
- Element detached from DOM => disconnectedCallback() => Cleanup Work
  - when you destroy the node
- Observed Attribute Update => attributeChangeCallback() => Update data + DOM

## Attributes vs Properties

- A common mistake is to confuse HTML attributes and DOM object properties.

- First of all, it's important to understand that the browser essentially "translates" your HTML code to a tree of DOM nodes (= objects if you access them in JavaScript).

- A HTML tag can have an attribute and the "DOM objects" (JavaScript objects for DOM nodes) can (and most likely will) have properties. Often, attributes and properties are linked.

- For example, an <input value="Starting value"> element has a value attribute. If you access that element via JavaScript, its respective objects representation also has a value property. Behind the scenes, the value attribute and value property are kind of linked.

- Other objects have no attribute equivalents though. For example, you can set aria- attributes (for accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) on HTML elements. These attributes have no linked properties since they're only required in the markup for screen-readers to read them.

- And even for the <input> element, it's not as simple as it might seem. If you change the value property programmatically, you will notice that the attribute value (which you can see in your browser dev tools) does not reflect that change. So it's a one-way route for this attribute basically.

- We'll dive deeper into this throughout the course and you will learn how to set attributes, properties and how to synchronize them.

- For now, it's just important to keep in mind that HTML attributes and DOM properties CAN be connected but don't have to. They're not the same.

## Shadow Dom

- giving custom element its own DOM that is not directly connected to light DOM (not affected by global styles)
- in constructor - this.attachShadow({mode: 'open'})
- append elements to shadowDom via shadowRoot
