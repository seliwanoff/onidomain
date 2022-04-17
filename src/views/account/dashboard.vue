<template>
    <div class="flex w-full">
    <div class="contains justify-between flex"  v-if="user!=null">
        <Sidebar></Sidebar>
         <div class=" md:w-5/6  bg-[#fff] md:absolute right-0 big-container">
            <div class="p-5 m-2 flex justify-between ">
                <div>
                    <h2 class="text-2xl text-primary font-bold">Dashboard</h2>
                </div>
                <div>
                <div class="border border-[#E8F7FB]  font-bold text-2xl p-2 text-[#1AAFD0] relative  bg-[#E8F7FB] rounded-xl">
                    DS
                    <div class="absolute p-1.5 font-bold  top-9 right-0 bg-[green] rounded-full "></div>
                </div>
                
                </div>
            </div>
            <div class="border-t md:flex justify-between border-primary w-full">
                <div class="md:w-2/5 text-primary p-5  mt-2">
                    <h2 class="font-bold text-primary text-3xl p-2 mt-4 font-sans"> 
                        Welcome to your dashboard, {{f_name}} {{l_name}}
                    </h2>
                </div>
                <div class="md:w-2/5 text-primary  mt-2">
                    <div class="p-2 mt-4 flex justify-end">
                    <form  class="w-full mt-5 -mr-6" @submit.prevent="submitsearch">
                        <input type="text " v-model="search" class="w-5/6 border-[#ccc] border p-2 font-sans outline-none" placeholder="Enter a domain name"><button type="submit" class="p-2 border border-[#ccc]"><i class="fa fa-search "></i></button>
                    </form>
                    </div>
                </div>
                <div>
               
            </div>
          
            </div>
           <div class="justify-between md:flex  containers">
                <div class="box-container md:w-2/6">
                    <div class="ml-3 mr-3">Purchased Domain
                    <br>
                    <div class="text-primary font-bold text-4xl" v-if="orderstatus=='completed'">{{order}}</div>
                                        <div class="text-primary font-bold text-4xl" v-else>0</div>

                    </div>

                    <div class="p-2 bg-[#3BF7D1] rounded">
                     <i class="fa fa-shopping-cart"></i> 
                    </div>
                </div>
                <div class="box-container md:w-2/6">
                     <div class="ml-3 mr-3">Pending Domain
                    <br>
                    <div class="text-primary font-bold text-4xl" v-if="orderstatus=='pending'">{{order}}</div>
                    <div class="text-primary font-bold text-4xl" v-else>0</div>

                    </div>

                    <div class="p-2 bg-[#3BF7D1] rounded">
                        <i class="fa fa-clock-o"></i> 
                    </div>
                </div>
                <div class="box-container md:w-2/6">
                     <div class="ml-3 mr-3">Transferred Order
                    <br>
                    <div class="text-primary font-bold text-4xl" v-if="orderstatus=='transferred'">{{order}}</div>
                    <div class="text-primary font-bold text-4xl" v-else>0</div>
                    </div>

                    <div class="p-2 bg-[#3BF7D1] rounded">
                        <i class="fa fa-exchange"></i>
                    </div>
                </div>
               
           </div>
           <div class=" containers">
            <div class="justify-center flex w-full" v-if="loader">
                 <BounceLoader></BounceLoader>
            </div>
           


                <div class="border-b border-primary" v-for="item in product" :key="item.id">
                        <div class="w-full flex justify-between p-2 m-2">
                            <div class="flex justify-around">
                                <span class="text-primary font-bold">{{item.name}}</span>
                              
                            </div>
                            <div class="mr-8">
                            <button class="p-2 border-2 border-primary rounded hover:bg-primary hover:text-[#fff]" @click="getproduct(item.name,item.id,item.price)">
                                Explore
                            </button>
                            </div>
                        </div>
                </div>
               
           </div>
        </div>
    </div>
       
    </div>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
import axios from "axios";
import Sidebar from "../../components/sidebar.vue";
export default {
    name: 'Dashboard-app',
    components:{
    PulseLoader,
    RingLoader,
    BounceLoader,
    Sidebar
},
    data() {
        return {
            isActive:true,
            f_name:'',
            l_name:'',
            search:'',
            product:[],
            order:[],
            orderstatus:'',
            hideme:false,
            loader:true,
            user:null

        }
    },
    methods:{
       async submitsearch(){
           alert()
           if(this.search!= ''){
               this.$router.push('/search/'+this.search);
           }
        },
         async getproduct(name,id,price){
           this.$router.push('/product_details/'+name+'/'+id+'/'+price)
            //alert(item.price,id,price);
        },
        hidedrop(){
            
            this.hideme=!this.hideme
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
            
        }
        catch(e){
          console.log(e)
        }
        
        

       
      
    },
    async created(){
        
        try{
            const response = await axios.get('https://sordam.150psi.com/api/getproduct')
           // console.log(response)
            this.product = response.data.data.data
            this.loader=!this.loader
        }
        catch(e){

        }
         this.user = localStorage.getItem('token');
           
          try{
             const response = await axios.get('https://sordam.150psi.com/api/getorder', {
                headers: {
                    Authorization:'Bearer ' + this.user 

                }
            });
         this.orderstatus= response.data.data.data[0].status;
        

         console.log(this.order)
         if(this.orderstatus=='pending'){
             this.order= response.data.data.data.length;
         }else if(this.orderstatus=='completed'){
            this.order= response.data.data.data.length;

         }
              
        }
        catch(e){
          
        }
         if(this.user==null){
            this.$router.push('/users/login');
        }
    },
   
    
}
</script>
<style>
.contains{
    max-width: 1519.20px;
    position: relative;
    max-width: 0px auto;
    width: 100%;

}
.side-bar{
height: 100vh;
}
.isactive{
    color:#3BF7D1 !important;
   background:#E8F7FB;
    font-weight:bolder;
}
.fa-search{
color:#00112C !important;
}
.box-container{
box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);
padding: 15px ;
margin: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;

}
.containers{
    margin:20px;
    padding: 20px;
    
}
.fa-clock-o{
font-size: 24;

}
</style>