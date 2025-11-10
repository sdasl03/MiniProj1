<template>
  <div class="personal-statement-container">
    <p class="personal-statement">
      Chamo-me Samuel Lira, sou natural do Brasil e no momento sou <b>estudante de mestrado</b> na
      Universidade Aberta no curso de Engenharia Informática e Tecnologia Web, licenciei-me no curso
      de Engenharia Informática pela Universidade do Minho. Estou no mercado de
      <b>desenvolvimento web</b> desde 2022. Conclui o ensino secundário duas vezes ao concluir o
      último ano do ensino médio brasileiro à distância, enquanto cursava o primeiro ano de A-levels
      na Inglaterra, por consequência possuo 2 certificados de equivalência ao ensino secundário
      português distintos.
    </p>
    <img src="/public/assets/personal-picture.jpg" alt="" class="personal-statement-img" />
  </div>
</template>

<script>
export default {
  name: 'PersonalStatement',
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
.personal-statement-container {
  margin: 1%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.personal-statement {
  width: 70%;
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
}
.personal-statement-img {
  width: 30%;
  height: auto;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 20px;
  object-fit: cover;
}
</style>
