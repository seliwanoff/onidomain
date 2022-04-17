<template>
<div>
<Header/>

    <div class="w-full mb-10">
            <div class="flex justify-center w-full mt-2 p-2">
                <div class="verify-con shadow">
                    <div class="text-[#000] text-center p-2 text-2xl">
                    {{message}}
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
            link:this.$route.params.link,
            message:'Checking...',
            bol:true
        }
    },
   async created(){
       const data ={
           email:this.email,
           link:this.link,

       }
       const response = await axios.post('https://sordam.150psi.com/api/auth/verifyemail',data);
       if(response.status==200){
           this.message='Your email has been verified.'
         
           if(this.bol==true){
                this.interval= setInterval(()=>{
            this.$router.push('/users/login');
            this.bol=false
            },3000);
           }
           
       }else{
           this.message=response.data.message
       }
       
    }
    
   
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