const app = Vue.createApp({
    data: () => ({
        title: "Peticiones Vue",
        datos: [],
    }),
    mounted(){
        this.getPost();
    },
    methods:{
    async getPost(){
            const res =await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            this.datos = data;
        },
    },
});