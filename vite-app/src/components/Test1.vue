
<template>
    <Child @onSend="handleGetUsername" :msg="key"/>
   <div>
        <h1 @click="changeMsg()">{{ msg }}</h1>  
        <h1 >{{ reverse }}</h1>  
        <h1 :[key]="'red'">21</h1>
        <input type="text" v-model="msg">
   </div>
</template>
<script>
import Child from './Child.vue'
export default {
    name:"test",
    data(){
        return {
            msg:"kly",
            key:'color'
        }
    },
    components:{
        Child
    },
    methods:{
        changeMsg() {
            console.log(this);
            this.msg = 'sb'
            this.key = 'id'
        },
        handleGetUsername(username){
            console.log('this is from Child:',username);
            this.msg = username
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
                alert('msg 长度不能大于五')
                this.msg = oldVal
            }
        }
    }
}
</script>