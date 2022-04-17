<template lang="">
<div class="flex w-full" v-if="user!=null">
    <div class="flex w-full">
    <div class="contains justify-between flex">
        <Sidebar></Sidebar>
        <div class=" md:w-5/6  bg-[#fff] md:absolute right-0 big-container">
            <div class="p-5 m-2 flex justify-between ">
                <div>
                    <h2 class="text-2xl text-primary font-bold">Settings</h2>
                </div>
                <div>
                    <div class="border border-[#E8F7FB]  font-bold text-2xl p-2 text-[#1AAFD0] relative  bg-[#E8F7FB] rounded-xl">
                        DS
                        <div class="absolute p-1.5 font-bold  top-9 right-0 bg-[green] rounded-full "></div>
                    </div>
                
                </div>
            </div>
             <div class="border-t  border-primary w-full">
               <div class=" p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       

                        <div class="w-full mb-3 mt-3 ">
                            <form action="" class="w-full" @submit.prevent="updateemail">
                                <div class="p-3 mt-3 mb-3 grid">
                                <label for="" class="font-bold text-primary font-sans">Email</label>
                                <input type="email" class="md:w-2/5 border p-4 rounded mt-2" placeholder="Enter New Email" v-model="email">
                                <button  class="md:w-2/5 border p-4 rounded mt-2 bg-primary text-[#fff] outline-none">update email</button>
                                </div>
                            </form>
                        
                        </div>
                        
                        
                        </div>

                    </div>
               </div>
               <div class="p-4 justify-center flex ">
                    <div class="settings-con border-b border-primary w-full">
                       

                        <div class="w-full mb-3 mt-3 ">
                            <form action="" class="w-full" @submit.prevent="updatepassword">
                                <div class="p-3 mt-3 mb-3 grid">
                                <span v-if="error==false  && message!=''" class="p-2 bg-[#53c053] text-[#fff] md:w-2/5">{{message}}</span>
                                 <span v-if="error==true" class="p-2 bg-[crimson] text-[#fff] w-2/5">{{message}}</span>
                                <label for="" class="font-bold text-primary font-sans">New Password</label>
                                <input type="password" class="md:w-2/5 border p-4 rounded mt-2" placeholder="Enter New Password" v-model="password" @blur="getpassword" required autocomplete="off"
                                @focus="checkerror"
                                >
                                <span style="color:crimson">{{message}}</span>
                                <button type="submit" class="md:w-2/5 border p-4 rounded mt-2 bg-primary text-[#fff] outline-none">update password</button>
                                </div>
                            </form>
                        
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
            password:'',
            email:'',
            error:false,
            message:''
        }
    },
    methods:{
      /*async  updateemail(){
          const data={
              email:this.email,
               headers: {
                    Authorization:'Bearer ' + this.user 

                }
          }
           this.user = localStorage.getItem('token');
          try{
            const response = await axios.get('https://sordam.150psi.com/api/updateemail', {
                headers: {
                    Authorization:'Bearer ' + this.user 

                }
            });
           
          }
          catch(e){

          }
        }*/
        async  updatepassword(){
            
                    if(this.password.length>6){
                        this.user = localStorage.getItem('token');
                      
                const data={
                    password:this.password,
                    
                }
                try{
                    const response = await axios.post('https://sordam.150psi.com/api/updatepassword',data,{
                headers: {
                    Authorization:'Bearer ' + this.user 

                }})
                    console.log(response)
                    this.message=response.data.message
                    this.password=''
                }
                catch(e){
                    this.error = true
                    this.message='Unable to update password'
                }
            }
          
        },
        getpassword(){
            if(this.password.length<6){
                this.error = true
                this.message='You password must atleast six characters long'
            }
        },
        checkerror(){
              this.error=false,
              this.message=''
        }
    },
    beforeCreate() {
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