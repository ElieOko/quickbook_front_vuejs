<script setup lang="ts">
//@ts-ignore
import  { getToken } from '@/store/token';
import { useAx } from '@/utils/constante/fun';

const token = getToken();

if(token != null){
 const access_token = token?.access_token;
  (async()=>{
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Invoice")
        .then(function (response) {
            console.log("Invoice -> ",response)
    })
    .catch(function (error) {
               
    })
    /*
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Customer")
        .then(function (response) {
            console.log("Customer -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Employee")
        .then(function (response) {
            console.log("Employee -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Item")
        .then(function (response) {
            console.log("Item -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Department")
        .then(function (response) {
            console.log("Department -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Vendor")
        .then(function (response) {
            console.log("Vendor -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Term")
        .then(function (response) {
            console.log("Term -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Budget")
        .then(function (response) {
            console.log("Budget -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Bill")
        .then(function (response) {
            console.log(" -> Bill",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Account")
        .then(function (response) {
            console.log("Account -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Deposit")
        .then(function (response) {
            console.log("Deposit -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20Estimate")
        .then(function (response) {
            console.log("Estimate -> ",response)
    })
    .catch(function (error) {
               
    })
    await useAx(access_token).get("/query?query=SELECT%20*%20FROM%20journalentry")
        .then(function (response) {
            console.log("JournalEntry -> ",response)
    })
    .catch(function (error) {
               
    })*/
})() 
}



</script>

<template>
  <main>
    <div v-if="token != null" class="">
      <router-link
        class="flex items-center p-4 bg-white border border-1 border-gray-100 rounded-lg shadow-xs dark:bg-gray-800"
        to="/"
      >
        <div
          class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <i class="w-5 h-5 fa fa-store"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Data loading
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{ "..." }}
          </p>
        </div>
      </router-link>
    </div>
    <div v-else>
      <router-link
        class="flex items-center p-4 bg-white border border-1 border-gray-100 rounded-lg shadow-xs dark:bg-red-800"
        to="/login"
      >
        <div
          class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
        >
          <i class="w-5 h-5 fa fa-store"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Token not found generate new token
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{ "Status : 400" }}
          </p>
        </div>
      </router-link>
    </div>
    
  </main>
</template>
