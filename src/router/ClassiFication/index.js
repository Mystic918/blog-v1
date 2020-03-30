const router ={
    path:'/classification',
    name:'ClassiFication',
    component:()=>import('@/views/ClassiFication'),
    children:[{
        path:':classes',
        name:'classes',
        component:()=>import('@/views/ClassiFication/classes')
    }]
}
export  default  router
