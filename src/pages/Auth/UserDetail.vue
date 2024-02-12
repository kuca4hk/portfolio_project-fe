<template>
  <base-card>
    <div class="user-details">
      <div class="user-info">
        <h1>Profil Uzivatele</h1>
        <h2>{{name}}</h2>
        <p>Email: {{email}}</p>
        <p>Adresa: {{address}}</p>
        <p>Role: {{role}}</p>
        <!-- Další informace o uživateli -->
      </div>
    </div>
    <base-button @click="logout">Sign out</base-button>
  </base-card>

  <base-card>
    <div class="change-password">
      <h2>Změna hesla</h2>
      <form @submit.prevent="submitNewPassword">

        <label for="new-password">Nové heslo:</label>
        <input type="password" id="new-password" name="new-password" required v-model="new_password">

        <label for="confirm-password">Potvrdit nové heslo:</label>
        <input type="password" id="confirm-password" name="confirm-password" required v-model="new_password_confirm">

        <base-button type="submit" value="">Změnit heslo</base-button>
      </form>
    </div>

  </base-card>
</template>

<script>
import BaseCard from "@/componenets/UI/BaseCard.vue";
import BaseButton from "@/componenets/UI/BaseButton.vue";

export default {
  components: {BaseButton, BaseCard},
  data(){
    return {
      name: "",
      address: "",
      email: "",
      new_password: "",
      new_password_confirm: "",
      role: ''
    }
  },
  mounted() {
    this.getUserData()
    this.setUserData()
  },
  methods: {
    async getUserData(){
      return await this.$store.dispatch('getUserData')
    },
    setUserData(){
      this.name = this.$store.getters['userName']
      this.address =  this.$store.getters['address']
      this.email = this.$store.getters['email']
      this.role = this.$store.getters['role']
      if (this.address === null || this.address === undefined){
        this.address = 'Neni vyplneno'
      }
    },
    async submitNewPassword(){
      await this.$store.dispatch('updatePassword',{
        new_password: this.new_password,
        confirm_new_password: this.new_password_confirm
      })
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      this.$router.go(0);
    },
    async logout(){
      await this.$store.dispatch('signout')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      this.$router.go(0);
    }
  }
}
</script>

<style scoped>

.user-details {
  max-width: 600px;
  margin: 50px auto;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  margin-left: 20px;
}

h1 {
  color: #333;
}

p {
  color: #666;
  margin: 5px 0;
}

.change-password {
  max-width: 400px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  color: #333;
}

input {
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>