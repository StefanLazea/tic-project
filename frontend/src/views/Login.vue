<template>
  <div class="Login">
    <div class="container">
      <Fieldset>
        <template #legend> Login </template>
        <div class="p-fluid">
          <div class="p-field">
            <InputText
              id="inputtext"
              type="text"
              v-model="user.email"
              placeholder="email"
            />
          </div>
          <div class="p-field">
            <InputText
              id="inputtext"
              type="password"
              v-model="user.password"
              placeholder="password"
            />
          </div>
          <Button label="Log In" @click="handleClick($event)" />
        </div>
      </Fieldset>
    </div>
  </div>
</template>

<script>
import Fieldset from "primevue/fieldset";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import UserService from "../service/UserService";

export default {
  data() {
    return {
      user: {}
    };
  },
  userService: null,
  created() {
    this.userService = new UserService();
  },
  methods: {
    handleClick(evt) {
      evt.preventDefault();
      console.log(this.user.email, this.user.password);
      const user = {
        email: this.user.email,
        password: this.user.password
      };
      console.log(user);
      this.userService
        .authenticate(user)
        .then(data => localStorage.setItem("token", data.token));
    }
  },
  components: {
    Fieldset,
    InputText,
    Button
  }
};
</script>
<style scoped>
.Login {
  margin-top: 20px;
}
.container {
  max-width: 300px;
  text-align: center;
}
.p-field {
  margin-bottom: 1.5rem;
}
</style>
