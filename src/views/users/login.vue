<template>
<div>
<Header/>
    <div class="w-full md:p-2 ">
        <div class="md:p-2 md:m-2 justify-center flex ">
           
            <div class="login-con  p-3 rounded md:mt-10">
                 <h2 class="text-[#fff] font-extrabold  text-center font-mono mb-2" style="background:green" v-if="errorget==false">{{message}}</h2>
                  <h2 class="text-[#fff] font-extrabold  text-center font-sans mb-2" style="background:crimson" v-show="errorget">{{message}}</h2>
                <h2 class="text-primary font-extrabold text-3xl text-center font-sans mb-2">WELCOME BACK</h2>
                <p class="text-primary text-center font-sans mb-3">
                It's good to see you again. Log in to continue.
                </p>
                <form class="w-full" @submit.prevent="handleSubmit">
                <div class="">
                    <div class="border p-1 mb-2 rounded" :class="{'error':error}">
                    <label for="email" class="p-3 " v-show="showlabel">Email Address</label>
                        <div class="flex w-full">
                            <input type="text" class="w-5/6 p-3 outline-none" autocomplete="" placeholder=" Email Address" @focus="showemail" @blur="geterroremail" v-model="id" required> <span><i class="fa fa-user"></i></span>
                        </div>
                      
                    </div>
                      <span v-show="error" style="color:crimson;font-weight:bold;">Can't be blank</span>
                    <div class="border p-1 mb-4 rounded" :class="{'error':errorpass}">
                    <label for="email" class="p-3 " v-show="showlab">Password</label>
                        <div class="flex w-full">
                            <input type="password" class="w-5/6 p-3 outline-none" placeholder="Password"  @focus="showpass"  @blur="geterrorpass" v-model="password" required> <span><i class="fa fa-user"></i></span>
                        </div>
                    </div>
                    <span v-show="errorpass" style="color:crimson;font-weight:bold;">Can't be blank</span>
                    <div class=" p-1 mb-4 rounded">
                  
                        
                    </div>
                     <div class="p-1 mb-4 rounded">
                   
                       <button type="submit" class="p-6 bg-primary w-full rounded text-white text-center" :disabled="isDisable">{{loader}}</button>
                    </div>
                    <div class="text-center">
                        <router-link to="/forgrt_password" class="font-bold  text-[#1AAFD0]">Forget Password</router-link>                   
                    </div>
                </div>
                </form>
            </div>
        </div>
       <div class="nocon">
            Don't have an account?<router-link to="/users/signup" class="text-[#1AAFD0]"> Sign up</router-link>                   

       </div>
    
    </div>
</div>
    
</template>
<script>
import Header from '../../components/header.vue'
import axios from 'axios'

export default {
    name:'Login-app',
    components:{
        Header,
    },
    data(){
        return{
            showlabel:false,
            showlab:false,
            id:'',
            error:false,
            errorpass:false,
            password:'',
            message:'',
            errorget :false,
            isDisable:false,
            loader:'Log in'

        }
    },
    methods: {
        showemail(){
            this.showlabel=!this.showlabel
             this.error = false
        },
        showpass(){
            this.showlab=!this.showlab
             this.errorpass = false
        },
        geterroremail(){
            if(this.id == ''){
                this.error = true
            }
        },
        geterrorpass(){
            if(this.password == ''){
                this.errorpass = true
            }
        },
       async handleSubmit(){
           this.isDisable = true
           this.loader ='Loading....'
           const data = {
               id:this.id,
               password:this.password
           }
         
             
           try{
            const res =   await axios.post('https://sordam.150psi.com/api/auth/login',data)
          
           
                if(res.status==200){
                    console.log(res.status)
                   this.errorget = false
                    this.message= res.data.message
                   
                    localStorage.setItem('token',res.data.token)
                    this.$store.dispatch('user',res.data);
                     this.$router.push('/account/dashboard')
                }
               
                
            }
           catch(e){
                 this.errorget = true,
                 this.message='Incorrect Credentials'
                
              this.isDisable=false,
              this.loader='Log in'
           }
           //console.log(response)
          
        }
    },
}
</script>
<style scoped>
.login-con{
max-width: 610px;
background:#fff;
width:100%;
box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;


}
.nocon{
max-width: 610px;
margin-bottom: 70px !important;
margin-top: 20px !important;
width:100%;

margin:0px auto;
text-align: center;

}
label{
 font-size:14px
}
.error{
border:1px solid crimson;

}
.blur{
    background: #ccc;
    color:black
}

</style>