import { MdMenuBook } from "react-icons/md";

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
          type: "menuitem",
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
