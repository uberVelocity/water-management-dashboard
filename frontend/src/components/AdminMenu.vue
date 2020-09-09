<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar position="static" type="is-light" open>
        <div class="p-1">
          <b-menu class="is-custom-mobile">
            <b-menu-list label="Menu">
              <b-menu-item icon="information-outline" label="Sensors" @click="setCurrentPage('sensors')"></b-menu-item>
              <b-menu-item active expanded icon="settings" label="Users" @click="setCurrentPage('users')">
                <b-menu-item icon="account" label="Subcat 1"></b-menu-item>
                <b-menu-item icon="cellphone-link" label="Subcat 2"></b-menu-item>
                <b-menu-item icon="cash-multiple" label="Subcat 3"></b-menu-item>
              </b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item icon="logout" label="Logout"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
  </div>
</template>


<script>
  export default {
    name: 'AdminMenu',
    methods: {
      setCurrentPage(value) {
        this.$emit('setCurrentPage', value)
      }
    }
  }
</script>

<style scoped lang="scss">

  .p-1 {
    padding: 1em;
  }
  .sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
  // min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
  // min-height: 100vh;
  }
  }

  .control {
    display: block;
  }
</style>