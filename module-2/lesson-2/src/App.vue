<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      number: 0,
    };
  },

  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>

<style lang="scss" scoped></style>