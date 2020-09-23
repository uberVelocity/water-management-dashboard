<template>
  <div>
    <Nav></Nav>
    <h1>Live graphs through Socket.io!</h1>
  </div>
</template>

<script>
import io from 'socket.io-client';
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
    }
  },
  created() {
    // TODO: Do something to not connect everytime you switch
    if (!this.isConnected) {
      this.socket = io('localhost:5000');
      this.isConnected = true;
    }
  }
}
</script>

<style>

</style>