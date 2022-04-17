<template lang="">
     <div class="md:w-1/6 p-2 bg-primary  left-0 min-h-full md:fixed side-bar" @show="hideme">
            <div class="p-2  border w-full">
                <h2 class=" flex justify-around p-2">
                    <router-link to="/" class="text-[#fff] font-sans font-bold text-2xl">Onidomain</router-link>
                    <span class="fa fa-times" @click="hidedrop"></span>
                </h2>
            </div>
            <div class="p-2 mt-3">
                <ul class="grid list-none">
                    <li class="flex p-4 rounded justify-around border border-[#fff]  text-center mb-3" :class="{'isactive':isActive}">
                        <router-link to="/account/dashboard" class="text-base text-[#fff]" :class="{'isactive':isActive}">Dashboard</router-link>
                    </li>
                    <li class="flex p-4  rounded justify-around border border-[#fff]  text-center mb-3">
                        <router-link to="/order" class="text-base text-[#fff] text-center">Order</router-link>
                    </li>
                    <li class="flex p-4 rounded justify-around border border-[#fff] mb-3">
                        <router-link to="/account/profile" class="text-base text-[#fff] bg-">Account Profile</router-link>
                    </li>
                    <li class="flex p-4  rounded justify-around border border-[#fff] mb-3">
                        <router-link to="/account/settings" class="text-base text-[#fff] bg-">Accont settings</router-link>
                    </li>
                    <li class="flex p-4  rounded justify-around border border-[#fff] mb-3" @click="logout">
                        <a href="javascript:void(0)" class="text-base text-[#fff] bg-"> Log out</a>
                    </li>
                   
                </ul>
            </div>
        
        </div>
</template>
<style>
.side-bar{
height: 100vh;
}
.sidecolor{
    background: yellow;
}
.isactive{
    color:#3BF7D1 !important;
   background:#E8F7FB;
    font-weight:bolder;
}
</style>
<script>
export default {
    name:'side-bar',
    data(){
            return{
                user:''
            }
    },
   
    methods: {
       logout(){
          localStorage.removeItem('token')
          this.user=null
           this.$router.push('/')
       } 
    },
}
</script>