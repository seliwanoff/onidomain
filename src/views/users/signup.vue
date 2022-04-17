<template>
<div>
<Header/>
    <div class="w-full md:p-2 contetnsbody">
        <div class="md:p-2 md:m-2  md:flex  justify-between">
        <div class="login-cons  p-3 rounded md:mt-10 bg-none">
              <h1 class="font-extrabold text-primary md:text-6xl text-left getsize">Build and grow your domain business</h1>
              <p class="text-left text-xl font-light">
              Own great domain names? Think they would sell? <br> Then start earning! Appeal to potential customers with the right tools. And sell at a worthy price.
              </p>
            </div>
            <div class="login-con  p-3 rounded md:mt-10">
                <div class="text-[#000] text-left p-2" v-if="errorget==false">
                        {{ message }}
                </div>
                 <div class=" text-left p-2 bg-[#DC143C] text-[#fff]" v-show="errorget">
                        {{ message }}
                </div>
                
                <form class="w-full" @submit.prevent="handleSubmit">
                <div class="">
                <div class="flex justify-between">
                <div class="border p-1 mb-2 rounded w-1/2 mr-1" :class="{'error':errorfirst} ">
                    <label for="email" class="p-3 " v-show="showlabelfirst">Firstname</label>
                        <div class="flex w-full">
                            <input type="firstname" class="w-5/6 p-3 outline-none" placeholder=" Firstname" @focus="showfirst" @blur="geterrorfirst" v-model="f_name" required> <span><i class="fa fa-user"></i></span>
                        </div>
                      
                    </div>
                      <span v-show="errorfirst" style="color:crimson;font-weight:bold;">Can't be blank</span>
                      <div class="border p-1 mb-2 rounded w-1/2 ml-1" :class="{'error':errorlast}">
                    <label for="lastname" class="p-3 " v-show="showlabellast ">Lastname</label>
                        <div class="flex w-full">
                            <input type="lastname" class="w-5/6 p-3 outline-none" placeholder="Lastname" @focus="showlast" @blur="geterrorlast" v-model="l_name" required> <span><i class="fa fa-user"></i></span>
                        </div>
                      
                    </div>
                      <span v-show="errorlast" style="color:crimson;font-weight:bold;">Can't be blank</span>
                </div>
                    <div class="border p-1 mb-2 rounded" :class="{'error':erroruser}">
                    <label for="email" class="p-3 " v-show="showlabelusername">Username</label>
                        <div class="flex w-full">
                            <input type="username" class="w-5/6 p-3 outline-none" placeholder=" Username" @focus="showusername" @blur="geterrorusername" v-model="display_name" required> <span><i class="fa fa-user"></i></span>
                        </div>
                      
                    </div>
                      <span v-show="erroruser" style="color:crimson;font-weight:bold;">Can't be blank</span>
                      <div class="border p-1 mb-2 rounded" :class="{'error':error}">
                    <label for="email" class="p-3 " v-show="showlabel">Email Address</label>
                        <div class="flex w-full">
                            <input type="email" class="w-5/6 p-3 outline-none" placeholder=" Email Address" @focus="showemail" @blur="geterroremail" v-model="email" required> <span><i class="fa fa-user"></i></span>
                        </div>
                      
                    </div>
                      <span v-show="error" style="color:crimson;font-weight:bold;">Can't be blank</span>
                      
                    <div class="border p-1 mb-4 rounded" :class="{'error':errorpass}">
                        <label for="password" class="p-3 " v-show="showlab">Password</label>
                            <div class="flex w-full">
                                <input type="password" class="w-5/6 p-3 outline-none" placeholder="Password"  @focus="showpass" autocomplete="" @blur="geterrorpass" v-model="password" required> <span><i class="fa fa-user"></i></span>
                            </div>
                    </div>
                    <span v-show="errorpass" style="color:crimson;font-weight:bold;">{{textpass}}</span>
                      <div class="border p-1 mb-2 rounded" :class="{'error':errorconfirm}">
                        <label for="confirmpassword" class="p-3 " v-show="showlabelconfirm">Confirm Password</label>
                            <div class="flex w-full">
                                <input type="password" class="w-5/6 p-3 outline-none" placeholder="Confirm Password" autocomplete="" @focus="showconfirm" @blur="geterrorconfirm" v-model="confirm_password" required> <span><i class="fa fa-user"></i></span>
                            </div>
                      
                    </div>
                    <span v-show="errorconfirm" style="color:crimson;font-weight:bold;">Can't be blank</span>
                      
                    
                    <div class=" p-1 mb-4 rounded">
                  
                        <div class="flex w-full">
                            <div class="flex mt-1 mr-2">
                          <input type="checkbox" name="" id="">
                            </div>
                            <span>I accept the <router-link to="/term" class="text-[#1AAFD0]">term of use </router-link>of Onidomain</span>
                           
                        </div>
                    </div>
                     <div class="p-1 mb-4 rounded">
                   
                       <button type="submit" class="p-6 bg-primary w-full rounded text-white text-center" :disabled="isDisable">{{loader}}</button>
                    </div>
                    <div class="text-center">
                        Already have an account?<router-link to="/users/login" class="font-bold  text-[#1AAFD0]"> Login</router-link>                  
                    </div>
                </div>
                </form>
            </div>
        </div>
       
    
    </div>
