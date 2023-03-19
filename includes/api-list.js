import { Email, Img } from '../components/cell-wrappers';

const
  internal = {
    getByPath(path) {
      const index = this.list.findIndex(el => el.path === path); // поиск объекта в списке по совпадению path
      return {index,...this.list[index]}; 
    },
    getPathList() {
      return this.list.map(({ path }) => path); // получение массива строк 
    },
    list: [
      {
        path: 'json-placeholder-users',
        api: 'https://jsonplaceholder.typicode.com/users',
        transform: data => data,
        title: 'Users',
        columns: [
          { name: 'Name', getVal: obj => obj.name },
          { name: 'Email', getVal: obj => obj.email, comp: Email },
          { name: 'Address city', getVal: obj => obj.address?.city },
        ]
      },
      {
        path: 'rick-and-morty-characters',
        api: 'https://rickandmortyapi.com/api/character/?page=1',
        transform: data => data.results,
        title: 'Rick and Morty',
        columns: [
          { name: 'Image', getVal: obj => obj.image, comp: Img},
          { name: 'Name', getVal: obj => obj.name },
          { name: 'Status', getVal: obj => obj.status },
          
        ]
      }]
  };

export const pathList = internal.getPathList();
export const apiList = internal.list;
export const getByPath = arg => internal.getByPath(arg);
