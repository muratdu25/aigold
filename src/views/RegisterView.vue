<template>
    <v-main>
      <v-container class="login-container" fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card>
              <v-card-title class="text-center">Register</v-card-title>
              <v-card-text>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    required
                  ></v-text-field>
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
                  <v-btn type="submit" color="primary" @click="submitForm()">Register</v-btn>
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
        username: "",
        email: "",
        password: "",
        mt4Id: "",
        mt4Password: "",
      };
    },
    methods: {
      submitForm() {
        const userData = {
          name: this.username,
          email: this.email,
          password: this.password,
        };
  
        axios
          .post(`${process.env.VUE_APP_API_URL}/api/user/register`, userData)
          .then((response) => {
            // Traitement de la réponse du backend
            console.log(response.data);
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
  