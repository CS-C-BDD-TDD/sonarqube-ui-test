<template>
  <!-- <q-page padding> -->
  <q-page class="flex flex-center bg-primary" >
    <div v-bind:style="styleObject">
    <p>{{message}}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HumanReview',
  data() {
    return {
      message: 'HumanReview page is currently under construction!',
      styleObject: {
        fontSize: '50px',
        color: '#ffffff',
      },
    };
  },
};
</script>
