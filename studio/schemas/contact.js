export default {
  name: "contact",
  title: "Contact Info",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
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
          type: "link",
        },
      ],
    },
  ],
};
