<template>
  <div v-if="show" class="popup-overlay">
    <div class="popup-window">
      <h4>{{ title }}</h4>
      <div class="popup-buttons">
        <base-button @click="onConfirm">Yes</base-button>
        <base-button @click="onCancel">No</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: black;
}

.popup-window {
  width: 300px;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.popup-window h4,
.popup-window p {
  margin: 0;
}

.popup-buttons {
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: auto;
}
</style>