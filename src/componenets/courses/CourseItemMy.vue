<template>
  <li>
    <h3>{{name}}</h3>
    <h4>{{price}} Kč</h4>
    <div>
      <base-badge v-for="area in category" :key="area" :title="area" :type="area"></base-badge>
    </div>
    <div class="actions">
      <base-button :link="true" :to="courseEditLink" mode="outline" >Edit Course</base-button>
      <base-button :link="true" :to="courseDetailLink">View Details</base-button>
    </div>
  </li>
</template>

<script>

export default {
  props:['id', 'name', 'price', 'category', 'createdBy', 'date-created', 'date-update'],
  computed: {
    courseEditLink(){
      return `/course/edit/${this.id}`
    },
    courseDetailLink(){
      return `/course/${this.id}`
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>