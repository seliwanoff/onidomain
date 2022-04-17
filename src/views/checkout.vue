<template>
<div>
<Header  />
<div class="w-full    p-2 mb-10" v-if="user!=null">
    <div class="mt-20 p-2  md:flex justify-center">
        <div class="itemdetails md:flex justify-between">
           <div class="bg-[#fff] rounded p-3 md:w-2/5 verify-con">
         
            <div>
                <h2 class="font-bold text-[#000] text-2xl text-center">Please double check your details below</h2>
                <p class="text-left">If everything looks good, please proceed to the next step to submit the payment.</p>
            </div>
            <div class="mt-4">
            <h2 class="w-full font-bold ">Full name</h2>
            <span>{{this.f_name}} {{this.l_name}}</span>
            </div>
            <div class="mt-4">
            <h2 class="w-full font-bold ">email</h2>
            <span>{{this.email}}</span>
            </div>
            <div class="mt-4">
            <h2 class="w-full font-bold ">Username</h2>
            <span>{{this.display_name}}</span>
            </div>

           </div>
           <div class=" rounded p-3 md:w-2/5 border border-[#000]">
           <h2 class="font-bold font-sans text-2xl text-[#000]">Order Summary</h2>

           <div class="flex justify-between mt-2">
           <span>{{this.p_name}}</span>
           <h2 class="text-[#1AAFD0] font-bold text-xl">${{p_price}}</h2>
           </div>
           <div class="flex justify-between mt-2  ">
           <span>Ownership transfer</span>
           <h2 class="text-[#1AAFD0] font-bold">Free</h2>
           </div>
           <div class="flex justify-between mt-2  ">
           <span>Transaction Support</span>
           <h2 class="text-[#1AAFD0] font-bold ">Free</h2>
           </div>
           <div class="flex justify-between mt-4 border-t border-b border-primary  p-2">
           <span>Total</span>
            <h2 class="text-[#1AAFD0] font-bold text-xl">${{p_price}}</h2>
           </div>
           <div class="flex justify-between mt-2  ">
            <div ref="paypal" class="w-full"></div>
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


import axios from 'axios'

 
export default {
    name:'Checkout-app',
    components:{
        Header
    },
    
     mounted: function() {
    const script = document.createElement("script");
    script.src =
      'https://www.paypal.com/sdk/js?client-id=Ab1_du70Bnw8jEGw1UZEUe3DFMWtmP1PXucj1-C6tKQISiMrauGka2sUVhWMUtrwfox4kGnHIeJdIr7e';
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    },
   
    data(){
        return{
            loaded: false,
             paidFor: false,
            f_name:'',
            l_name:'',
            display_name:'',
            email:'',
            p_name:'',
            p_price:null,
            user:null
          

        }
    },
    methods:{
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.productname,
                  amount: {
                    currency_code: "USD",
                    value: this. productprice
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
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
        }
        catch(e){
          
        }

        try{
              const response = await axios.get('https://sordam.150psi.com/api/getsingleproduct?id='+this.$route.params.id);
              this.p_name = response.data.data[0].name;
              this.p_price = response.data.data[0].price
              
        }
        catch(e){
            console.log(e);
        }
      
    },
    async created(){
     
       this.user = localStorage.getItem('token');

      if(this.user==null){
        this.$router.push('/users/login');
       
        }
           
    }
   
}
</script>
<style scoped>
.verify-con{


 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


}
.itemdetails{
    max-width: 1200px;
    width:100%;
    padding: 10px;
  
    margin:0px auto;
    

}
@media screen  and (max-width: 500px){
  .verify-con{
  margin-bottom: 20px;
  }
  .verify-con div h2{
  font-size: 20px;
  margin-bottom: 10px;
  }
}

</style>