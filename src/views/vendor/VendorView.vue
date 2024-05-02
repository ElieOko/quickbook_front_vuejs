<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { IVendor } from '@/utils/interface/vendor/IVendor';
import { process, filterBy, type CompositeFilterDescriptor, type SortDescriptor } from '@progress/kendo-data-query';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Loader } from '@progress/kendo-vue-indicators'
//@ts-ignore
import { vendorColumn } from '@/utils/constante/column/vendor_col';
import { ApiRoutes } from '@/utils/service/endpoint/api';
import { useAxiosRequestWithToken } from '@/utils/service/axios_api';

const vendor = ref<Array<IVendor>>([{}])
    const editField = ref<any>()

const type = "infinite-spinner"
const loader       = ref<Boolean>(false)
const show       = ref<any>(false)
// const  toggleLoader = () => {
    show.value = show.value ? false : 'loader';
    // }
const gridPageable = {buttonCount: 5,info: true,type: 'numeric',pageSizes: true,previousNext: true} 
const sortable = ref(true);
const skip = ref<number>(0);
const take = ref<number>(4);
const sort = ref<SortDescriptor[] | undefined>([{ field: "VendorId", dir: "asc" }]);
const cellClick = (e: any) => {
    if (e.dataItem.inEdit && e.field === editField.value) {
        return;
    }
    exitEdit(e.dataItem, true);
    editField.value = e.field;
    e.dataItem.inEdit = e.field;
    }
const exitEdit =  (dataItem:any, exitEdit:any) => {
    if (!exitEdit && dataItem.inEdit) {
        return;
    }
    vendor.value.forEach((d:any) => {
        if (d.inEdit) {
          d.inEdit = undefined;
        }
    });
    editField.value = undefined;
    }
const itemChange =  (e:any)=> {
    const data =  vendor.value.slice();
    const index = data.findIndex((d  => d.VendorId === e.dataItem.id ))
    data[index] = { ...data[index], [e.field]: e.value };
    vendor.value  = data;
    }
const filter = ref<CompositeFilterDescriptor>({logic: "and", filters: []});
const pageChangeHandler = (event:any) => {
    loader.value = true;
    setTimeout(() => {
        loader.value = false;
        skip.value = event.page.skip;
        take.value = event.page.take;
    }, 300);
    }
const filterChange =  (ev:any)=> {
      loader.value = true;
      console.log(ev);
      setTimeout(() => {
        filter.value = ev.filter;
        loader.value = false;
      }, 300);
} 
//
watchEffect( async ()=>{
    await(
        useAxiosRequestWithToken().get(ApiRoutes.allVendor).then(response =>{
            vendor.value = response.data.vendors as Array<IVendor>
        }).catch(er =>{
            console.log(er);
        }).finally(()=>{
            show.value = false
        })
    )
})
</script>

<template>
    <grid
    @pagechange="pageChangeHandler"
    :total ="vendor?.length"
    :data-items="vendor"
    :columns="vendorColumn as any"
    :edit-field="'inEdit'"
    @cellclick="cellClick"
    @itemchange="itemChange"
    :filter="filter"
    @filterchange="filterChange"
    :loader="show"
    :column-menu="true"
    :pageable="gridPageable"
    :sortable="sortable"
    :sort="sort"
    :take="take"
    :skip="skip">
    </grid>
    <div v-if="show" class="k-loader-container k-loader-container-md k-loader-top">
      <div class="k-loader-container-overlay k-overlay-dark" >
        <div class="k-loader-container-inner">
            <Loader :size="'large'" :type="type" />
        </div>
      </div>
    </div>
</template>