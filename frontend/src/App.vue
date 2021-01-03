<template>
  <div id="nav">
    <Menubar :model="items" />
    <router-view />
  </div>
</template>
<script>
import Menubar from "primevue/menubar";

export default {
  data() {
    return {
      items: [
        {
          label: "Parts",
          icon: "pi pi-fw pi-file",
          to: "/parts"
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          to: "/users"
        },
        {
          label: "Log in",
          icon: "pi pi-fw pi-user",
          to: "/login"
        },
        {
          label: "Sign Out",
          icon: "pi pi-fw pi-power-off"
        }
      ]
    };
  },
  components: {
    Menubar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
