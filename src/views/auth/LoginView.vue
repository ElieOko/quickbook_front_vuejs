<script setup lang="ts">
import { OAuthCode } from '@/utils/constante/fun';
import { useAxiosRequestWithToken } from '@/utils/service/axios_api';
import { ApiRoutes } from '@/utils/service/endpoint/api';


(async () => {
    await (useAxiosRequestWithToken().get(`${ApiRoutes.redirect}`)
        .then(function (response) {
            console.log("back =>",response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log("chargement encours...");
        }));
})()
export interface IToken{
    access_token? : string
    refresh_token? : string
    x_refresh_token_expires_in? : string
    expires_in? : string
}
const callTimerAction = setInterval( ()=>{ backup} ,5000)
const backup =await (useAxiosRequestWithToken().get(`${ApiRoutes.backupToken}`)
                .then(function (response) {
                    const token = response.data.token 
                    if(token != null){
                        console.log("Token eye ->",token)
                        clearInterval(callTimerAction)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    //alert("Elie Oko"); 
                })
                )

const oauth = async () => {
    await (
        (useAxiosRequestWithToken().get(`${ApiRoutes.auth}`)
            .then(function (response) {
                console.log(response);
                const url = response.data.url;
               const popup = OAuthCode(url);
               setTimeout(()=>{
                popup.then((win)=>{
                 console.log("WT ->",win.close)
                 win.close()
               })
               },15000)
               callTimerAction
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                //alert("Elie Oko"); 
            })
            )
            );
            
}
</script>
<template>
    <section class="bg-gray-500 min-h-screen flex items-center justify-center">
  <!-- login container -->
    <div class="bg-gradient-to-r from-red-500 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <!-- form -->
            <div class="md:w-1/2 px-8 md:px-16">
            <h2 class="font-bold text-2xl text-[#fff]">Login</h2>
            <p class="text-xl mt-4 text-[#fff]">Gestion financière des opérations demo</p>

            <form action="" class="flex flex-col gap-4">
                <input class="p-2 mt-8 rounded-xl border" type="text" name="" placeholder="Nom d'utilisateur">
                <div class="relative">
                <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Mot de passe">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
                </div>
                <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>

            <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr class="border-gray-400">
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-400">
            </div>

            <button @click="oauth" class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                <img src="https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" class="mr-2" alt="" width="30" height="30">
                <span>Connect to QuickBooks</span>
            </button>
            </div>

            <!-- image -->
            <div class="md:block hidden w-1/2">
            <img class="rounded-2xl" src="https://img.freepik.com/vecteurs-libre/operation-financiere-reussie-comptabilite-entreprise-rapport-facturation-gens-heureux-recu-impot-paiement-droits-economies-argent-revenus-especes-illustration-metaphore-concept-isole-vecteur_335657-4331.jpg">
            </div>
        </div>
    </section>
</template>