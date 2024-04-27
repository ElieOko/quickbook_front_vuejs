<script setup lang="ts">
import type { ICustomer } from '@/utils/interface/customer/ICustomer';
import type { IInvoiceRequest, ILineArray } from '@/utils/interface/invoice/IInvoice';
import type { IItem } from '@/utils/interface/item/IItem';
import { useAxiosRequest, useAxiosRequestWithToken } from '@/utils/service/axios_api';
import { ApiRoutes } from '@/utils/service/endpoint/api';
import { computed, ref, watchEffect } from 'vue';
//
const invoice = ref<ILineArray>({
SalesItemLineDetail: {
    ItemRef: {
        name: "",
        value: ""
    },
        Qty: 0
    },
    DetailType: "SalesItemLineDetail"
})
const customer = ref<Array<ICustomer>>([])
const invoices = ref<IInvoiceRequest>({
    Line: [],
    CustomerRef: {
    value: undefined
    }
})
const items = ref<Array<IItem>>([])
//
const errorAmount = computed(() => {
      return invoice.value.Amount === 0.0 ? "Entrez un montant valide" : "";
});

//
watchEffect( async ()=>{
    await(
        useAxiosRequestWithToken().get(ApiRoutes.allItem).then(response =>{
            items.value = response.data.items as Array<IItem>
        }).catch(er =>{
            console.log(er);
        }).finally(()=>{
           // show.value = false
        })
    )
})

watchEffect( async ()=>{
    await(
        useAxiosRequestWithToken().get(ApiRoutes.allCustomer).then(response =>{
            customer.value = response.data.customer as Array<ICustomer>
        }).catch(er =>{
            console.log(er);
        }).finally(()=>{
           // show.value = false
        })
    )
})
const change_select = (data:String)=>{
    items.value.map(k=>{
        if(k.ItemId == Number(data)){
           invoice.value.Amount = k.UnitPrice 
           invoice.value.SalesItemLineDetail.ItemRef.name = k.FullyQualifiedName as String
        }
    })
}


const new_submit = async ()=>{
    if(invoice.value.SalesItemLineDetail.ItemRef.value && invoices.value.CustomerRef.value){
        invoices.value.Line.push(invoice.value)
        await(
            useAxiosRequest().post("create/invoice",invoices).then(response =>{
                console.log(response.data)
            }).catch(err =>{
                console.log(err)
            })
        )
        return
    }
    alert("Certains info sont vides")
}

</script>

<template>
    <main  class="h-full pb-16 overflow-y-auto">
        <div class="container px-6 mx-auto grid">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 bg-blue-500"> Append new Invoice</h2>
            <form  @submit.prevent="new_submit" class="w-full max-w-full p-4 z-10 py-4 bg-white shadow-md ">
                <div class="w-full mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                       Customer
                    </label>
                    <div class="relative">
                        <select  v-model="invoices.CustomerRef.value"  class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-devise">
                            <option v-for="(custom, index) in customer" :value="(custom.CustomerId as number)" :key="index">{{ custom.FullyQualifiedName}}({{ custom.CompanyName }})</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        </div>
                    </div>
                </div> 
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-devise">
                        Items
                    </label>
                    <div class="relative">
                        <select @change="change_select(invoice.SalesItemLineDetail.ItemRef.value)" v-model="invoice.SalesItemLineDetail.ItemRef.value" class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-devise">
                            <option v-for="(item, index) in items" :value="(item.ItemId as number)" :key="index">{{ item.FullyQualifiedName}}({{ item.Type }})</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Quantity
                    </label>
                    <input v-model="invoice.SalesItemLineDetail.Qty" min="0" class="appearance-none block w-full text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none  focus:bg-white" id="grid-name" type="number" >
                </div>
                </div>
                <div class="w-full mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                       Amount
                    </label>
                    <input placeholder="0.0" disabled v-model="invoice.Amount" class="appearance-none block w-full text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none  focus:bg-white" id="grid-name" step="0.01" min="0" max="10000000000">
                    <label class="text-red-500" v-if="errorAmount">{{ errorAmount }}</label>
                </div>
                <div class="fex flex-wrap -mx-3  gap-14">
                    <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 p-4">Save +</button>

                    <button class="bg-[#e74646] rounded-xl text-white py-2 hover:scale-105 duration-300 p-4">Annuler </button>
                </div>
            </form>
            {{ invoices }}
        </div>
    </main>
</template>