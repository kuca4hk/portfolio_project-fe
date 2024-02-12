<template>
  <div>
    <base-card>
      <div class="registration-form">
        <h1>Registrace</h1>
        <form @submit.prevent="submitForm">
          <label for="firstName">Jméno:</label>
          <input type="text" id="firstName" v-model="firstName" required>

          <label for="lastName">Příjmení:</label>
          <input type="text" id="lastName" v-model="lastName" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="email" required>

          <label for="password">Heslo:</label>
          <input type="password" id="password" v-model="password" required>

          <label for="address">Adresa:</label>
          <input type="text" id="address" v-model="adress" required>

          <label for="city">Město:</label>
          <input type="text" id="city" v-model="city" required>

          <label for="zip_code">PSČ:</label>
          <input type="text" id="zip_code" v-model="zipCode" required>

          <label for="checkPassword">Potvrzení hesla:</label>
          <input type="password" id="checkPassword" v-model="checkPassword" required>

          <base-button type="submit">Registrovat</base-button>
        </form>

<!--        <div v-if="" class="success-message">-->
<!--          Registrace byla úspěšná!-->
<!--        </div>-->
      </div>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/componenets/UI/BaseCard.vue";
import {defineComponent} from "vue";
import BaseButton from "@/componenets/UI/BaseButton.vue";

export default defineComponent({
  components: {BaseButton, BaseCard},
  data(){
    return{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      adress: "",
      city: "",
      zipCode: "",
      checkPassword: "",
    }
  },
  methods:{
    async submitForm(){
      if (this.password === this.checkPassword) {
        await this.$store.dispatch('registerUser',{
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          adress: this.adress,
          city: this.city,
          zipCode: this.zipCode,
        })
        this.$router.replace('/signin')
      } else {
        alert("Hesla se neshoduji")
      }
    }
    }
})

</script>


<style scoped>
.registration-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
}
</style>