<template>
  <div>
      <div class="header">
        <div class="searchBox">
            <div class="dropdownSearchBy">
              <dropdownComponenet :options="searchOptionsList" :isReset="isReset" placeholder="Search By" @selectedOptionedClick="selectedOptionedClick"></dropdownComponenet>
            </div>
            <div class="inputSearch">
              <dropdownComponenet v-if="isCompanySelected" style="margin-bottom:10px" :options="companyList" :isReset="isReset" placeholder="Search By" @selectedOptionedClick="selectedSubOptionedClickCompany"></dropdownComponenet>
             <dropdownComponenet v-if="isAdressSelected" style="margin-bottom:10px" :options="addressList" :isReset="isReset" placeholder="Search By" @selectedOptionedClick="selectedSubOptionedClickAdress"></dropdownComponenet>
             
              <el-input placeholder="Search" v-model="searchInput"></el-input>  
            </div>
        </div>
        <div class="clearSearch">
            <el-button @click="resetFilter" type="primary">clear filter</el-button>
        </div>
         
      </div>
       <el-table
        :data="pagedTableData"
        style="width: 100%" max-height="600px">
        <el-table-column
          label="name"
          prop="name">
        </el-table-column>
        <el-table-column
          label="username"
          prop="username">
        </el-table-column>
         <el-table-column
          label="email"
          prop="email">
        </el-table-column>
            <el-table-column
          label="website"
          prop="website">
        </el-table-column>
          <el-table-column
          label="phone"
          prop="phone">
        </el-table-column>
           <el-table-column
          label="city"
          prop="address">
           <template slot-scope="scope">
             <div> <label> city: </label>{{scope.row.address.city}} </div>
             <div><label> street: </label>{{scope.row.address.street}}</div>
              <div><label>zipcode:</label>{{scope.row.address.zipcode}}</div>
                 <div><label>suite:</label>{{scope.row.address.suite}}</div>
          </template>
        </el-table-column>
          <el-table-column
          label="company"
          prop="company.name">
         
         <template slot-scope="scope">
             <div> <label> name: </label>{{scope.row.company.name}} </div>
             <div><label> catchPhrase: </label>{{scope.row.company.catchPhrase}}</div>
              <div><label>bs:</label>{{scope.row.company.bs}}</div>
          </template>
        

        </el-table-column>
  
        
       </el-table>
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="users.length">
       </el-pagination>
    
  </div>
</template>

<script>
import dropdownComponenet from "../components/dropdownComponenet.vue";
import { mapGetters } from 'vuex';
import debounce from "debounce";
export default {
  name: 'tableComponenet',
  props:['usersData'],
  data(){
    return{
      users:[],
      search: '',
      cities:[],
      selectedFromDropdown:"",
       page: 1,
      pageSize: 5,
      currentPage1: 5,
      isReset:false,
      searchInput:"",
      searchOptionsList:['name','username','email','phone','website','company','address'],
      isCompanySelected:false,
      isAdressSelected:false,
      companyList:['name','catchPhrase','bs'],
      addressList:['street','suite','zipcode','city'],
      CompanyselectedSubOptionedClick:"",
      AdressSelectedSubOptionedClick:""
    }
  },
  components:{
    "dropdownComponenet":dropdownComponenet
  },
  computed:{
     ...mapGetters('userstore',["getUsersList"]),
       pagedTableData() {
         return this.users.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
     }
  },
   watch:{
     searchInput(newObj){
      if(newObj == ""){
         this.users = this.getUsersList
        this.newObj = ""
      }else{
        this.getResultedData(newObj);
      }
      
     }
  },
  created(){
   this.users = this.$props.usersData;
   this.fetchCities();
   this.getResultedData = debounce(this.getResultedData, 1000);
  },
  methods:{
    getResultedData(){
       this.users = this.getUsersList;
       if(this.isAdressSelected || this.isCompanySelected){
         this.users= this.users.filter(this.searchOutputByAdressCompany)
       }else{
          this.users= this.users.filter(this.searchOutput)
       }
    },
    searchOutputByAdressCompany(user){
      let currentObj  = this.selectedFromDropdown
      var currentSubObj =""
      if(this.isCompanySelected){
        currentSubObj = this.CompanyselectedSubOptionedClick
      }else{
         currentSubObj = this.AdressSelectedSubOptionedClick
      }
      let finalCurrentObj = user[currentObj][currentSubObj]
      return finalCurrentObj.toLowerCase().includes(this.searchInput.toLowerCase());
    },
    searchOutput(user){
      let currentObj  = this.selectedFromDropdown
      return user[currentObj].toLowerCase().includes(this.searchInput.toLowerCase());
    },
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
         this.page = val
      },
    fetchCities(){
     this.cities = this.getUsersList.map(user=>{
        return user.address.city
      })
    },
    resetFilter(){
     this.users = this.getUsersList;
     this.isReset = true
     this.searchInput= ""
    },
    selectedOptionedClick(selectedOptionedClick){
      this.isCompanySelected = false
        this.isAdressSelected = false
      this.selectedFromDropdown = selectedOptionedClick
      if(selectedOptionedClick == 'company'){
        this.isCompanySelected = true
      }
       if(selectedOptionedClick == 'address'){
        this.isAdressSelected = true
      }
    
    },
    selectedSubOptionedClickCompany(CompanyselectedSubOptionedClick){
       this.CompanyselectedSubOptionedClick = CompanyselectedSubOptionedClick
    },
      selectedSubOptionedClickAdress(AdressSelectedSubOptionedClick){
       this.AdressSelectedSubOptionedClick = AdressSelectedSubOptionedClick
    }
   
     
  }

}
</script>


<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;

}
.searchBox{
  display: flex;
}
.dropdownSearchBy{
  margin-right: 10px;
}
.inputSearch{
  width: 500px;
}
</style>
