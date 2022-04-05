import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BiFoodMenu, BiInfoCircle, BiIdCard, BiImages } from "react-icons/bi";

export default () =>
  S.list()
    .title("Website Sections")
    .items([
      S.listItem()
        .title("About")
        .child(S.document().schemaType("about").documentId("about"))
        .icon(BiInfoCircle),
      // Minimum required configuration
      //orderableDocumentListDeskItem({ type: "menu" }),
      orderableDocumentListDeskItem({
        type: "menu",
        title: "Menu",
        icon: BiFoodMenu,
      }),
      S.listItem()
        .title("Gallery")
        .child(
          S.document()
            .title("Gallery")
            .schemaType("gallery")
            .documentId("gallery")
        )
        .icon(BiImages),
      ...S.documentTypeListItems().filter((listItem) =>
        ["location", "ordering"].includes(listItem.getId())
      ),
      S.listItem()
        .title("Contact Info")
        .child(S.document().schemaType("contact").documentId("contact"))
        .icon(BiIdCard),
    ]);

// 3. Gallery Photos and Captions
