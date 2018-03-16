
const _todos = [
	{
		id: 1,
		title: 'Aprender REACT',
		project: 'PWA',
		done: 1,
	},
	{
		id: 2,
		title: 'Aprender VUE',
		project: 'PWA',
		done: 0,
	},
	{
		id: 3,
		title: 'Aprender VUEX',
		project: 'PWA',
		done: 2,
	}
];

export default {
	getTodo(obj){
		setTimeout(() => obj(_todos), 100 )
	}
}
