export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          title: "Image",
          type: "galleryimage",
        },
      ],
    },
  ],
};
