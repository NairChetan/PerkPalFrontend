import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const leaderboardData = [
  { name: 'Sanjay Nair', points: 3150, du: 'DU 2', avatar: 'https://via.placeholder.com/40' },
  { name: 'Alby Kennady', points: 3150, du: 'DU 2', avatar: 'https://via.placeholder.com/40' },
  { name: 'John Doe', points: 3000, du: 'DU 1', avatar: 'https://via.placeholder.com/40' },
  { name: 'Jane Smith', points: 2900, du: 'DU 3', avatar: 'https://via.placeholder.com/40' },
  { name: 'User Five', points: 2800, du: 'DU 2', avatar: 'https://via.placeholder.com/40' },
  { name: 'User Six', points: 2700, du: 'DU 4', avatar: 'https://via.placeholder.com/40' },
  { name: 'User Seven', points: 2600, du: 'DU 5', avatar: 'https://via.placeholder.com/40' },
  { name: 'User Eight', points: 2500, du: 'DU 6', avatar: 'https://via.placeholder.com/40' },
];

const ScrollBox = styled(Box)({
  flexGrow: 1,
  overflowY: 'auto',
  marginTop: 1,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#4F0A3A',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

const Leaderboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4F0A3A',
        borderRadius: 7,
        padding: 2,
        color: 'white',
        width: '100%',
        height: '100%', // Adjusted height to make it smaller
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        Meet Our Stars!
      </Typography>
      <ScrollBox>
        {leaderboardData.slice(0, 3).map((user, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#5D1049',
              borderRadius: 2,
              padding: 1,
              marginBottom: 1,
            }}
          >
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 40, height: 40, marginRight: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2">{user.du}</Typography>
            </Box>
            <Typography variant="h6">{user.points}</Typography>
          </Box>
        ))}
      </ScrollBox>
    </Box>
  );
};

export default Leaderboard;
