<template>
  <div class='container'>
    <site-description
        :description='description'
        navigate-to='/jokes'
    ></site-description>
    <hero-section
        :imageSrc="'https://caknowledge.com/wp-content/uploads/2022/05/Chuck-Norris-Net-Worth-100-million.jpg'"
        altText="Chuck Norris"
    ></hero-section>
  </div>
</template>

<script>
import HeroSection from '@/layout/HeroSection.vue';
import SiteDescription from '@/layout/SiteDescription.vue';
import { SITE_DESCRIPTION }  from '../constants';

export default {
  components: {
    HeroSection,
    SiteDescription,
  },

  data() {
    return {
      description: SITE_DESCRIPTION,
    };
  },

  methods: {
    navigateToJokes() {
      this.$router.push({ path: '/jokes' });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 50%;
  margin-top: 150px;
  padding: 20px;
  color: white;
}
</style>