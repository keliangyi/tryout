
<template>
   <h1>child:{{ msg }}</h1>
   <input v-model="username"/>
   <button @click="handleSend">
       传给父父组件
   </button>
</template>
<script>

export default {
    name:"child",
    props:['msg'],
    emits:['onSend'],
    data(){
        return {
            username:""
        }
    },
    methods:{
        handleSend(){
            this.$emit('onSend',this.username)
        }
    }
}
</script>