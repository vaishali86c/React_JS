import React from 'react';
import { Box, SimpleGrid, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" py={10} bg="gray.800" color="white">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
        <Box>
          <Text fontWeight="bold" mb={2}>Company</Text>
          <Link href="#">About Us</Link><br />
          <Link href="#">Careers</Link><br />
          <Link href="#">Blog</Link>
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2}>Support</Text>
          <Link href="#">Help Center</Link><br />
          <Link href="#">Contact Us</Link><br />
          <Link href="#">FAQs</Link>
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2}>Legal</Text>
          <Link href="#">Privacy Policy</Link><br />
          <Link href="#">Terms of Service</Link><br />
          <Link href="#">Cookie Policy</Link>
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2}>Follow Us</Text>
          <Link href="#">Facebook</Link><br />
          <Link href="#">Twitter</Link><br />
          <Link href="#">Instagram</Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Footer;
