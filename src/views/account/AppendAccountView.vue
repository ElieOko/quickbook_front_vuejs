<script setup lang="ts">
import { account_type } from '@/utils/constante/typeaccount';
import type { IAccountRequest } from '@/utils/interface/account/IAccount';
import { useAxiosRequest } from '@/utils/service/axios_api';
import { ref, watchEffect } from 'vue';
import { useAxiosRequestWithToken } from '@/utils/service/axios_api';
import { ApiRoutes } from '@/utils/service/endpoint/api';


const account_data = ref<IAccountRequest>({
  AccountType:"",
  Name:""
})
const token = ref<String>("");
watchEffect( async ()=>{
    await(
        useAxiosRequestWithToken().get(ApiRoutes.getTokenQkb).then(response =>{
          token.value = response.data.token.accessTokenKey
        }).catch(er =>{
            console.log(er);
        })
    )
})
const new_submit = async ()=>{
  if(account_data.value.Name && account_data.value.AccountType){
        console.log("@@@@@@@@@@@@",account_data.value);
        await(
            useAxiosRequest().post("create/account",{"AccountType":account_data.value.AccountType as String,"Name":account_data.value.Name as String}).then(response =>{
                console.log(response.data)
            }).catch(err =>{
                console.log(`MY ERROR =>${err}`)
            })
        )
        return
    }
    alert("Certains info sont vides")
}




</script>


<template>

<form  @submit.prevent="new_submit" class="relative mx-auto max-h-max px-8 top-[75px] p-6  md:flex-0 shrink-0 ">
<div class="relative px-14 z-0 flex flex-col bg-[#f8f9fa] min-w-0 break-words border-0 shadow-soft-xl bg-clip-border rounded-md">
    <h2 class="text-2xl font-bold">Account</h2>
  <div class="flex flex-wrap -mx-3 mb-4 py-8">
    <div class="w-full  md:w-1/2 px-3  md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        <span class="text-red-500">*</span> Name
      </label>
      <input v-model="account_data.Name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        <span class="text-red-500">* </span>  Account Type
      </label>
      <div class="relative">
        <select v-model="account_data.AccountType" class="block appearance-none w-full bg-gray-200 border border-blue-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option v-for="account in account_type" :value="account">{{ account }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Description
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Balance
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
    </div>
</div>
    <div class="fex flex-wrap -mx-3 left-[280px] w-full mb-8 gap-14">
        
        <button type="submit" class="bg-[#002D74] w-[100px] md:w-1/5 px-8  rounded-xl text-white py-2 hover:scale-105 duration-300 p-4">Save +</button>
    </div>
</div>
{{ account_data }}
</form>
</template>