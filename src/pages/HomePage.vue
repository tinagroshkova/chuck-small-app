<template>
  <div class='container'>
    <site-description
      title='This site is made for fun'
      navigate-to='/jokes'
    ></site-description>
    <hero-section
      :imageSrc="'https://caknowledge.com/wp-content/uploads/2022/05/Chuck-Norris-Net-Worth-100-million.jpg'"
      altText="Chuck Norris">
    </hero-section>
  </div>
</template>

<script>
import HeroSection from '@/layout/HeroSection.vue';
import SiteDescription from '@/layout/SiteDescription.vue';
export default {
  components: {
    HeroSection,
    SiteDescription
  },

  methods: {
    navigateToJokes() {
      this.$router.push({ path: '/jokes' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>