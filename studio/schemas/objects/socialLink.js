import { MdLink } from "react-icons/md";

export default {
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
};
