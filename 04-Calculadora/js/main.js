const app = Vue.createApp({
    data: () => ({
        title: "Calculadora",
        num1: 0,
        num2: 0,
    }),
    computed:{
        suma(){
            return this.num1 + this.num2;
        },
        resta(){
            return this.num1 - this.num2;
        },
        divsion(){
            const res =this.num1 / this.num2;
            if (res == Infinity || res == -Infinity){
                return "Error no calculable";
            }else
            {
                return res;
            }
        },
        multipli(){
            return this.num1 * this.num2;
        }
    }
});