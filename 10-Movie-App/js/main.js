const app = Vue.createApp({
    data: () => ({
        title:"MoviesApp",
        moviedata: {},
        movieTitle: "Spider man",
    }),
    mounted(){
        this.getMovie();
    },
    methods: {
        async getMovie(){
            const search = this.movieTitle.toLowerCase().replace(/ /g,"+");
            console.log(search);
            const data = await fetch(`http://www.omdbapi.com/?apikey=[yourapikey]&t=${search}`);
            const jsondata= await data.json();
            this.moviedata = jsondata;
        }
    }
});