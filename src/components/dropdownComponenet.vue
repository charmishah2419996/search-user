<template>

     <el-select  filterable v-model="selectedOptions" :placeholder="placeholder" class="dropdownCss" @change="$emit('selectedOptionedClick',selectedOptions)">
               <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item">
                </el-option>
     </el-select>
     
</template>
<script>

export default{
     props: ["options","placeholder","isReset"],
     data(){
        return{
            selectedOptions:""
        }
     },
     watch:{
       isReset(){
         console.log("@@ nice in watcher",this.$props);
          if(this.$props.isReset){
            this.selectedOptions = ""
        }
       }
     },
     created(){
        console.log("@@ nice",this.$props);
       
     }
     
}
</script>

