import IRoute from '../interfaces/route';
import BookCatalog from '../pages/bookCatalog';
import Book from '../pages/book';

const routes: Array<IRoute> = [
  {
    path: '/books',
    name: 'Book Catalog',
    component: BookCatalog,
    exact: true
  },
  {
    path: '/books/:id',
    name: 'Book',
    component: Book,
    exact: true
  }
];

export default routes;
