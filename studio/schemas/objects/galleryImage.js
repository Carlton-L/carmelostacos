export default {
  name: "galleryimage",
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
};
