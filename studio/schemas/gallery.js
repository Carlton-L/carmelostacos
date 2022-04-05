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
          name: "image",
          title: "Image",
          type: "image",
          description: "JPG, SVG, PNG, GIF or TIFF",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
          ],
        },
      ],
    },
  ],
};
