import { useState } from "react";
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
} from "@chakra-ui/react";
import data from "./data/data.json";
import principles from "./data/principles";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrinciples, setSelectedPrinciples] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const toggleCheckbox = (principle) => {
    setSelectedPrinciples(
      (prev) => (prev[0] === principle ? [] : [principle]) // Toggle or select only one
    );
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm);
    const matchesPrinciple =
      selectedPrinciples.length === 0 ||
      selectedPrinciples.includes(item.principle);
    return matchesSearch && matchesPrinciple;
  });

  return (
    <Box display="flex" height="100vh">
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
      </Box>
    </Box>
  );
};

export default App;
