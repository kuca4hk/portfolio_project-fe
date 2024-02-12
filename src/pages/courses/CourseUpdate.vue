<template>
  <div class="product-form">
    <base-card>
      <h1>Editace Kurzu</h1>
      <form @submit.prevent="submitForm">
        <label for="category">Kategorie:</label>
        <select id="category" v-model="category" multiple required>
          <option value="Python">Python</option>
          <option value="Vue">Vue</option>
        </select>

        <label for="name">Název:</label>
        <input type="text" id="name" v-model="name" required>

        <label for="description">Popis:</label>
        <textarea id="description" v-model="description" required></textarea>

        <label for="price">Cena:</label>
        <input type="number" id="price" v-model="price" required>

        <label for="image">Obrázek URL:</label>
        <input type="text" id="image" v-model="image">

        <label for="is_active">Je aktivní:</label>
        <input type="checkbox" id="is_active" v-model="is_active" required>

        <base-button type="submit">Save Course</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "@/componenets/UI/BaseButton.vue";
import BaseCard from "@/componenets/UI/BaseCard.vue";

export default {
  props: ['id'],
  components: {BaseCard, BaseButton},
  data() {
    return {
      selectedCourse: null,
      name: "",
      category: "",
      description: "",
      price: "",
      image: "",
      is_active: "",
    };
  },
  created() {
    this.selectedCourse = this.$store.getters['courses/courses'].find(course => course.id.toString() === this.id)
    this.name = this.selectedCourse.name
    this.category = this.selectedCourse.category
    this.description = this.selectedCourse.description
    this.price = this.selectedCourse.price
    this.image = this.selectedCourse.image
    this.is_active = this.selectedCourse.is_active
  },
  methods: {
    async submitForm() {
      if (this.name !== '' && this.description !== '' && this.price !== '' && this.is_active !== false){
        await this.$store.dispatch('courses/updateCourse',{
          id: this.id,
          category: this.category,
          name: this.name,
          description: this.description,
          price: this.price,
          is_active: this.is_active
        })
        this.$router.replace('/dashboard')
      } else {
        alert("Hesla se neshoduji")
      }

      // Zde můžeš implementovat logiku pro odeslání formuláře
      console.log('Odesláno:', this.formData);
    },
  },
};
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  color: #333;
}

input, select, textarea {
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>
