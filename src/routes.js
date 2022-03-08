import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const User = React.lazy(() => import('./views/pages/user/CreateUser'))
const ListUser = React.lazy(() => import('./views/pages/list/ListUser'))
const RegUser = React.lazy(() => import('./views/pages/register/Register'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/createuser', name: 'Add User', component: User },
  { path: '/listuser', name: 'List User', component: ListUser },
]

export default routes
