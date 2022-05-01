const app = Vue.createApp({
  data() {
    return {
      title: "ContadorApp",
      count: 0,
    };
  },
  methods:{
      modCount(instruction="increment", limit = 1){
          if(instruction === "decrement"){
            this.count -= limit;
          }
          else{
              this.count += limit;
          }
          
      },
  },
});
