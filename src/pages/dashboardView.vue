<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div v-if="!isLoading && usersList.length > 0">
     <tableComponent :usersData="usersList"></tableComponent>
    </div>
  
  </div>
</template>

<script>

import tableComponent from '../components/tableComponent.vue'
import axios from 'axios';
import { SET_USERS_LIST } from "@/store/mutation-types";
import {mapMutations} from 'vuex'
export default {
  name: 'dashboardView',
  props: {
    msg: String
  },
   components: {
    tableComponent
  },
  data(){
   return{
    usersList:[],
    isLoading:false
   }
  },
  created(){
    this.getUsersList();
  },
  methods:{
    ...mapMutations('userstore',[SET_USERS_LIST]),
    getUsersList(){
       this.isLoading = true
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            this.usersList = res.data;
            this[SET_USERS_LIST](this.usersList);
            this.isLoading = false
        })
    }
  }
}
</script>

