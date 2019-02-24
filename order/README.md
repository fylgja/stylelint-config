# Fylgja stylelint-config (Order)

**NO PLUGIN and CONFIG!**

## Reason

We don't believe in a strict code order.

While code linting is great.
The order of the code is something that should be left to the developer.

While we do follow a specific order of our styles.
This never strict for the following reasons.

- New css properties that are not in the order of the style config,
  causing high maintence.
- Cases where the code order makes no sense, yes they exist.
- CSS properties that work for multiple parent properties,
  e.g. `gap` with Grid, Flex or Columns.

## What CSS order to follow.

There are some rules out there.

We follow a DOM Like order.
Others follow the Alphabetical order or something else 🤷‍.

So what is this DOM like order.
<details style="margin-bottom: 16px;">
<summary>Well, in here is big lump of code that gives you a general idea.</summary>

```SCSS
.order-example {
    // var's/special setters
    --color-theme: rebeccapurple;
    content: attr();
    counter-reset: section;
    counter-increment: section;
    quotes: '"' '"' "'" "'";
    // Box
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clear: both;
    float: left;
    // Layout
    display: block;
    list-style: square;
    grid-column: span 2;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    table-layout: fixed;
    caption-side: bottom;
    // Shape
    width: auto;
    max-width: 100%;
    min-width: 100%;
    height: auto;
    clip-path: circle();
    shape-outside: img();
    margin: auto;
    padding: 0;
    border-collapse: collapse;
    border-radius: 50%;
    border: 1px solid currentColor;
    box-shadow: 0 0 0 #fff2;
    outline: none;
    // Color
    background-color: #eee;
    color: #333;
    fill: currentColor; // svg
    stroke: currentColor; // svg
    text-stroke: 4px #eee;
    caret-color: #333;
    // Font
    font-family: system-ui, sans-serif;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 500;
    font-style: normal;
    font-feature-settings: normal;
    // Text/Word
    letter-spacing: unset;
    text-align: center;
    vertical-align: center;
    text-transform: uppercase;
    white-space: pre;
    hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;
    // Animatiable
    transform: scaleX(1);
    opacity: 1;
    animation: 3s infinite;
    transition: transform .2s linear;
    will-change: transform;
    // Special properties
    appearance: none;
    overflow: visible;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    scroll-snap-type: x mandatory;
    -webkit-tap-highlight-color: transparent;
}
```
</details>

We follow a set of groups that specify how we order our code.

The logic in this order is to keep properties bundeled together.

For example the properties like;
text-overflow, overflow-wrap and overflow are better together than split.

Not for the name but for the role they have.

Same for position properties top, right, bottom and left.
Should be bundeld together.

Not randomly somewhere in your class.

So **NO** to this 😫

```CSS
.class {
    left: -5px;
    position: absolute;
    border-color: currentColor;
    top: 3px;
}
```

### FAQ

<details>
<summary>Is there also an order for each group?</summary>

Soft yes.

The properties that have a direction should follow the DOM order.

That is: top, right, bottom, left or block, inline.

Also width comes before height.

</details>

<details>
<summary>Why is the var's/special setters group before the box group?</summary>

The properties in this group are specificly used to set values.

CSS var should always come before all, similair to SCSS var's.
And the other propeties are used to set values used by the content property.

</details>

<details>
<summary>Should all browser specific styles come at the end?</summary>

Depends on the style.

Browsers prefixes should be avoided!
Use [autoprefixer](https://github.com/postcss/autoprefixer) instead.

But if they are needed.
And they it only exist for 1 specific browers.

Then _Yes_ that property should come at the end.

</details>

<details>
<summary>Why is float part of the box group</summary>

Float moves the box like position while flex and grid move the childeren.

</details>

<details>
<summary>Why is list-style part of the layout group</summary>

Not really sure.
Still working out the best position for it.
For now where using the default order used by Chrome and Firefox.

Another reason is that the `display` propery can have the value `list-item`.

_Suggetions are welcome_

</details>

## Exceptions & Preprocessors

There are some exceptions for the code order.

In preprocessors there are some code order rules.

These are;
- `extends` before
- `mixins` before but after `extends`
- `inline variables` before but after `mixins`

For CSS this also applies to inline variables.

```CSS
.icon {
    --size: 15px;
    width: var(--var);
    height: var(--var);
}
```
