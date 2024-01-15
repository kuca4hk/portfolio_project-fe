<template>
  <div>
    <section>
      <base-card>
<!--        <div class="controls">-->
<!--          <base-button :link="false" mode="outline" @click="loadCoaches(true)">Refresh</base-button>-->
<!--          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login</base-button>-->
<!--          <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register">Login to Register as Coach</base-button>-->
<!--        </div>-->
        <ul v-if="hasCourses">
          <course-item v-for="course in courses"
                       :key="course.id"
                       :id="course.id"
                       :name="course.name"
                       :price="course.price"
                       :category="course.category"
                       :created-by="course.createdBy"
                       :date-created="course.date_created"
                       :date-update="course.date_update">

          </course-item>
        </ul>
        <h3 v-else>No Courses here</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CourseItem from "@/componenets/courses/CourseItem.vue";
export default {
  components: {
    CourseItem,
  },
  computed: {
    courses(){
      return this.$store.getters['courses/courses']
    },
    hasCourses(){
      return this.$store.getters['courses/hasCourses']
    }
  },
  created() {
    this.loadCoaches()
  },
  methods: {
    async loadCoaches(){
      await this.$store.dispatch('courses/getCourses')
    }
  }
}

</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>