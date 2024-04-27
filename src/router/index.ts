import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import InvoiceView from '@/views/invoice/InvoiceView.vue'
import AppendInvoiceView from '@/views/invoice/AppendInvoiceView.vue'
import DetailInvoiceView from '@/views/invoice/DetailInvoiceView.vue'
import WorkerView from '@/views/worker/WorkerView.vue'
import AppendWorkerView from '@/views/worker/AppendWorkerView.vue'
import ProfileView from '@/views/company/ProfileView.vue'
import CallbackView from '@/views/callback/CallbackView.vue'
import ItemView from '@/views/item/ItemView.vue'
import CustomerView from '@/views/customer/CustomerView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'empty' }
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoiceView
    },
    {
      path: '/item',
      name: 'item',
      component: ItemView
    },
    {
      path: '/invoice/new',
      name: 'invoice_new',
      component: AppendInvoiceView
    },
    {
      path: '/invoice/detail',
      name: 'invoice_detail',
      component: DetailInvoiceView
    },
    {
      path: '/worker',
      name: 'worker',
      component: WorkerView
    },
    {
      path: '/worker/new',
      name: 'worker_new',
      component: AppendWorkerView,
    },
    {
      path: '/worker/detail',
      name: 'worker_detail',
      component: WorkerView
    },
    {
      path: '/company/profile',
      name: 'company_profile',
      component: ProfileView
    },
    {
      path: '/callback',
      name: 'callback',
      component: CallbackView   
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView   
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'empty' },
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
