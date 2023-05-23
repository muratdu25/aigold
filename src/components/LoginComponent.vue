<template>
  <v-main>
    <v-container class="login-container" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card>
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text>
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn type="submit" color="primary" @click="submitForm()">Login</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      console.log(userData)
      axios
        .post(`${process.env.VUE_APP_API_URL}/api/authenticate`, userData)
        .then((response) => {
          this.$store.state.user.data = response.data.user
          this.$store.state.user.token = response.data.token
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.login-container {
  margin-top: 100px;
}
</style>
