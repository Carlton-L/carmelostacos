<div align="center">

  <img src="src/images/Carmelo's-Logo.svg" alt="logo" width="200" height="auto" />
  <h1>Carmelo's Tacos</h1>
  
  <p>
    Repository for the Seattle-based restaurant chain Carmelo's Tacos 
  </p>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/Carlton-L/carmelostacos/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Carlton-L/carmelostacos" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Carlton-L/carmelostacos" alt="last update" />
  </a>
  <a href="https://github.com/Carlton-L/carmelostacos/network/members">
    <img src="https://img.shields.io/github/forks/Carlton-L/carmelostacos" alt="forks" />
  </a>
  <a href="https://github.com/Carlton-L/carmelostacos/stargazers">
    <img src="https://img.shields.io/github/stars/Carlton-L/carmelostacos" alt="stars" />
  </a>
  <a href="https://github.com/Carlton-L/carmelostacos/issues/">
    <img src="https://img.shields.io/github/issues/Carlton-L/carmelostacos" alt="open issues" />
  </a>
  <a href="https://github.com/Carlton-L/carmelostacos/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/github/license/Carlton-L/carmelostacos" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<details>
<summary>:desktop_computer: Desktop</summary>
<div align="center"> 
  <img src="https://i.imgur.com/v0YB6DX.png" alt="desktop screenshot" />
</div>
</details>
<details>
<summary>:iphone: Mobile</summary>
<div align="center"> 
  <img src="https://i.imgur.com/lwfQBVc.png" alt="mobile screenshot" />
</div>
</details>
<!-- TechStack -->

### :space_invader: Tech Stack

<details open>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://www.gatsbyjs.com/">Gatsby</a></li>
    <li><a href="https://theme-ui.com">Theme-UI</a></li>
    <li><a href="https://emotion.sh/">Emotion</a></li>
  </ul>
</details>

<details open>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://www.sanity.io">Sanity.io (CMS)</a></li>
    <li><a href="https://graphql.org/">GraphQL</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- todo

<!-- Color Reference -->

### :art: Color Reference

| Color            | Hex                                                              |
| ---------------- | ---------------------------------------------------------------- |
| Primary Color    | ![#ED3E3E](https://via.placeholder.com/10/ED3E3E?text=+) #ED3E3E |
| Secondary Color  | ![#FBD74A](https://via.placeholder.com/10/FBD74A?text=+) #FBD74A |
| Accent Color     | ![#7CC142](https://via.placeholder.com/10/7CC142?text=+) #7CC142 |
| Highlight Color  | ![#EBD8BC](https://via.placeholder.com/10/EBD8BC?text=+) #EBD8BC |
| Text Color       | ![#3C3734](https://via.placeholder.com/10/3C3734?text=+) #3C3734 |
| Background Color | ![#F9F6F2](https://via.placeholder.com/10/F9F6F2?text=+) #F9F6F2 |

<!-- FAQ -->

## :grey_question: FAQ

- Question 1

  - Answer 1

- Question 2

  - Answer 2

<!-- License -->

## :warning: License

Distributed under the MPL-2.0 License. See LICENSE.txt for more information.

<!-- Contact -->

## :handshake: Contact

<!-- TODO: Update email address -->

Carlton Lindsay - [carlton.dev](https://carlton.dev) - carlton.lindsay@protonmail.com

Project Link: [https://github.com/Carlton-L/carmelostacos](https://github.com/Carlton-L/carmelostacos)

<!-- Acknowledgments -->

## :gem: Acknowledgements

Useful resources and libraries used in this project.

- todo

---

<details>
<summary>Notes</summary>

# carmelostacos

_This area is a temporary note-taking page for the time being_

Webpage for Carmelo's Tacos in Seattle

<header>
</header>
<main>
<section>
</section>
</main>
<footer>
</footer>

Borders are represented as <hr>

Menu sections are represented as <dl>
Menu items are represented as <dt>
Menu item deescriptions are represented as <dd>
Error pages have error in <title>

## Sanity

Edit the webpage content here: https://carmelos.sanity.studio/

Drafts will show up in the graphql query but can be identified by their ID (will start with "drafts.")

### Queries:

_These queries are for the Sanity GraphQL Playground, not Gatsby_

#### About:

_Returns an array containing a single object_
query {
allAbout {
abouttitle
aboutcopy
}
}

#### Menu (ordered by order rank):

_Returns an array of menu sections_
query {
allMenu(sort: {orderRank: ASC}) {
name
menulist {
itemname
itemprice
itemdescription
subitemlist {
subitemname
subitemprice
}
}
}
}

#### Gallery:

_Returns an array with a single object (the section) which contains an array of images_
query {
allGallery {
images {
caption
asset {
altText
url
}
}
}
}

#### Locations:

_Returns an array of locations_
query {
allLocation {
locationname
address
hours
}
}

#### Ordering:

_Returns an array of delivery services_
query {
allOrdering {
title
logo {
asset {
url
metadata {
dimensions {
height
width
}
palette {
dominant {
background
foreground
title
}
}
hasAlpha
}
}
}
linklist {
url
location {
\_id
locationname
address
}
}
}
}

#### Contact

_Returns an array containing a single object with contact info (including array of social links)_
query {
allContact {
email
phone
socials {
name
url
}
}
}

</details>
