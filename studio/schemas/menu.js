import {
  MdMenuBook,
  MdRestaurantMenu,
  MdOutlineRestaurantMenu,
} from "react-icons/md";

import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  name: "menu",
  title: "Menu Cards",
  type: "document",
  orderings: [orderRankOrdering],
  icon: MdMenuBook,
  fields: [
    orderRankField({ type: "menu" }),
    {
      name: "name",
      title: "Card Title",
      type: "string",
    },
    {
      name: "menulist",
      title: "Menu Items",
      type: "array",
      of: [
        {
          name: "menuitem",
          title: "Menu Item",
          type: "object",
          icon: MdRestaurantMenu,
          preview: {
            select: {
              title: "itemname",
              subtitle: "itemprice",
              // NOTE: Would like to also add number of sub-items to preview
            },
          },
          fields: [
            {
              name: "itemname",
              title: "Item Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "itemprice",
              title: "Item Price",
              type: "string",
              description:
                "(optional) - make sure you include the dollar sign $",
            },
            {
              name: "itemdescription",
              title: "Item Description",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "itemnote",
              title: "Note",
              type: "string",
              description:
                "(optional) - Will appear as a footer on the menu section",
            },
            {
              name: "subitemlist",
              title: "Sub-items (optional)",
              type: "array",
              description:
                "Different styles of this item (e.g. Plain Cheese Quesadilla)",
              of: [
                {
                  name: "subitem",
                  title: "Sub-item",
                  type: "object",
                  icon: MdOutlineRestaurantMenu,
                  preview: {
                    select: {
                      title: "subitemname",
                      subtitle: "subitemprice",
                    },
                  },
                  fields: [
                    {
                      name: "subitemname",
                      title: "Sub-item name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "subitemprice",
                      title: "Sub-item price",
                      type: "string",
                      description: "(optional))",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
