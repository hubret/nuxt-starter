import Vuex from 'vuex'

const store = () => {
    return new Vuex.Store({
        state:{
            myVariable: "hello",
        },
        mutations:{
            setMyVariable: (state, payload) => { state.myVariable = payload },
        },
        actions:{
            async apiGet({dispatch, state, commit}) {
                await axios.get("http://myurl.com")
                    .then(({data})=>{
                    const p = JSON.parse(data.replace("])}while(1);</x>", "")).payload;
                    commit("setBlogs", p);
                    //                    p.posts.forEach(post=>dispatch("apiGetAuthor", post.creatorId));
                })
            },
        },
        getters:{
            getMyVariable: state => state.myVariable,
        }
    })
}

export default store;