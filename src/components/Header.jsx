import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onAdd }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      <Typography variant="h4" color="primary.main">
        Credit Card Applications
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={onAdd}
        sx={{
          textTransform: 'none',
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        Add Application
      </Button>
    </Box>
  );
};

export default Header;
