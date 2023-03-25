import { Email, Img, Phone } from '../components/cell-wrappers';

const
	internal = {
		getByPath(path) {
			const index = this.list.findIndex(el => el.path === path); // поиск объекта в списке по совпадению path
			return { index, ...this.list[index] };
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
					{ name: 'Email', getVal: obj => obj.email, wrap: Email },
					{ name: 'Address city', getVal: obj => obj.address?.city },
					{ name: 'Phone', getVal: obj => obj.phone, wrap: Phone },
				]
			},
			{
				path: 'rick-and-morty-characters',
				api: 'https://rickandmortyapi.com/api/character/?page=1',
				transform: data => data.results,
				title: 'Rick & Morty',
				columns: [
					{ name: 'Image', getVal: obj => obj.image, wrap: Img },
					{ name: 'Name', getVal: obj => obj.name },
					{ name: 'Status', getVal: obj => obj.status },

				]
			},
			{
				path: 'omdbapi-green',
				api: 'https://www.omdbapi.com/?apikey=a2b07930&s=green',
				transform: data => data.Search.map(film => ({ id: film.imdbID, ...film })),
				title: 'OMDb',
				columns: [
					{ name: 'Title', getVal: obj => obj.Title },
					{ name: 'Year', getVal: obj => obj.Year },
					{ name: 'Poster', getVal: obj => obj.Poster, wrap: Img },
				]
			}]
	};

export const pathList = internal.getPathList();
export const apiList = internal.list;
export const getByPath = arg => internal.getByPath(arg);
