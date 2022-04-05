import { MdRestaurantMenu } from "react-icons/md";

export default {
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
      description: "(optional) - make sure you include the dollar sign $",
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
      description: "(optional) - Will appear as a footer on the menu section",
    },
    {
      name: "subitemlist",
      title: "Sub-items (optional)",
      type: "array",
      description:
        "Different styles of this item (e.g. Plain Cheese Quesadilla)",
      of: [
        {
          title: "Sub-item",
          type: "menusubitem",
        },
      ],
    },
  ],
};
