import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Grid,
} from '@chakra-ui/react';
import { CiFilter } from "react-icons/ci";
import "../styles/Icon.css";

function CountingCard({ title, count, color, date }) {
  const bgColor = useColorModeValue(color, `gray.${color}`);

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="lg"
      boxShadow="0px 2px 4px black"
      w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
    >
      <Heading fontSize="xl" fontWeight="bold" mb={2} color="#1a1a3f">
        {title}
      </Heading>
      <Text fontSize="5xl" fontWeight="bold" color="#1a1a3f">
        {count}
      </Text>
    </Box>
  );
}

function BusinessDashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <Box bg={'#eff4f8'} height={300} >
      <Box position="relative" 
      sx={{
        position: 'absolute',
        cursor: 'pointer',
        top: { base: '1rem', sm: '1rem', md: '1rem', lg: "1rem" },
        right: { base: '4.5rem', sm: '4.5rem', md: '5rem', lg: "5rem" },
        width: '1.5rem',
        height: '1.5rem',
      }}>
        <CiFilter
          className="black-icon"
          onClick={handleDateClick}
        />
        {showDatePicker && (
          <input
            type="date"
            value={startDate.toISOString().slice(0, 10)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            style={{ position: 'absolute', top: '1rem', right: '0.5rem', opacity: 0.9 }}
          />
        )}
      </Box>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={{ base: 5, sm: 10, md: 7, lg: 12 }}
        pt={12}
      >
        <CountingCard title="Payment Received" count={0} color="white" date={startDate} />
        <CountingCard title="Payment Remaining" count={0} color="white" date={startDate} />
        <CountingCard title="Leads Received" count={0} color="white" date={startDate} />
        <CountingCard title="Total Business" count={0} color="white" date={startDate} />
      </Grid>
    </Box>
  );
}

export default BusinessDashboard;
