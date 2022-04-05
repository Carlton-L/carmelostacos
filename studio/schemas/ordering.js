import { MdOutlineMyLocation } from "react-icons/md";
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
          name: "link",
          title: "Link",
          type: "object",
          icon: MdOutlineMyLocation,
          fields: [
            {
              name: "url",
              title: "Restaurant URL",
              description: "Link to menu page",
              type: "url",
            },
            {
              name: "location",
              title: "Location",
              type: "reference",
              to: [{ type: "location" }],
            },
          ],
          preview: {
            select: {
              title: "location.locationname",
            },
          },
        },
      ],
    },
  ],
};
