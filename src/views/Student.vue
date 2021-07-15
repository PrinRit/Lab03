<template>
  <h1>Students</h1>
  <div class="students">
    <StudentList v-for="student in students" :key="student.id" :student="student"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentList from "@/components/StudentList.vue"
import Studentservice from '@/services/Studentservice.js'
// import axios from 'axios'

export default {
  name: "Student",
  components: {
    StudentList, // register it as a child component
  },
  data(){
    return{
      students:null
    }
  },
  created(){
    Studentservice.getStudent()
    .then((response)=>{
      this.students = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
</script>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
