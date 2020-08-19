const menuList = [
    {
        title: 'Home',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: 'Button',
                key: '/admin/ui/buttons',
            },
            {
                title: 'Modal',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/admin/ui/notification',
            },
            {
                title: 'Message',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab',
                key: '/admin/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/admin/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title: 'Form',
        key: '/admin/form',
        children: [
            {
                title: 'Login',
                key: '/admin/form/login',
            },
            {
                title: 'Register',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: 'Table',
        key: '/admin/table',
        children: [
            {
                title: 'Basic Table',
                key: '/admin/table/basic',
            },
            {
                title: 'Senior Table',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: 'Text',
        key: '/admin/rich'
    },
    {
        title: 'City Management',
        key: '/admin/city'
    },
    {
        title: 'Order Management',
        key: '/admin/order',
        btnList: [
            {
                title: 'Order Details',
                key: 'detail'
            },
            {
                title: 'Finish',
                key: 'finish'
            }
        ]
    },
    {
        title: 'User Management',
        key: '/admin/user'
    },
    {
        title: 'Bike Map',
        key: '/admin/bikeMap'
    },
    {
        title: 'Chart',
        key: '/admin/charts',
        children: [
            {
                title: 'Bar Chart',
                key: '/admin/charts/bar'
            },
            {
                title: 'Pie Chart',
                key: '/admin/charts/pie'
            },
            {
                title: 'Line Chart',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: 'Permission',
        key: '/admin/permission'
    },
];
export default menuList;