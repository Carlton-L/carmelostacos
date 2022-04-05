import { MdOutlineMyLocation } from "react-icons/md";

export default {
  name: "orderlink",
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
};
