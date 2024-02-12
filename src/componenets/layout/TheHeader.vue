<template>
  <header>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/public" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-4">{{title}}</span>
        </a>

        <ul class="nav nav-pills" v-if="isAuth">
          <li class="nav-item"><router-link to="/dashboard" class="nav-link">Home</router-link></li>
          <li v-if="hasRole" class="nav-item"><router-link to="/createcourse" class="nav-link">Create Course</router-link></li>
          <li v-if="hasRole" class="nav-item"><router-link to="/mycourses" class="nav-link">My Course</router-link></li>
          <li v-if="hasUserRole" class="nav-item"><router-link to="/mycourses-registration" class="nav-link">My Course Registraion</router-link></li>
          <li class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link></li>
        </ul>
        <ul class="nav nav-pills" v-else-if="!isAuth">
          <li class="nav-item"><router-link to="/signin" class="nav-link">Sign In</router-link></li>
          <li class="nav-item"><router-link to="/signup" class="nav-link">Sign Up</router-link></li>
        </ul>
      </header>
    </div>
  </header>
</template>

<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    }
  },
  computed:{
    isAuth(){
      return this.$store.getters['isAuthenticated']
    },
    hasRole(){
      if(this.$store.getters['role'] === 'admin' || this.$store.getters['role'] === 'inscrutcor' ){
        return true
      } else {
        return false
      }
    },
    hasUserRole(){
      if(this.$store.getters['role'] === 'user'){
        return true
      } else {
        return false
      }
    }
  },
}
</script>

<style scoped>
header{
  background-color: currentcolor;
}
span{
  color: white;
}
</style>