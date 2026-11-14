# Fernwood Studio

A responsive, single-page website for **Fernwood Studio**, a fictional houseplant shop. It's built with plain HTML, CSS and jQuery, so there's no framework and no build step.

> *"Every room deserves to breathe."*

## Features

- **Hero header** with a "Shop plants" call to action
- **About section** that tells the studio's story
- **Featured plants grid** with six plant cards. Each card has an image, a description, a price and a care-difficulty badge.
- **Plant care basics**: tips on light, water, soil and humidity
- **Contact form** with name, email, interest and message fields
- **Fixed navigation bar** with smooth scrolling to each section
- **Slide-out hamburger menu** on smaller screens, animated with jQuery
- **Responsive layout** with breakpoints at 1400px and 600px

## Project structure

```
Fernwood-Studio/
├── index.html          # All page markup and sections
├── css/
│   └── app.css         # Layout, styling and media queries
├── js/
│   ├── app.js          # Menu toggle and contact form behaviour
│   └── jquery.js       # jQuery v4.0.0 (bundled locally)
├── assets/
│   └── images/         # Logo, header backgrounds, plant photos, social icons
├── LICENSE
└── README.md
```

## Getting started

You don't need to install anything. Clone the repo and open the page:

```bash
git clone https://github.com/mr-boris-u/Fernwood-Studio.git
cd Fernwood-Studio
open index.html        # macOS. Or double-click index.html in any browser
```

To run it from a local server instead (handy for live reload in VS Code):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

You can also use the VS Code **Live Server** extension.

## How it works

- **Navigation:** `toggleMenu()` and `closeMenu()` in [js/app.js](js/app.js) slide the `<nav>` in and out on mobile. Clicking any nav link closes the menu.
- **Contact form:** submitting the form shows "Sending…" and then "Message Sent ✓". **This is only a front-end demo, and nothing is actually sent.** To make it work for real, connect the form to a backend or a form service such as Formspree or Netlify Forms.
- **Smooth scrolling:** handled in CSS with `scroll-behavior: smooth`.

## Customizing

| To change…            | Edit                                                      |
| --------------------- | --------------------------------------------------------- |
| Plants, prices, text  | The `#plants` section in [index.html](index.html)         |
| Colours, fonts, layout| [css/app.css](css/app.css)                                |
| Images                | Replace the files in [assets/images/](assets/images/)     |
| Social links          | The `#navSocial` and `#footerSocial` blocks in `index.html` |

## Built with

- HTML5
- CSS3 (Flexbox and CSS Grid, media queries)
- JavaScript + [jQuery 4.0.0](https://jquery.com/)

## License

Released under the [MIT License](LICENSE). © 2026 Mr Boris.
