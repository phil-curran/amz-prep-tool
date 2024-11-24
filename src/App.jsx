import { useState, useRef } from "react";
import {
  Box,
  VStack,
  Checkbox,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  HStack,
  Button, // Add Button
} from "@chakra-ui/react";
import { domToSvg } from "modern-screenshot";
import data from "./data/data_backup2";
import principles from "./data/principles";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrinciples, setSelectedPrinciples] = useState([]);
  const contentRef = useRef(null); // Create the ref

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleCheckbox = (principle) => {
    setSelectedPrinciples(
      (prev) => (prev[0] === principle ? [] : [principle]) // Toggle or select only one
    );
  };

  const handleScreenshot = async () => {
    if (contentRef.current) {
      try {
        console.log("Starting domToSvg...");
        const svgElement = await domToSvg(contentRef.current);
        console.log("Generated SVG element:", svgElement);

        if (!svgElement) {
          console.error("domToSvg returned null or undefined.");
          return;
        }

        const svgData = new XMLSerializer().serializeToString(svgElement);
        console.log("Serialized SVG data:", svgData);

        const blob = new Blob([svgData], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "screenshot.svg";
        link.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error generating SVG screenshot:", error);
      }
    } else {
      console.error("Content ref is null.");
    }
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm);
    const matchesPrinciple =
      selectedPrinciples.length === 0 ||
      selectedPrinciples.includes(item.principle);
    return matchesSearch && matchesPrinciple;
  });

  return (
    <div ref={contentRef}>
      <Box display="flex" height="100vh" ref={contentRef}>
        {/* Red Sidebar */}
        <Box
          width="20%"
          bg="gray"
          p={4}
          overflowY="auto"
          color="white"
          fontWeight="bold"
          borderRight="1px solid"
        >
          <VStack align="start" spacing={4} p={4}>
            {principles.map((principle, index) => (
              <HStack
                key={index}
                justify="space-between"
                width="100%"
                fontWeight="bold"
              >
                <Box>{principle}</Box>
                <Checkbox
                  size="lg"
                  value={principle}
                  isChecked={selectedPrinciples.includes(principle)}
                  onChange={() => toggleCheckbox(principle)}
                  colorScheme="teal"
                />
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" display="flex" flexDirection="column">
          {/* Yellow Header */}
          <Box bg="gray" p={4} borderBottom="1px solid">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              size="lg"
              borderColor="gray"
              _focus={{ borderColor: "blue" }}
            />
          </Box>

          {/* Blue Content Area */}
          <Box bg="black" flex="1" p={6} overflowY="auto">
            <Accordion allowToggle>
              {filteredData.map((item) => (
                <AccordionItem
                  key={item.id}
                  border="none"
                  bg="white"
                  color="black"
                  borderRadius="md"
                  mb={4}
                >
                  <AccordionButton
                    _expanded={{ bg: "gray.200" }}
                    borderRadius="md"
                  >
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <Text mb={4} color="black" bg="red" p={4} borderRadius={4}>
                      <Text as="span" fontWeight="bold">
                        Full Question:
                      </Text>{" "}
                      {item.fullQuestion}
                    </Text>
                    <Text mb={4} color="black" bg="blue" p={4} borderRadius={4}>
                      <Text as="span" fontWeight="bold">
                        Topic:
                      </Text>{" "}
                      {item.topic}
                    </Text>

                    <Table variant="simple" size="md" colorScheme="gray">
                      <Thead>
                        <Tr bg="black" color="white">
                          <Th width="25%" bg="gray" color="white">
                            Situation
                          </Th>
                          <Th width="25%" bg="gray" color="white">
                            Task
                          </Th>
                          <Th width="25%" bg="gray" color="white">
                            Action
                          </Th>
                          <Th width="25%" bg="gray" color="white">
                            Result
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {item.table.situation.map((situationItem, index) => (
                          <Tr key={index}>
                            <Td border="1px solid" borderColor="gray">
                              {situationItem}
                            </Td>
                            <Td border="1px solid" borderColor="gray">
                              {item.table.task[index]}
                            </Td>
                            <Td border="1px solid" borderColor="gray">
                              {item.table.action[index]}
                            </Td>
                            <Td border="1px solid" borderColor="gray">
                              {item.table.result[index]}
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          {/* Screenshot Button */}
          {/* <Box p={4} bg="gray" borderTop="1px solid">
            <Button size="xs" colorScheme="teal" onClick={handleScreenshot}>
              export
            </Button>
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default App;
