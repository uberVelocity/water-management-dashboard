<template>
  <div>
    <Nav></Nav>
    <p v-if="isConnected">We're connected to the server!</p>
    <h1>Live graphs through Socket.io!</h1>
    <h3>Data: {{temperature}}</h3>
  </div>
</template>

<script>
  import Nav from '@/components/Nav';

  export default {
    name: 'Live',
    components: {
      Nav
    },
    data() {
      return {
        isConnected: false,
        socket: undefined,
        temperature: undefined,
      }
    },
    sockets: {
      connect() {
        // Fired when the socket connects.
        this.isConnected = true;
      },

      disconnect() {
        this.isConnected = false;
      },

      // Fired when the server sends something on the "messageChannel" channel.
      temperature(data) {
        this.temperature = data;
      }
    }
  }
</script>

<style>

</style>