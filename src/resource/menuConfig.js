 const menuList = [
    {
       title: '首页',
       key: '/admin/home'
     },
     {
       title: 'UI',
       key:'/admin/ui',
       children: [{
           title: '按钮',
           key: '/admin/ui/buttons'
         },
         {
           title: '弹框',
           key: '/admin/ui/modals'
         },
         {
           title: 'loadings',
           key: '/admin/ui/loadings'
         },
         {
           title: '通知',
           key: '/admin/ui/notifications'

         }
       ]
     },
     {
       title:'表单',
       key:'/admin/form',
       children:[
         {
           title:'登录',
           key:'/admin/form/login'
         },
         {
           title:'注册',
           key:'/admin/form/register'
         }
       ]
     },
     {
       title:'表格',
       key:'/admin/table'
     },
     {
       title:'城市管理',
       key:'/admin/city'
     }
    ]
     export default menuList;