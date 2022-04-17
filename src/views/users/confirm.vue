<template>
<div>
<Header/>

    <div class="w-full mb-10">
            <div class="flex justify-center w-full mt-2 p-2">
                <div class="verify-con shadow">
                    <div class="text-[#000] text-center p-2">
                        A verification email has been sent <span class="font-bold">{{email}}</span>.
                        Kindly check and verify your email.
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios'
import Header from '../../components/header.vue'


//import axios from 'axios'



export default {
    name:'verify-app',
    components:{
        Header,
       
    },
    data(){
        return{
            email:this.$route.params.email,
            
            
           
        }
    },
   
       
   
    
   
}
</script>
<style scoped>
.verify-con{
background: #fff;
max-width:800px;
width:100%;
padding: 10px;
border-radius: 10px;


}
</style>