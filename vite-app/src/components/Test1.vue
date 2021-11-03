
<template>
   <div>
        <h1 @click="changeMsg()">{{ msg }}</h1>  
        <h1 >{{ reverse }}</h1>  
        <h1 :[key]="'red'">21</h1>
        <input type="text" v-model="msg">
   </div>
</template>
<script>
export default {
    name:"test",
    data(){
        return {
            msg:"kly",
            key:'color'
        }
    },
    
    methods:{
        changeMsg() {
            console.log(this);
            this.msg = 'sb'
            this.key = 'id'
        }
    },
    computed:{
        reverse(){
            return this.msg.split('').reverse().join('')
        }
    },
    watch:{
        msg(newVal, oldVal){
            if(newVal.length > 5){
                alert('不能大于五')
                this.msg = oldVal
            }
        }
    }
}
</script>