<template lang="">
    <div class="search-con w-full flex justify-between">
                <form action="" @submit.prevent="handlesearch" class="w-full flex justify-between">
                    <input type="text" class="w-5/6 p-3 font-bold outline-none" placeholder="Your dream domain goes here"  v-model="search"><button type="submit" class="p-3 bg-[#1AAFD0] rounded text-[#fff] md:w-32">Search </button>
                </form>
            
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Searchthis-app',
    data(){
        return{
            search:'',
            term:'',
            length:null,
            lengthverify,
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
            }else{
                this.lengthverify = 'NO MATCH FOUND'
            }
            console.log(response)
        }
    }
}
</script>
<style>
.search-con{
    max-width:1200px;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0.125rem 0.25rem rgb(0 0 0 / 8%), 0px 0.25rem 1.5rem rgb(0 0 0 / 8%);;
    width:100%;

}
</style>