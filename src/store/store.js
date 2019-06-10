import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		quotes: [
			{
				quote: 'Be like water.',
				author: 'Bruce Lee',
			},
			{
				quote: "Don't work hard, work intelligent!",
				author: 'unknown',
			},
			{
				quote: "People don't buy what you do, they buy why you do it.",
				author: 'Simon Sinek',
			},
			{
				quote: 'Data is the new oil.',
				author: 'Clive Humby',
			},
		],
		index: 1,
	},

	getters: {
		// Here we will create a getter
	},

	mutations: {
		increment(state) {
			if (state.index < state.quotes.length - 1) {
				state.index++;
			} else {
				state.index = 0;
			}
		},
	},

	actions: {
		// Here we will create Larry
	},
});
