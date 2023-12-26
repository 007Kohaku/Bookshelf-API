const {
  addOneBookHandler, getAllStorageBooks, getOneBookById, editOneBookById, deleteOneBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addOneBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllStorageBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getOneBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editOneBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteOneBookById,
  },
];

module.exports = routes;
