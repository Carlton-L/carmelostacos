import { MdLink } from "react-icons/md";

export default {
  name: "contact",
  title: "Contact Info",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "socials",
      title: "Social links",
      type: "array",
      of: [
        {
          name: "link",
          title: "Social Link",
          type: "object",
          icon: MdLink,
          fields: [
            {
              name: "name",
              title: "Name",
              description: "(e.g. Facebook)",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
