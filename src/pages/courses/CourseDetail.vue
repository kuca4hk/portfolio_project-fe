<template>
  <div class="product-detail">
    <base-card>
      <h1>{{ oneCourse.name }}</h1>
      <p>Vytvořil: {{ oneCourse.created_by }}</p>
      <p>Kategorie: {{ oneCourse.category.join(', ') }}</p>
      <p>Popis: {{ oneCourse.description }}</p>
      <p>Cena: {{ oneCourse.price }} Kč</p>
      <p>Stav: {{ oneCourse.is_active ? 'Aktivní' : 'Neaktivní' }}</p>
      <img :src="oneCourse.image" alt="Product Image" style="max-width: 100%; margin-top: 10px;">
    </base-card>


    <base-button @click="registerUser">Register Course</base-button>
  </div>
</template>

<script>
import BaseCard from "@/componenets/UI/BaseCard.vue";
import BaseButton from "@/componenets/UI/BaseButton.vue";

export default {
  components: {BaseButton, BaseCard},
  props: ['id'],
  computed: {
    oneCourse() {
      return this.$store.getters['courses/courses'].find(course => course.id.toString() === this.id)
    },
  },
  methods: {
    async loadCoaches(){
      await this.$store.dispatch('courses/getCourses')
    },
    registerUser(){
      this.$store.dispatch('registerUserToCourse',{
          idCourse: this.id,
          user: localStorage.getItem('id')
      })
      this.$router.replace('/dashboard')
    }
  },
  async created() {
    await this.loadCoaches()

  },
}
</script>

<style scoped>
.product-detail {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

p {
  color: #666;
  margin-bottom: 10px;
}

img {
  display: block;
  margin-top: 10px;
}
</style>