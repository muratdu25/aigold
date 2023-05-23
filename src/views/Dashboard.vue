<template>
    <v-container grid-list-xs>
        <h1>Dashboard</h1>
        <button @click="getInformations">Welcome {{$store.state.user.data.name }} !</button>
    </v-container>
       
  </template>
  
  <script>


import axiosClient from '../axios'
export default ({
    // eslint-disable-next-line
name: 'Dashboard',
methods:{
    getInformations(){
        axiosClient.post('getUser')
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
});
  </script>
  