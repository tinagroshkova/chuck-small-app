<template>
  <div class='container'>
    <hero-section
        :imageSrc="'/images/chuck.jpg'"
        altText="Chuck Norris"
    ></hero-section>
    <site-description
        :description='description'
        navigate-to='/jokes'
    ></site-description>
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
  margin-top: 5%;
  padding: 20px;
  color: white;
}
</style>



