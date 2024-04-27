<script setup lang="ts">
import { useAxiosRequestWithToken } from '@/utils/service/axios_api';
import { ApiRoutes } from '@/utils/service/endpoint/api';
import { watchEffect } from 'vue';


watchEffect( async ()=>{
    await(
        useAxiosRequestWithToken().get(ApiRoutes.getInvoiceById)
        .then(response=>{

        }).catch(error =>{

        })
    )
})


</script>
<template>
    <div>
        
    </div>
</template>