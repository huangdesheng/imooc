 const menuList = [{
       title: '首页',
       key: '/admin/home'
     },
     {
       title: 'UI',
       key: '/admin/ui',
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

       export default menuList;