import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            userFavorites: JSON.parse(localStorage.getItem('userFavorites')) || []
        };
    },
    actions: {
        addJoke(context, joke) {
            context.state.userFavorites.push(joke);
            localStorage.setItem('userFavorites', JSON.stringify(context.state.userFavorites));
        },
        removeJoke(context, jokeId) {
            const index = context.state.userFavorites.findIndex(joke => joke.id === jokeId);
            if (index !== -1) {
                context.state.userFavorites.splice(index, 1);
                localStorage.setItem('userFavorites', JSON.stringify(context.state.userFavorites));
            }
        }
    }
});

export default store;