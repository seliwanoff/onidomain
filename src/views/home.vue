<template>
    <div>
    <Header/>
    <section class="bg-white">
        <div class="bg-primary queeypost">
            
            <div class="md:absolute md:left-0 bottom-0  -mt-1">
                <img src="../assets/images/left.svg">
            </div>
            <div class="md:absolute md:right-0  bottom-0 -mt-1">
            <img src="../assets/images/right.svg" >
            </div>
           
            <div class="p-2 relative pt-4  flex justify-center contanierxl">
                <div class=" mt-10 md:w-3/5 pl-14 pr-14 contanierlg">
                        <h2 class="mt-10 font-bold text-6xl text-white text-center m-6 p-6">Claim your space in the digital world</h2>
                         <div class="mt-4 mr-3 ml-3 pl-12 pr-12">

                            <div class="mt-10 mb-10 bg-white rounded p-2 ">
                                <form  class="flex justify-between" @submit="handleSearch">
                            <input type="text" class="p-4 w-5/6 outline-none" placeholder="Your killer domain goes here" v-model="search"><button type="submit" class="-ml-2 bg-[#38E8B0] p-4 rounded w-0.5/6"> <i class="fa fa-search"></i></button>
                            </form>
                            </div>
                        
                             <div class="w-full mt-36 ">
                                <img src="../assets/images/floor.svg" alt="" class="w-full absolute -bottom-1">
                                <div class="bg-white absolute p-2 w-full"></div>
                            </div>
                            
                        </div>
                       
                </div>
               
            </div>
             
            
        </div>
    </section>
    <section>
    <div class="bg-white w-full p-2 ">
        <div class=" justify-between md:flex mt-24 mb-20 conxt">
            <div class=" m-4 p-2">
                <div>
                    <div class="min-w-min img-con">
                     <img src="../assets/images/fire.svg" alt="" class="scnd-img">
                    </div>
                    <h2 class="popular">Popular domain names</h2>
                   <p>Take a look at the most popular domain names. And buy them immediately. Or make a good offer.</p>
                   <button class="btn">
                   <router-link to="" class="font-bold hover:underline">See What's hot <i class="fa fa-arrow-right arrowcheck"></i></router-link>
                   </button>
                </div>
            </div>
            <div class=" p-2 m-4">
            <div>
                    <div class="min-w-min img-con">
                     <img src="../assets/images/card.svg" alt="" class="scnd-img">
                    </div>
                    <h2 class="popular">3-letter domain names</h2>
                   <p>3-letter domain names are short, sweet, and super easy to remember. Check ‘em all out here.</p>
                   <button class="btn">
                   <router-link to="" class="font-bold hover:underline">Check 3 letters Domain<i class="fa fa-arrow-right arrowcheck"></i></router-link>
                   </button>
                </div></div>
            <div class=" p-2 m-4">
            <div>
                    <div class="min-w-min img-con">
                     <img src="../assets/images/shirt.svg" alt="" class="scnd-img">
                    </div>
                    <h2 class="popular">Premium domain names</h2>
                   <p>Premium domain names are usually short, easy to brand, and use a popular extension like .com.</p>
                   <button class="btn">
                   <router-link to="" class="font-bold hover:underline">Browse Premium Domains <i class="fa fa-arrow-right arrowcheck"></i></router-link>
                   </button>
                </div></div>
        
        </div>
    </div>
    
    </section>
    <section class="bg-[#F2F3F4]">
        <div class="p-2 containercg ">
            <div class="containgg flex justify-center m-5">
                    <div class="lg:flex justify-between m-8 w-full containccc">
                        <div class="md:w-1/2">
                            <h1 class="buy">Buy  domains</h1>
                            <p class="text-primary font-sans  text-left md:text-2xl contentss">Onidomainis a marketplace for domain names. We make sure buying, selling and transferring domains goes smoothly and hassle-free.</p>
                            <div class="mt-2 ">
                                <div class="flex">
                                    <span class="fa fa-exchange mr-3"></span> <h2 class="font-bold md:text-2xl text-primary ">Transparency first</h2>
                                </div>
                                <p class="pl-2 text-left">No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.</p>
                            </div>
                            <div class="mt-2 ">
                                <div class="flex">
                                    <i class="fa fa-exchange mr-3"></i> <h2 class="font-bold md:text-2xl text-primary   ">Effortless trading</h2>
                                </div>
                                <p class="pl-2 text-left">By using state of the art technology, domain name trading is super simple thanks to our easy-to-use platform.</p>
                            </div>
                            <div class="mt-2 ">
                                <div class="flex">
                                    <i class="fa fa-exchange mr-3"></i> <h2 class="font-bold md:text-2xl text-primary   ">Secure transactions</h2>
                                </div>
                                <p class="pl-2 text-left">Security is important to us. Our fraud prevention team monitors all transactions & keeps you safe.</p>
                            </div>
                            <div class="mt-2">
                                <button class="get_to hover:bg-primary hover:text-white"><router-link to="" class="font-bold ">Get to know us <i class="fa fa-arrow-right"></i></router-link></button>
                            </div>
                        </div>
                        <div class="buyer_domain">
                        <img src="../assets/images/buyer-domain.svg" alt="" class="scnd-img">
                        </div>
                    
                    </div>
            
            </div>
        
        </div>
    </section>
    <section class="bg-[#FFF]">
        <div class="p-2 containercg ">
            <div class="containgg flex justify-center m-5">
                    <div class="lg:flex justify-between m-8 w-full containccc">
                        <div>
                        <img src="../assets/images/woman.svg" alt="" class="scnd-img float-left">
                        </div>
                        <div class="md:w-1/2">
                            <h1 class="buy">Here for domain investors too</h1>
                            <p class="text-primary font-sans  text-left md:text-xl contentss">Here for domain investors too
                            As a domain investor, you have particular needs. We get it! So we built a special platform just for domain investors. With its clear interface, bulk domain name uploading and editing features, selling is easier than ever.</p>
                           
                            <div class="mt-2">
                                <button class="get_to hover:bg-primary hover:text-white"><router-link to="" class="font-bold ">Discover Our platform <i class="fa fa-arrow-right"></i></router-link></button>
                            </div>
                        </div>
                    
                    </div>
            
            </div>
        
        </div>
    </section>
    <section class="bg-[#04294F]">
        <div class="p-2  ">
                <div class="search-con-log">
                <div class="mt-10 ">
                      <h1 class="buy text-white">Build your online business</h1>
                      <p class="text-white">Lay a solid foundation for your business with a killer domain name.</p>

                      <div class="mt-10 mb-10 bg-white rounded p-2 ">
                      <form action="" class="flex justify-between">
                            <input type="text" class="p-4 w-5/6 outline-none" placeholder="Your killer domain goes here"><button class="-ml-2 bg-[#38E8B0] p-4 rounded w-0.5/6"> <i class="fa fa-search"></i></button>
                        </form>
                      </div>
                </div>
                
                </div>
        </div>
    </section>
    


    </div>
    
