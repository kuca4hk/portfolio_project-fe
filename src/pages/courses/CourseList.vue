<template>
  <div>
    <section>
      <base-card>
        <div v-if="isLoading">
          <base-spinner/>
        </div>
        <ul v-else-if="hasCourses">
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
import BaseSpinner from "@/componenets/UI/BaseSpinner.vue";
export default {
  components: {
    BaseSpinner,
    CourseItem,
  },
  data(){
    return{
      isLoading: false,
    }
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
      await this.$store.dispatch('courses/getCourses')
      this.isLoading = false
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