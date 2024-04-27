<script setup lang="ts">
//@ts-ignore
import LoadingUi from '@/components/LoadingUi.vue';
import CardDetail from '@/components/CardDetail.vue';
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
    <section class="flex sm:flex-col md:flex-col xl:flex-row lg:flex-row gap-3">
        <!-- <div class="w-[430px] p-4 rounded-lg max-w-1xl shadow-lg shadow-gray-300 bg-blue-300"> -->
            <div class="relative mt-2 p-2 text-gray-700 shadow-md bg-clip-border rounded-xl w-96  bg-white">
                <LoadingUi/>
                <div class="p-6 pt-0">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Architecture Microservice
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Cette application tourne à la fois en Nodejs et en Laravel
                    </p>
                </div>

            </div>

        <div class="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      QuickBooks work with Entreprise
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
    </section>


  </main>
</template>