</template>

<script>
import Header from '../components/header.vue'
export default {
    name:'Header-app',
    components:{
        Header
    },
    data(){
        return{
            search:'',
        }
    },
    methods: {
        async handleSearch(){
           if(this.search!= ''){
               this.$router.push('/search/'+this.search);
           }
        }
    },
}

</script>
<style>
    @media screen and (max-width:500px){
    
    }
    .img-con{
        min-width: 80px;
        min-height: 80px;
        height: 60px;
    }
    .scnd-img{
        width:100%;
        height: 100%;
    }
    .popular{
    font-size: 32px;
    color:#00112C;
    font-weight:bold;
    text-align: center;
    margin:15px;
    padding:10px
    }
    p{
    text-align: center;
    font-size:17px;
    }
    .conxt{
        max-width:1100px;
        margin:0px auto
    }
    .btn{
        padding: 10px;
        margin:10px;
       width:100%;
       text-align: center;
       color:#1AAFD0;
       font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin:10px auto;
        border-radius: 10px;
        font-weight: 900;
        outline: 2px solid #1AAFD0 !important;
    }
    .containgg{
      
        
        padding: 10px;
        margin:0px auto

    }
    @media screen and (max-width:500px) {
        .popular{
            font-size: 25px;
        }
    }
    .containccc{
        max-width: 1100px;
       
    }
    .buy{
        font-weight: 700;
        font-size: 50px;
        color:#00112C;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    .buy p{
        font-weight: 600;
    }
    .fa{
        color:#00112C;
        font-size: 20px;
        margin-top: 3px;
        display: inline;
    }
    .get_to{
        padding: 30px;
        border:2px solid #00112C;
        border-radius: 20px;
        text-align: center;
        outline: none ;
    }
    @media screen and (max-width:800px) {
        .buy{
            font-size:24px
        }
        .containercg {
            width:100%;
          
            padding:0px
        }
        .containgg{
            margin:0px;
           
            width:100%;
            padding:0px;
            box-sizing: border-box;
        }
        .containccc{
            margin:0px
        }
        .contentss{
            font-size: 15px;
        }
        .get_to{
            padding: 15px;
        }
        .buyer_domain{
        
        margin-top: 60px;
        }
       
    }
    @media screen and (max-width:500px) {
        .buy{
            font-size:24px
        }
        .containercg {
            width:100%;
          
            padding:0px
        }
        .containgg{
            margin:0px;
           
            width:100%;
            padding:0px;
            box-sizing: border-box;
        }
        .containccc{
            margin:0px
        }
        .contentss{
            font-size: 15px;
        }
        .get_to{
            padding: 15px;
        }
        .buyer_domain{
        
        margin-top: 60px;
        }
       
    }
     .arrowcheck{
            color:#1AAFD0;
            font-weight: 100;
            margin-left: 5px;
        }
        
</style>