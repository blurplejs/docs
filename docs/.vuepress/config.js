module.exports = {
    title: 'blurple.js',
    description: 'This is the blues.',
    base: '/docs/',
    themeConfig: {
        sidebar: [
            ['/', 'Start'],
            {
                'title': 'Runtime',
                collapsable: false,
                children: [
                    '/runtime/usage'
                ]
            },
            {
                'title': 'Extensions',
                collapsable: false,
                children: [
                    '/extensions/usage'
                ]
            }
        ]
    }
}
