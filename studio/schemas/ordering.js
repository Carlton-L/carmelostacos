import { BiCart } from "react-icons/bi";

export default {
  name: "ordering",
  title: "Online Ordering Partners",
  type: "document",
  icon: BiCart,
  fields: [
    {
      name: "title",
      title: "Service Name",
      description: "(e.g. Doordash)",
      type: "string",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "linklist",
      title: "Links",
      description: "(One link for each location)",
      type: "array",
      of: [
        {
          type: "orderlink",
        },
      ],
    },
  ],
};
