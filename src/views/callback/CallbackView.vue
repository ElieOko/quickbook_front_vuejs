<script setup lang="ts">

import { useAxiosRequestWithToken } from '@/utils/service/axios_api';
import { ApiRoutes } from '@/utils/service/endpoint/api';


 (async () => {
     await (useAxiosRequestWithToken().get(`${ApiRoutes.callback}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log("chargement encours...");
        }));
})()

</script>

<template>
    <div>

    </div>
</template>