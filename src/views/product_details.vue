<template>
<div v-if="user!=null">
<Header/>
<div class="w-full bg-primary   p-2 mb-10">
    <div class="mt-20 p-2  flex justify-center">
        <div class="itemdetails ">
            <div class="md:w-2/6 p-2">
                <h2 class="text-4xl text-[#fff] font-semibold mb-2">The domain name</h2>
                <h1 class="text-5xl text-[#fff] font-extrabold mb-2">{{this.$route.params.name}}</h1>
                <h3 class="text-3xl text-[#fff] mb-2">is for sale!</h3>
            </div>
            <div class="bg-[#fff] rounded md:w-2/6 p-4 md:absolute right-0 top-10">
                    <h2 class="text-[#000] font-extrabold text-2xl font-sans">Get this domain</h2>
                    <p class="text-left">Pay the full USD 
                    {{this.$route.params.price}}
                   now.</p>

                   <div class="w-full flex justify-between mb-3 mt-3">
                    <div class="  containers m-1">
                    <input type="radio" > 
                     <span class="checkmark"></span>
                    </div>
                      <span class="text-[#37C597] inline-block text-base">{{productname}}</span>

                        <span class="text-2xl font-bold text-[#37C597]">${{this.$route.params.price}}</span>
                   </div>
                   <div class="w-full flex justify-between mt-10     ">
                   <button class="bg-[#37C597] w-full rounded outline-none p-4 text-[#fff] text-xl " @click="gocheckout"> Next <i class="fa fa-arrow-right"></i></button>
                   </div>
            </div>
        </div>
    </div>
</div>
   
 </div>   
</template>
<script>
//import axios from 'axios'
import Header from '../components/header.vue'


//import axios from 'axios'



export default {
    name:'verify-app',
    components:{
        Header
    },
    data(){
        return{
            productname : this.$route.params.name,
            productprice: this.$route.params.price,
            productid :this.$route.params.id,
            user:null
        }
    },
    methods: {
        gocheckout(){

            this.$router.push('/checkout/'+this.productname+'/'+ this.productprice+'/'+this.productid)
        }
    },
    created(){
      this.user = localStorage.getItem('token');
      if(this.user==null){
        this.$router.push('/users/login');
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
.itemdetails{
    max-width: 1100px;
    width:100%;
    padding: 10px;
   
    margin:0px auto;
    

}

.containers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.containers input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border:2px solid #00112C;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.containers:hover input ~ .checkmark {
  background-color: #37C597;
}

/* When the radio button is checked, add a blue background */
.containers input:checked ~ .checkmark {
  background-color: #00112C;
}

/* Create the indicator (the dot/circle - hidden when not checked) */


/* Style the indicator (dot/circle) */
.containers .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

</style>