</div>
    
</template>
<script>
import Header from '../../components/header.vue'
import axios from 'axios'



export default {
    name:'sign-app',
    components:{
        Header,
    },
    data(){
        return{
            showlabel:false,
            showlabelfirst:false,
            showlabellast:false,
            showlabelusername:false,
            showlabelconfirm:false,
            textpass:'Can\'t be blank',
            showlab:false,
            l_name:'',
            f_name:'',
            display_name:'',
            email:'',
            error:false,
            errorpass:false,
             errorconfirm:false,
            errorlast:false,
            errorfirst:false,
            erroruser:false,
            password:'',
            message:'',
            status:null,
            confirm_password:'',
            hideSuccessmessage:false,
            isDisable :false,
            loader:'Sign up',
             errorget :false,
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
            this.textpass = 'Password must be atleast six characters long'
        },
        showconfirm(){
            this.showlabelconfirm=!this.showlabekconfirm
             this.errorconfirm = false
        },
        geterroremail(){
            if(this.email == ''){
                this.error = true
            }
        },
        geterrorpass(){
            if(this.password == ''){
                this.errorpass = true
            }
        },
         geterrorlast(){
            if(this.l_name == ''){
                this.errorlast = true
            }
        },
         geterrorfirst(){
            if(this.f_name == ''){
                this.errorfirst = true
            }
        },
         geterrorusername(){
            if(this.display_name == ''){
                this.erroruser = true
            }
        },
          geterrorconfirm(){
            if(this.display_name == ''){
                this.errorconfirm = true
            }
        },
        showlast(){
            if(this.l_name == ''){
                 this.showlabellast=!this.showlabellast
               
            }
        },
        showfirst(){
            if(this.f_name == ''){
                  this.showlabelfirst=!this.showlabelfirst
              
            }
        },
        showusername(){
            if(this.display_name == ''){
                  this.showlabelusername=!this.showlabelusername
               
            }
        },
       async handleSubmit(){
           this.loader='Loading....'
           this.isDisable=true
           if(this.password.length>=6){
                if(this.password== this.confirm_password){
                        const data = {
                            email:this.email,
                            f_name:this.f_name,
                            l_name: this.l_name,
                            display_name: this.display_name,
                            password: this.password,
                            confirm_password: this.confirm_password,
                           
                        }
                        
                        try{
                          const response =  await axios.post('https://sordam.150psi.com/api/auth/register',data);
                        
                          if(response.status == 200){
                              this.status = 200;
                              this.errorget=false
                             this.message ='Your account has been created successfully.Kindly check your email and verify.'
                              this.interval= setInterval(()=>{
                                    this.$router.push('/users/confirm');
                            },3000);

                          }
                      
                        }catch(e){
                            this.errorget=true
                          this.message = 'Username or email has already been taken',
                          this.loader='Sign up'
                          this.isDisable=false
                        }
                }else{
                    this.textpass='password must be six characters long'
                }
                        
                        
            }else{
                 this.loader='Sign up'
           this.isDisable=false
                this.errorpass=true
                    this.textpass='Password Doesn\'t match'
            }
           
          
         
        }
    },
}
</script>
<style>
.login-con{
max-width: 610px;
background:#fff;
width:100%;
box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;


}
.login-cons{
max-width: 610px;

width:100%;



}
.nocon{
max-width: 600px;
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
@media screen and (max-width:500px) {
    .getsize{
        font-size:40px
    }
    .login-con{
        box-shadow: none;
    }
    .contetnsbody{
        background: #fff !important;
    }
}
</style>