<template>
<div>
<Header/>

    <div class="w-full mb-10">
            <div class="flex justify-center w-full mt-2">
                 <div class="search-con w-full flex justify-between">
                <form action="" @submit.prevent="handlesearch" class="w-full flex justify-between">
                    <input type="text" class="w-5/6 p-3 font-bold outline-none" placeholder="Your dream domain goes here"  v-model="search"><button type="submit" class="p-3 bg-[#1AAFD0] rounded text-[#fff] md:w-32">Search </button>
                </form>
           
                </div>
            </div>

            <div class="flex justify-center w-full mt-20">
                <div class="category-con w-full flex justify-center">
                    <div class="search-main-con  w-full flex justify-between ">
                        <div class="w-2/6 bg-[#fff] p-2 left-con">
                            <div class="p-2  flex justify-between border-b mb-2">
                                <div class="text text-[#000] font-bold font-sans">Categories  </div><div><span class="fa fa-angle-down font-bold"></span><span class="fa fa-angle-up hidden"></span></div>
                            </div>
                            <div class="p-2 border mb-5">
                            
                            </div>

                             <div class="p-2  flex justify-between border-b mb-2">
                                <div class="text text-[#000] font-bold font-sans">Extentions</div><div><span class="fa fa-angle-down font-bold"></span><span class="fa fa-angle-up hidden"></span></div>
                            </div>
                            <div class="p-2  flex">
                                <div class="border-primary w-6 h-6 rounded border-2 mr-2">
                                        <input type="checkbox" class="opacity-0">
                                </div>
                                <span class="font-bold">.com</span>
                            </div>
                            <div class="p-2  flex">
                                <div class="border-primary w-6 h-6 rounded border-2 mr-2">
                                        <input type="checkbox" class="opacity-0"> 
                                </div>
                                <span class="font-bold">.net</span>
                            </div>
                            <div class="p-2  flex">
                                <div class="border-primary w-6 h-6 rounded border-2 mr-2">
                                        <input type="checkbox" class="opacity-0"> 
                                </div>
                                <span class="font-bold">.org</span>
                            </div>



                            <div class="p-2 flex justify-between">
                                <input type="text" class="border-[#ddd] p-2 border font-bold  pl-5 pr-5" placeholder="add extensions"><button class="border border-[#ddd] w-9 h-9">
                                    <span class="fa fa-add"></span>
                                </button>
                            </div>
                        </div>
                        <div class=" p-4 md:w-4/6">
                            <div class="p-2">
                                <div class="p-2  border-b flex justify-between  mb-3">
                                        <div class="md:text-xl resultcon" v-if="length>0">{{length}} results</div>
                                        <div class="flex optioncon">
                                        <span class="mt-2 mr-2 inline-block">Sort By</span>&nbsp;
                                        <select class="border p-2 rounded" @click="getvalue" v-model="getoption">
                                        <option value="Relevance High - Low" class="p-2 m-2">Relevance High - Low</option>
                                        <option value="Length Short - Long" class="p-2 m-2">Length Short - Long</option>
                                        <option value="Price low - High" class="p-2 m-2">Price low - High</option>
                                        <option value="Views high - low" class="p-2 n-2">Views high - low</option>
                                        
                                        
                                        </select>
                                    </div>
                                </div>
                                <div class="p-2  border-b flex justify-start  mb-3 filtercon" v-if="length>0">
                                        <div class="mr-2 m-3">Choosen filters</div><button class="bg-[#E8F7FB] m-2 p-1 font-semibold">contains:{{this.$route.params.search}}</button><button class="bg-[#E8F7FB] m-2 p1 font-semibold">Length:</button>
                                        <div class="flex">
                                       
                                        </div>
                                </div>
                                 <div class="p-2  flex text-center justify-start  mb-3 " v-if="length<=0">
                                       
                                        <div class="  font-bold text-center">
                                            No search yet
                                        </div>
                                </div>
                                <div class="p-2  border-b flex justify-between mb-3" v-for="item in searchdata" :key="item.id">
                                        
                                       <div class="text-[#1AAFD0] font-bold mt-2 cursor-pointer" @click="getproduct(item.name,item.id,item.price)">{{item.name}}</div>
                                       
                                       <div class="text-[#1AAFD0] font-bold mt-2" v-if="length<0">{{term}}</div>
                                       <div class="md:flex md:justify-end">
                                            <span class="text-[#1AAFD0] font-bold mr-2 mt-2">${{item.price}}</span>
                                            <button class=" border-primary text-primary border-2 text-center p-2 outline-none rounded mr-2 btns" @click=" getproduct(item.name,item.id,item.price)">Buy</button>
                                            
                                       
                                       </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                  
                
            
                </div>
            </div>
            
    </div>
</div>
    
</template>
<script>
import Header from '../components/header.vue'
import Search from '../components/search.vue'
import axios from 'axios'



export default {
    name:'search-app',
    components:{
        Header,
        Search,
    },
   
    data(){
        return{
            search:this.$route.params.search,
           
            length:null,
            lengthverify:'',
            getoption:'Relevance High - Low',
            term:this.$route.params.search,
            searchdata:[],
        }
    },
    methods:{
        searchword(){

        },
        async handlesearch(){
            const data= {
                search:this.search,
            }
            const response = await axios.get('https://sordam.150psi.com/api/getproduct?'+data);
            if(response.data.data.data.length!=0){
                this.length =response.data.data.data.length
                this.searchdata =response.data.data.data

            }else{
                this.lengthverify = 'NO MATCH FOUND'
            }
            console.log(response)
        },
       async getproduct(name,id,price){
           this.$router.push('/product_details/'+name+'/'+id+'/'+price)
            //alert(item.price,id,price);
        }
    },
   
  
}
</script>
<style scoped>
.search-con{
    max-width:1200px;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;
    width:100%;

}
.category-con{

    background: #fff;
    
    padding: 10px;
   
    width:100%;

}
.left-con{

 box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;
 }
 .search-main-con{
    max-width: 1200px;
  
 
 }
 .fa-angle-down{
    color:#000 I !important
 }
 @media screen and (max-width:800px){
     .left-con{
        display: none;
     }
     .optioncon,.resultcon{
        font-size: 14px;
     }
     .resultcon{
        margin-top:6px
     }
 }
 .btns{
    min-width:150px;
    max-width:150px
 }
 @media screen and (max-width:500px)
 {
     .btns{
        min-width:100px;
        max-width: 100px;
       
        justify-content:flex-end;
        text-align:center
     }
 }
 .search-con{
    max-width:1200px;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;
    width:100%;

}
</style>