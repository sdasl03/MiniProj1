<template>
  <div class="hobbies-container">
    <p class="hobbies">
      Chamo-me Samuel Lira, sou natural do Brasil e no momento sou <b>estudante de mestrado</b> na
      Universidade Aberta no curso de Engenharia Informática e Tecnologia Web, licenciei-me no curso
      de Engenharia Informática pela Universidade do Minho. Estou no mercado de
      <b>desenvolvimento web</b> desde 2022. Conclui o ensino secundário duas vezes ao concluir o
      último ano do ensino médio brasileiro à distância, enquanto cursava o primeiro ano de A-levels
      na Inglaterra, por consequência possuo 2 certificados de equivalência ao ensino secundário
      português distintos.
    </p>
    <div class="hobby-items">
      <img src="/public/assets/bodyboard.jpg" alt="" class="hobby-item"/>
      <img src="/public/assets/pathfinder.jpg" alt="" class="hobby-item"/>
      <img src="/public/assets/hand-washing.jpg" alt="" class="hobby-item"/>
      <img src="/public/assets/destaque-videogame.jpeg" alt="" class="hobby-item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewHobbies',
  data() {
    return {
      greeting: 'Hello, Vue!',
    }
  },
  methods: {
    updateGreeting() {
      this.greeting = 'Hello, Component!'
    },
  },
}
</script>

<style scoped>
.hobbies-container {
  margin: 1%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  
}
.hobby-items {
  display: flex;
  justify-content: space-between;
}
.hobby-item {
  width: 150px;
  margin: 10px; /* Optional: adds space between images */
}
</style>
