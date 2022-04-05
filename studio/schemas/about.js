export default {
  name: "about",
  title: "About Section",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "abouttitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "aboutcopy",
      title: "Section contents",
      type: "text",
    },
  ],
};
