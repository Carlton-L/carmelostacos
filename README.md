# carmelostacos

Webpage for Carmelo's Tacos in Seattle

Edit the webpage content here: https://carmelos.sanity.studio/

Error pages have error in <title>

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

Components:

<button> has 2 variants: primary and secondary, which are defined according to the theme
<>

Create a new component
Give it the variant prop
Set the variant prop to default to a location in theme
If variant prop is manually added, search the theme object for the variant

## Sanity

Drafts will show up in the graphql query but can be identified by their ID (will start with "drafts.")

### Queries:

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
