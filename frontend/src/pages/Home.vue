<template>
  <div>
    <Nav />
    <p>Status: {{this.status}}</p>
    <ChartGrid />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import ChartGrid from "@/components/ChartGrid";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Nav,
    ChartGrid,
  },
  data() {
    return {
      isConnected: false,
      socket: undefined,
    };
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    // Fired when the server sends something on the "pressure" channel.
    pressure(data) {
      // store data in vuex store
      this.$store.dispatch("PUSH_PS_DATA", data);
      // eslint-disable-next-line no-console
      console.log('Home: Stored pressure data');
    },
    // Fired when the server sends something on the "leakage" channel.
    leakage(data) {
      // store data in vuex store
      this.$store.dispatch("PUSH_LK_DATA", data);
      // eslint-disable-next-line no-console
      console.log(data);
    },
    // Fired when the server sends something on the "quality" channel.
    quality(data) {
      // store data in vuex store
      this.$store.dispatch("PUSH_QL_DATA", data);
      // eslint-disable-next-line no-console
      console.log(data);
    },
  },
  methods: {
    ...mapActions(['FETCH_STATUS']),
    ...mapGetters(['STATUS']),
  },
  async created() {
    await this.FETCH_STATUS()
    this.status = this.STATUS()
  }
};

</script>

<style scoped lang="scss">
.charts {
  padding: 5em 0em 0em 5em;
  margin: 5em 0em 0em 5em;
}
</style>