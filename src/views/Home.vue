<template>
  <div class="home">s</div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("clicked");
    };

    return { name, age, handleClick };
  },
};
</script>
