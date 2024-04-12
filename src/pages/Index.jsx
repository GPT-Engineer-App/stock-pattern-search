import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack, Text, Grid, Image, Link } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import PatternDropdown from "../components/PatternDropdown";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState("");

  const searchPatterns = async () => {
    // Simulated API call to search for stock patterns
    const response = await fetch(`https://api.example.com/stocks?pattern=${selectedPattern}`);
    const data = [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
        url: "https://finance.yahoo.com/quote/AAPL",
      },
      {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        description: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally.",
        url: "https://finance.yahoo.com/quote/TSLA",
      },
      {
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        description: "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally.",
        url: "https://finance.yahoo.com/quote/AMZN",
      },
    ];
    setResults(data);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Stock Pattern Search
      </Heading>
      <Stack direction="row" mb={4}>
        <Input placeholder="Enter a pattern (e.g., head and shoulders)" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={searchPatterns}>
          Search
        </Button>
        <PatternDropdown value={selectedPattern} onChange={(e) => setSelectedPattern(e.target.value)} />
      </Stack>
      {results.length > 0 ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {results.map((stock) => (
            <Box key={stock.symbol} borderWidth={1} borderRadius="md" p={4}>
              <Image src={`https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMGNoYXJ0JTIwJTI0JTdCc3RvY2suc3ltYm9sJTdEfGVufDB8fHx8MTcxMjkzOTAxOXww&ixlib=rb-4.0.3&q=80&w=1080`} mb={4} />
              <Heading as="h2" size="md" mb={2}>
                {stock.name} ({stock.symbol})
              </Heading>
              <Text mb={2}>{stock.description}</Text>
              <Link href={stock.url} isExternal color="blue.500">
                View Details
              </Link>
            </Box>
          ))}
        </Grid>
      ) : (
        <Text>No results found. Try searching for a different pattern.</Text>
      )}
    </Box>
  );
};

export default Index;
