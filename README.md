# sws-hamburger

A JavaScript to display the humburger menu button.

## Usage

Place HTML element with ID `sws-hamburger`.

```html
<div id="sws-hamburger"></div>
```

Set element's style etc... with data attribute.

```html
<div id="sws-hamburger" role="button" tabindex="1"
  data-sws-hamburger-size="100"
  data-sws-hamburger-weight="10"
  data-sws-hamburger-fg-color="#f9c296"
  data-sws-hamburger-bg-color="#996236"
  data-sws-hamburger-mobile-width="600"></div>
```


| attribute name                    | content                       | defaults  |
|:----------------------------------|:------------------------------|:----------|
| `data-sws-hamburger-size`         | Vertical and horizontal size  | `50`      |
| `data-sws-hamburger-bg-color`     | Background color              | `#ffc966` |
| `data-sws-hamburger-fg-color`     | Foreground color              | `#ffffff` |
| `data-sws-hamburger-weight`       | Weight of lines               | `3`       |
| `data-sws-hamburger-mobile-width` | Mobile device judgment width  | `640`     |
| `data-sws-hamburger-src`          | Image path                    | `null`    |
