<template>
  <div class="technical-view-container">
    <div class="skills-and-experience-container">
      <h3>Habilidades Técnicas</h3>
      <ul>
        <li>
          <p>javascript</p>
        </li>
        <li>
          <p>typescript</p>
        </li>
        <li>
          <p>css</p>
        </li>
        <li>
          <p>html</p>
        </li>
        <li>
          <p>angular</p>
        </li>
        <li>
          <p>node.js</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Experiência</h3>
      <ul>
        <li>
          <p>2 anos no setor bancário</p>
        </li>
        <li>
          <p>1 ano no setor de impostos</p>
        </li>
      </ul>
    </div>

    <div class="responsabilities">
      <h3>Responsabilidades</h3>
      <ul>
        <li>
          <p>Refactoring de código legacy.</p>
        </li>
        <li>
          <p>Criação de portais de gestão documental.</p>
        </li>
        <li>
          <p>
            Garantir acessibilidade, responsividade e compatibilidade da aplicação com diferentes
            navegadores e dispositivos. Gerir a integração entre front-end e backend com APIs.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnicalView',
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
.technical-view-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.technical-view-container > div {
  margin: 0 20px;
}

.technical-view-container h3 {
 text-align: center;
}

.responsabilities {
  width: 50%;
  height: auto;
  text-align: center; /* Center text within the responsibilities section */
}
</style>
