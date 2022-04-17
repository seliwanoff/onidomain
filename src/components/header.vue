<template>
    <div class="relative w-full">
   
    <div v-if="this.$route.path=='/'">
    <div class="bg-primary p-4 min-h-min" :class="{'addColor':showDrop}">
        <div class="justify-center w-full  flex p-2 relative nav-head">
            <div class="border-white-100  justify-between w-full p-2 flex ">
                    <div class="">
                        <h1 class="font-serif  md:text-2xl">
                        <span class="text-white font-extrabold " :class="{'addnewcolor':showDrop}">
                        <router-link to="/" class="font-extrabold">Onidomain </router-link>
                        </span>
                        </h1>
                    </div>
                   <div class=" w-2/4 middlecon  z-50">
                        <ul class="flex justify-between w-full ">
                            <li class=" m-2 font-extrabold font-white  text-white">
                                <router-link to="/sell-your-domain" class="font-extrabold"> Buy Your Doamin</router-link>
                            </li>
                            <li class=" m-2 font-extrabold font-white text-white">
                                <router-link to="/about" class="font-extrabold"> About us </router-link>
                                <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                           </li>
                            <li class=" m-2 font-extrabold font-white  text-white">
                                <router-link to="/users/signup" class="font-extrabold" v-if="user==null">Register</router-link>
                                <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                            </li>
                        
                        </ul>
                    </div>
                    <div class="border-white middlecon rounded border-2  p-2 px-3 font-extrabold text-white" v-if="user==null">
                    
                      <router-link to="/users/login" class="font-extrabold text-right">Login</router-link>
                     
                    </div>
                     <div class="border-white middlecon rounded border-2  p-2 px-3 font-extrabold text-white" v-if="user!=null">
                    
                      <router-link to="/account/dashboard" class="font-extrabold text-right">Dashboard</router-link>
                     
                    </div>

                <div class="hidemenu">
                    <span class=" font-bold">
                        <i class="fa fa-bars" @click="showDashboard" v-show="!showDrop" :class="{'addnewcolor':showDrop}"></i>
                        <i class="fa fa-times " @click="hideDashboard" v-show="showDrop" :class="{'addnewcolor':showDrop}"></i>
                    </span>
                </div>
            </div>  
            </div>
    </div>
    </div>
    <div  v-if="this.$route.path!='/' ">
    <div class="bg-[#fff] p-4 min-h-min" :class="{'addColor':showDrop}">
        <div class="justify-center w-full  flex p-2 relative nav-head">
            <div class="border-white-100  justify-between w-full p-2 flex ">
                    <div class="">
                        <h1 class="font-serif  md:text-2xl">
                        <span class="text-primary font-extrabold " :class="{'addnewcolor':showDrop}">
                        <router-link to="/" class="font-extrabold">Onidomain</router-link>
                        </span>
                        </h1>
                    </div>
                   <div class=" w-2/4 middlecon  z-50">
                        <ul class="flex justify-between w-full ">
                            <li class=" m-2 font-extrabold font-white  text-primary">
                                <router-link to="/buy-your-domain" class="font-extrabold"> Buy Your Doamin</router-link>
                            </li>
                            <li class=" m-2 font-extrabold font-white text-primary">
                                <router-link to="/about-us" class="font-extrabold"> About us </router-link>
                                <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                           </li>
                            <li class=" m-2 font-extrabold font-white  text-primary">
                                <router-link to="/users/signup" class="font-extrabold" v-if="user==null">Register</router-link>
                                <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                            </li>
                        
                        </ul>
                    </div>
                    <div class="border-primary middlecon rounded border-2  p-2 px-3 font-extrabold text-primary" >
                      <router-link to="/users/login" class="font-extrabold text-right" v-if="user==null">Login</router-link>
                    <router-link to="/account/dashboard" class="font-extrabold text-right" v-if="user!=null">Dashboard</router-link>

                     
                    </div>

                <div class="hidemenu">
                    <span class=" font-bold">
                        <i class="fa fa-bars " @click="showDashboard" v-show="!showDrop" :class="{'addnewcolor':showDrop}"></i>
                        <i class="fa fa-times " @click="hideDashboard" v-show="showDrop" :class="{'addnewcolor':showDrop}"></i>
                    </span>
                </div>
            </div>  
            </div>
    </div>
    </div>
    <div class="absolute bg-gray w-full top-20 box-border shadow ml-0 mr-0 min-h-full show" v-show="showDrop">
                <div class="p-2 ">
                    <ul>
                        <router-link to="/buy-your-domain">
                        <li class="font-extrabold text-primary py-8 px-2 border-b-2 text-xl">
                            Buy Your Domain
                        </li>
                        </router-link>
                        <router-link to="/About us">
                         <li class="font-extrabold text-primary py-8 px-2 border-b-2 text-xl">
                            About us
                        </li>
                        </router-link>
                       <li class="font-extrabold text-primary py-8 px-2 border-b-2 text-xl">
                           company
                            <span class="fa fa-caret-down"></span>
                        </li>
                        <router-link to="/users/login" v-if="user==null">
                        <li class="font-extrabold text-primary py-8 px-2 border-b-2 text-xl" >
                        Login
                        </li>
                        
                        </router-link>
                         <router-link to="/account/dashboard" v-if="user!=null">
                        <li class="font-extrabold text-primary py-8 px-2 border-b-2 text-xl" >
                      Dashboard
                        </li>
                        
                        </router-link>
                        
                    </ul>
                </div>
            </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            showDrop : false,
            user:null
        }
    },
   
    methods: {
        showDashboard(){
            this.showDrop = !this.showDrop;
        },
        hideDashboard(){
            this.showDrop = !this.showDrop;
        }
    },
    created(){
        this.user = localStorage.getItem('token');
    }
}
</script>
<style>

.fa{
    font-size: 25px;
    color:white !important
}
li{
    
    text-transform: capitalize;
}
.hidemenu{
    display: none;
}
.show{
  overflow: hidden;
  z-index: 90000000;
  background: #fff;
  position:relative;
}
@media screen and (max-width:800px) {
    .middlecon{
        display: none;
    
    }
    .hidemenu{
    display: block;
    }
}
.addColor{
    background:white !important;
    color:black !important
}
.addnewcolor{
    color:#00112C !important;
    font-size: 20px;
}
.addbackground{

background: white !important;
}
.fa-bars{
 color:#00112C !important;
}
</style>