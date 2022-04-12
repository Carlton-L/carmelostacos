/** @jsx jsx */
import { jsx, Box, Button, Flex, Heading } from "theme-ui";
import Ornament from "./ornament";

const Menu = ({ data }) => {
  // Transforms input array into the correct format
  // Menu needs to read left to right in two columns or straight down in one column
  console.log(data);
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

    console.log(result);

    return result;
  };

  return (
    <section
      id="menu"
      sx={{
        maxWidth: "1887px",
        bg: "background",
        pt: 5,
        pb: 5,
      }}
    >
      <Ornament>
        <Heading mx={5}>Menu</Heading>
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
      <Flex
        sx={{
          width: ["320px", "428px", null, "876px"],
          flexDirection: ["column", null, null, "row"],
          justifyContent: "center",
          mx: "auto",
        }}
      >
        {/* [[1, 1], [2, 3], [3, 5], [4, 2], [5, 4]] */}
        <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
          {/* Map through the first half of the Menu */}
          {transformMenu(data.edges)
            .slice(0, Math.ceil(data.edges.length / 2))
            .map((element, index) => (
              <Box
                key={element[0].node.name}
                sx={{
                  borderColor: "text",
                  borderWidth: "5px",
                  borderStyle: "solid",
                  my: 5,
                }}
              >
                <Box
                  sx={{
                    borderBottomWidth: "5px",
                    borderBottomColor: "text",
                    borderBottomStyle: "solid",
                  }}
                >
                  <Heading as="h3" sx={{ fontSize: ["h5", "h3"] }}>
                    {element[0].node.name}
                  </Heading>
                </Box>
                <Flex
                  sx={{ flexDirection: "column", width: ["320px", "468px"] }}
                >
                  {element[0].node.menulist.map((element) => (
                    <Box>{element.itemname}</Box>
                  ))}
                </Flex>
              </Box>
            ))}
        </Flex>
        <Flex sx={{ flexDirection: "column" }}>
          {/* Map through the second half of the Menu */}
        </Flex>
      </Flex>
    </section>
  );
};

export default Menu;
