<template>
  <v-container>
    <h1>Orders</h1>
    <v-list>
      <v-list-item v-for="order in orders" :key="order.id">
        <v-list-item-content>
          <v-list-item-title>{{ order.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-checkbox v-model="order.done"></v-checkbox>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.getters.orders
    }
  }
}
</script> 