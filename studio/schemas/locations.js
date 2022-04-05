import { MdLocationOn } from "react-icons/md";

export default {
  name: "location",
  title: "Locations",
  type: "document",
  icon: MdLocationOn,
  fields: [
    {
      name: "locationname",
      title: "Location Name",
      description: "(e.g. Capitol Hill)",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "hours",
      title: "Hours",
      description: "(e.g. 10am-9pm Mon-Fri, 12pm-7pm Sat-Sun)",
      type: "string",
    },
  ],
};
