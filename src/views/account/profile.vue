<template lang="">
<div class="flex w-full" v-if="user!=null">
    <div class="flex w-full">
    <div class="contains justify-between flex">
        <Sidebar></Sidebar>
        <div class=" md:w-5/6  bg-[#fff] md:absolute right-0 big-container">
            <div class="p-5 m-2 flex justify-between ">
                <div>
                    <h2 class="text-2xl text-primary font-bold">Profile</h2>
                </div>
                <div>
                    <div class="border border-[#E8F7FB]  font-bold text-2xl p-2 text-[#1AAFD0] relative  bg-[#E8F7FB] rounded-xl">
                        DS
                        <div class="absolute p-1.5 font-bold  top-9 right-0 bg-[green] rounded-full "></div>
                    </div>
                
                </div>
            </div>
             <div class="border-t  border-primary w-full">
               
                <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       <div class="flex justify-between w-full p-2 border-b border-primary ">
                       <span class="font-bold font-sans">First name</span>
                       <span class="font-light font-sans">{{f_name}}</span>
                       </div>
                    </div>
                    
               </div>
                <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       <div class="flex justify-between w-full p-2 border-b border-primary ">
                       <span class="font-bold font-sans">Last name </span>
                       <span class="font-light font-sans">{{l_name}}</span>
                       </div>
                    </div>
                    
               </div>
                <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       <div class="flex justify-between w-full p-2 border-b border-primary ">
                       <span class="font-bold font-sans">Email</span>
                       <span class="font-light font-sans">{{email}}</span>
                       </div>
                    </div>
                    
               </div>
                <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       <div class="flex justify-between w-full p-2 border-b border-primary ">
                       <span class="font-bold font-sans">Username</span>
                       <span class="font-light font-sans">{{display_name}}</span>
                       </div>
                    </div>
                    
               </div>
               <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       <div class="flex justify-between w-full p-2 border-b border-primary ">
                       <span class="font-bold font-sans">Created At</span>
                       <span class="font-light font-sans">{{createdAt}}</span>
                       </div>
                    </div>
                    
               </div>
            </div>

          
            
               
            
          
            
        </div>
        
    </div>
    
</div>
</div>

</template>
<script>
import Sidebar from "../../components/sidebar.vue"
import axios from "axios"
export default {
    name:'settings-app',
    components:{
        Sidebar
    },
    data(){
        return{
            user:null,
           f_name:'',
           l_name:'',
           display_name:'',
           createdAt:'',
            email:'',
            error:false,
            message:''
        }
    },
    methods:{
      
    },
    async beforeCreate(){
              this.user = localStorage.getItem('token');
           
          try{
             const responsess = await axios.get('https://sordam.150psi.com/api/getuser', {
                headers: {
                    Authorization:'Bearer ' + this.user 

                }
            });
         
              this.f_name = responsess.data.data.f_name;
              this.l_name = responsess.data.data.l_name;
              this.email = responsess.data.data.email;
              this.display_name = responsess.data.data.display_name;
              this.created=responsess.data.data.created_At;
        }
        catch(e){
          
        }

        try{
              const response = await axios.get('https://sordam.150psi.com/api/getsingleproduct?id='+this.productid);
              this.p_name = response.data.data[0].name;
              this.p_price = response.data.data[0].price
              
        }
        catch(e){
            console.log(e);
        }
         this.user = localStorage.getItem('token');
         if(this.user==null){
                this.$router.push('/users/login');
            
        }
      
    },
}
</script>
<style  scoped>
.big-container{

min-height: 1000px !important;
height: 100%;
}
</style>