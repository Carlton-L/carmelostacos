/** @jsx jsx */
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";
import Ornament from "./ornament";

const MenuBox = ({ menuTuple }) => {
  // menuTuple is assumed to be an array containing two objects
  // The first element is the menu meant for small screens
  // The second element is the menu meant for large screens
  const notesMobile = [];
  const notesDesktop = [];
  return (
    <Box
      key={menuTuple[0].node.name}
      sx={{
        borderColor: "text",
        borderWidth: "5px",
        borderStyle: "solid",
        my: 3,
        bg: "muted",
        width: ["320px", "428px"],
      }}
    >
      <Box
        sx={{
          borderBottomWidth: "5px",
          borderBottomColor: "text",
          borderBottomStyle: "solid",
          p: 3,
        }}
      >
        <Heading
          as="h3"
          sx={{
            fontSize: ["h5", "h3"],
            display: ["block", null, null, "none"],
          }}
        >
          {menuTuple[0].node.name}
        </Heading>
        <Heading
          as="h3"
          sx={{
            fontSize: ["h5", "h3"],
            display: ["none", null, null, "block"],
          }}
        >
          {menuTuple[1].node.name}
        </Heading>
      </Box>
      <Flex sx={{ flexDirection: "column", p: [4, 5] }}>
        {/* Map through the menu items */}
        {menuTuple[0].node.menulist.map((menuItem, index) => {
          // Check for notes for each menu item
          if (menuItem.itemnote) {
            notesMobile.push(menuItem.itemnote);
          }
          return (
            <Flex
              sx={{
                flexDirection: "column",
                width: "100%",
                mb: 4,
                display: ["flex", null, null, "none"],
              }}
              key={index}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Text sx={{ fontSize: ["h5", "h4"] }}>
                  {menuItem.itemname}
                  {menuItem.itemnote ? "*".repeat(notesMobile.length) : ""}
                </Text>
                <Text sx={{ fontSize: ["h5", "h4"] }}>
                  {menuItem.itemprice}
                </Text>
              </Flex>
              <Text sx={{ fontSize: ["paragraph", "h6"] }}>
                {menuItem.itemdescription}
              </Text>
              {menuItem.subitemlist.map((subItem, index) => (
                <Flex sx={{ justifyContent: "space-between" }} key={index}>
                  <Text sx={{ fontSize: ["h6", "h5"] }}>
                    - {subItem.subitemname}
                  </Text>
                  <Text sx={{ fontSize: ["h6", "h5"] }}>
                    {subItem.subitemprice}
                  </Text>
                </Flex>
              ))}
            </Flex>
          );
        })}
        {menuTuple[1].node.menulist.map((menuItem, index) => {
          // Check for notes for each menu item
          if (menuItem.itemnote) {
            notesDesktop.push(menuItem.itemnote);
          }
          return (
            <Flex
              sx={{
                flexDirection: "column",
                width: "100%",
                mb: 4,
                display: ["none", null, null, "flex"],
              }}
              key={index}
            >
              <Flex sx={{ justifyContent: "space-between" }}>
                <Text sx={{ fontSize: ["h5", "h4"] }}>
                  {menuItem.itemname}
                  {menuItem.itemnote ? "*".repeat(notesDesktop.length) : ""}
                </Text>
                <Text sx={{ fontSize: ["h5", "h4"] }}>
                  {menuItem.itemprice}
                </Text>
              </Flex>
              <Text sx={{ fontSize: ["paragraph", "h6"] }}>
                {menuItem.itemdescription}
              </Text>
              {menuItem.subitemlist.map((subItem, index) => (
                <Flex sx={{ justifyContent: "space-between" }} key={index}>
                  <Text sx={{ fontSize: ["h6", "h5"] }}>
                    - {subItem.subitemname}
                  </Text>
                  <Text sx={{ fontSize: ["h6", "h5"] }}>
                    {subItem.subitemprice}
                  </Text>
                </Flex>
              ))}
            </Flex>
          );
        })}
      </Flex>
      {notesMobile.map((note, index) => (
        <Box
          sx={{ mx: 3, mb: 2, display: ["inline", null, null, "none"] }}
          key={index}
        >
          <Text sx={{ fontSize: ["paragraph", "h6"] }}>
            {"*".repeat(index + 1)}
            {note}
          </Text>
        </Box>
      ))}
      {notesDesktop.map((note, index) => (
        <Box
          sx={{ mx: 3, mb: 2, display: ["none", null, null, "inline"] }}
          key={index}
        >
          <Text sx={{ fontSize: ["paragraph", "h6"] }}>
            {"*".repeat(index + 1)}
            {note}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

const Menu = ({ data }) => {
  // Transforms input array into the correct format
  // Menu needs to read left to right in two columns or straight down in one column
  const transformMenu = (array) => {
    const result = [];

    const newArray = array
      .filter((e, i) => !(i % 2))
      .concat(array.filter((e, i) => i % 2));

    for (let i = 0; i < array.length; i++) {
      if (i === 0 || (i === array.length - 1 && !(array.length % 2))) {
        result.push([array[i], array[i]]);
      } else if (i === array.length - 1) {
        result.push([array[i], array[i - 1]]);
      } else {
        result.push([array[i], newArray[i]]);
      }
    }

    return result;
  };

  return (
    <section
      id="menu"
      sx={{
        maxWidth: "1887px",
        bg: "background",
        pt: 5,
        pb: 12,
      }}
    >
      <Ornament>
        <Heading
          as="h2"
          sx={{
            lineHeight: "80%",
            mx: 5,
            my: 6,
            textAlign: "center",
            fontSize: "h2",
            width: "min-content",
          }}
        >
          Menu
        </Heading>
      </Ornament>
      <Box sx={{ py: [6, null, null, 9], textAlign: "center" }}>
        <Button
          sx={{
            mx: "auto",
          }}
        >
          Order Online
        </Button>
      </Box>
      {/* Outer Flex Container */}
      <Flex
        sx={{
          width: ["320px", "428px", null, "876px"],
          flexDirection: ["column", null, null, "row"],
          justifyContent: ["center", null, null, "space-between"],
          mx: "auto",
        }}
      >
        {/* Inner Flex container no. 1 */}
        {/* [[1, 1], [2, 3], [3, 5], [4, 2], [5, 4]] */}
        <Flex
          sx={{
            maxWidth: "26.75em",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Map through the first half of the Menu */}
          {transformMenu(data.edges)
            .slice(0, Math.ceil(data.edges.length / 2))
            .map((element, index) => (
              <MenuBox menuTuple={element} key={index} />
            ))}
        </Flex>
        <Flex
          sx={{
            maxWidth: "26.75em",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Map through the second half of the Menu */}
          {transformMenu(data.edges)
            .slice(-Math.ceil(data.edges.length / 2))
            .map((element, index) => (
              <MenuBox menuTuple={element} key={index} />
            ))}
        </Flex>
      </Flex>
    </section>
  );
};

export default Menu;
