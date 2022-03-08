import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const User = React.lazy(() => import('./views/pages/user/CreateUser'))
const DetailUser = React.lazy(() => import('./views/pages/user/DetailUser'))
const ListUser = React.lazy(() => import('./views/pages/list/ListUser'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/createuser', name: 'Add User', component: User },
  { path: '/detialuser', name: 'Add User', component: DetailUser },
  { path: '/listuser', name: 'List User', component: ListUser },
]

export default routes
