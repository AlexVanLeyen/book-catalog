import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';

export type TCatalogItemProps = {
  item: Partial<{title: string}>;
  onClick?(): void;
}

const CatalogItem: React.FunctionComponent<TCatalogItemProps> = ({ item, onClick }) => {
  const { title } = item;
  return (
    <Card>
      <CardActionArea onClick={onClick} data-testid="onclick-book-card">
        <CardContent>
          <Typography variant="body1">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CatalogItem;
