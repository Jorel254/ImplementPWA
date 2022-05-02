const app = Vue.createApp({
    data: () => ({
        title: "Parametros APIS",
        datos:{},
        post: 5,
    }),
    mounted(){
        this.getPost();
    },
    methods:{
    async getPost(){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`);
            const {userId} =data;
            const {data:datauser} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            this.datos=datauser;
        },
    },
});