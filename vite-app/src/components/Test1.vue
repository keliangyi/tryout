
<template>
   <div>
        <h1 @click="changeMsg()">{{ msg }}</h1>  
        <p >{{ reverse }}</p>  
        <p :[key]="'red'">21</p>
        <input type="text" v-model="msg">
   </div>
    <hr>
   <!-- <Child v-if="visible" @onSend="handleGetUsername" :msg="msg"/> -->
   <hr>
   <Composition />
</template>
<script>
import Child from './Child.vue'
import Composition from './Composition.vue'
export default {
    name:"test",
    data(){
        return {
            msg:"kly",
            key:'color',
            visible:true
        }
    },
    mounted(){
        setTimeout(() => {
            // this.visible = false
            this.msg = 'a msg from parent'
        },3000)  
    },
    components:{
    Child,
    Composition
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
            if(newVal.length > 50){
                alert('msg 长度不能大于五十')
                this.msg = oldVal
            }
        }
    }
}
</script>