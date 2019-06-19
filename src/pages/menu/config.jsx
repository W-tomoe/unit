const ROUTES = [
    {
        icon: 'home',
        key: 'home',
        link: '/home',
        title: '数据总览'
    },
    {
        icon: 'zhihu',
        title: '学习管理',
        key: 'study',
        child: [
            {
                key: 'question',
                link: '/question',
                title: '问答'
            },
            {
                key: 'course',
                link: '/course',
                title: '课程'
            },
            {
                key: 'activity',
                link: '/activity',
                title: '活动'
            }
        ]
    },
    {
        icon: 'money-collect',
        title: '变现管理',
        key: 'cash',
        child: [
            {
                key: 'bid',
                link: '/bid',
                title: '招标'
            },
            {
                key: 'recommend',
                link: '/recommend',
                title: '推荐'
            }
        ]
    },
    {
        icon: 'inbox',
        title: '分类管理',
        key: 'classify',
        child: [
            {
                key: 'questionC',
                link: '/qsClassify',
                title: '问答'
            },
            {
                key: 'courseC',
                link: '/csClassify',
                title: '课程'
            },
            {
                key: 'activityC',
                link: '/acClassify',
                title: '活动'
            }
        ]
    },
    {
        icon: 'inbox',
        title: '营销管理',
        key: 'sellGroup',
        child: [
            {
                key: 'sellGroup',
                link: '/sellGroup',
                title: '拼团'
            }
        ]
    },
]

export default ROUTES