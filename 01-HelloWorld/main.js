const app = Vue.createApp({
    data(){
        return {
           user: {
            title: "Hello world",
            name: "Santiago",
            age: 20,
            movies: ["Batman","Spiderman","LODR","Superman"],
            url: "https://google.com",
            picture:"https://cdn.pixabay.com/photo/2022/02/10/05/45/lantern-7004643_960_720.jpg",
            classValue: "Good"
           }
        };
    }
});
console.log(app.title)