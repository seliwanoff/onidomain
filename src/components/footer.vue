<template>
     <footer class="bg-[#00112C] ">
        <div class="p-2 bottom-0 border-white ">
                <div class="search-con-log mt-20">

                <div class="list1">
                <ul class="float-left">
                <li class="font-bold text-white  font-sans md:text-2xl underline">Services</li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Buy a domain</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Sell your domain</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">API Patnership program</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Brokeage</router-link></li>



               
                </ul>
                </div>
                 <div class="list2">
                <ul class="float-left">
                <li class="font-bold text-white md:text-2xl font-sans underline">Learn</li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">News</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Trust ans Security</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Help Center</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Transaction Explorer</router-link></li>



               
                </ul>
                </div>
                 <div class="list3">
                <ul class="float-left">
                <li class="font-bold text-white md:text-2xl font-sans underline">Company</li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Career - We're hiring</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Our Story</router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans">Contact Us</router-link></li>



               
                </ul>
                </div>
                 <div class="list4">
                <ul class="flex float-left" >
                <li class="font-bold text-white md:text-2xl font-sans underline">Follow Us</li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans"><i class="fa fa-twitter"></i></router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans"><i class="fa fa-twitter"></i></router-link></li>
                <li class="hover:text-[#1AAFD0] text-white hover:underline mt-2 font-sans font-bold"> <router-link to="" class="font-bold font-sans"><i class="fa fa-twitter"></i></router-link></li>



               
                </ul>
                </div>
                
                </div>
        </div>
    </footer>
</template>

<style>
.search-con-log{
            max-width: 1100px;
            margin:0px auto;
            justify-content: center;
            display: flex;
           justify-content: space-around;
            padding: 20px;
        }
         @media screen and (max-width:700px){
            .search-con-log{
                display: inline-block;
               
            }
            .list1,.list2,.list3,.list4{
             position:relative;
             width:28.333%;
             margin:10px;
            float:left;
          
                
            }
    }
    @media screen and (max-width:600px){
            .search-con-log{
                display: inline-block;
               
            }
            .list1,.list2,.list3,.list4{
             position:relative;
             width:45%;
             margin:10px;
            float:left;
                
            }
    }
     @media screen and (max-width:412px){
            
            .list1,.list2,.list3,.list4{
             position:relative;
             width:41%;
             margin:10px;
            float:left;
                
            }
    }
     @media screen and (max-width:240px){
            
            .list1,.list2,.list3,.list4{
             position:relative;
             width:90%;
             margin:10px;
            float:left;
                
            }
    }

</style>