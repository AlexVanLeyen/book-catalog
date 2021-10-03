import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TBook } from '../../types/book.type';

type TBookCardProps = {
  book: TBook;
  onClick?(): void;
}

const BookCard: React.FunctionComponent<TBookCardProps> = props => {
  const { book, onClick } = props;
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <Box sx={{ display: 'flex' }} height="15em">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography gutterBottom variant="h5" component="h2">
                {book.title}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
