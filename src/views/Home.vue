<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    //const p = ref(null);

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
      age.value = 25;
    };

    return { name, age, handleClick };
  },
};
</script>

<style>
.test {
  color: red;
}
</style>
