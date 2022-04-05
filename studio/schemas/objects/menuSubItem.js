import { MdOutlineRestaurantMenu } from "react-icons/md";

export default {
  name: "menusubitem",
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
};
