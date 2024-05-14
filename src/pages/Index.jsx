import React, { useState } from "react";
import { Container, Text, VStack, HStack, Button, Box, Image, Select, Input, IconButton } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", category: "Mobile", price: 699, img: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTcxNTY3NDQxNXww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Laptop", category: "Computers", price: 999, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXB0b3B8ZW58MHx8fHwxNzE1Njc0NDE1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Headphones", category: "Accessories", price: 199, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcxNTY3NDQxNnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Smartwatch", category: "Wearables", price: 299, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNofGVufDB8fHx8MTcxNTY3NDQxNnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addBalance = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Text fontSize="3xl" fontWeight="bold">
          E-commerce Store
        </Text>
        <HStack spacing={4}>
          <Text fontSize="xl">Account Balance: ${balance.toFixed(2)}</Text>
          <Input placeholder="Add Balance" type="number" id="balanceInput" />
          <Button onClick={() => addBalance(document.getElementById("balanceInput").value)}>Add Balance</Button>
        </HStack>
        <HStack spacing={4}>
          <Button leftIcon={<FaBitcoin />} colorScheme="orange">
            Pay with BTC
          </Button>
          <Button leftIcon={<FaEthereum />} colorScheme="purple">
            Pay with ETH
          </Button>
          <Button leftIcon={<FaDollarSign />} colorScheme="green">
            Pay with USDT
          </Button>
        </HStack>
        <Select placeholder="Select Category" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Computers">Computers</option>
          <option value="Accessories">Accessories</option>
          <option value="Wearables">Wearables</option>
        </Select>
        <HStack spacing={4} wrap="wrap" justify="center">
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} maxW="sm">
              <Image src={product.img} alt={product.name} boxSize="200px" objectFit="cover" />
              <VStack spacing={2} mt={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text>${product.price}</Text>
                <Button colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          ))}
        </HStack>
        <Button colorScheme="blue" onClick={() => alert(`You have ${cart.length} items in your cart.`)}>
          View Orders
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
