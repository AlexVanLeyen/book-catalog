import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header: React.FunctionComponent<{}> = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <BookIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          <FormattedMessage
            id="app.name"
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
