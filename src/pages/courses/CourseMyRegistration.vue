<template>
  <div>
    <section>
      <base-card>
        <div v-if="isLoading">
          <base-spinner/>
        </div>
        <ul v-else-if="hasCourses">
          <CourseItemMyRegistration v-for="course in courses"
                       :key="course.id"
                       :id="course.id"
                       :name="course.name"
                       :price="course.price"
                       :category="course.category"
                       :created-by="course.createdBy"
                       :date-created="course.date_created"
                       :date-update="course.date_update">

          </CourseItemMyRegistration>
        </ul>
        <h3 v-else>No Courses here</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CourseItemMyRegistration from "@/componenets/courses/CourseItemMyRegistration.vue";
import BaseSpinner from "@/componenets/UI/BaseSpinner.vue";
export default {
  data(){
    return{
      isLoading: false
    }
  },
  components: {
    BaseSpinner,
    CourseItemMyRegistration
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
      this.isLoading = true
      await this.$store.dispatch('courses/myCourseRegistry')
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>