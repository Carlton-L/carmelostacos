// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas

// Document schemas
import about from "./about";
import contact from "./contact";
import gallery from "./gallery";
import locations from "./locations";
import menu from "./menu";
import ordering from "./ordering";

// Object types
import socialLink from "./objects/socialLink";
import orderLink from "./objects/orderLink";
import menuItem from "./objects/menuItem";
import menuSubItem from "./objects/menuSubItem";
import galleryImage from "./objects/galleryImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    about,
    contact,
    gallery,
    locations,
    menu,
    ordering,
    orderLink,
    socialLink,
    menuItem,
    menuSubItem,
    galleryImage,
  ]),
});
