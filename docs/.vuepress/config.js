const { resolve } = require('path')

module.exports = {
    plugins: [
	    'code-switcher'
    ],
    title: 'blurple.js',
    description: 'The blurple.js Discord Bot Framework',
    themeConfig: {
        repo: 'blurplejs/runtime',
        docsRepo: 'blurplejs/docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Testing',
                link: '/testing/'
            }
        ],
        sidebar: {
            '/guide/': getGuideSidebar(),
            '/testing/': getTestingSidebar()
        }
    }
}

function getGuideSidebar () {
    return [
        ['', 'Start'],
        {
            title: 'Runtime',
            collapsable: false,
            children: [
                'runtime/installation',
                'runtime/configuration',
                'runtime/usage'
            ]
        },
        {
            title: 'Bot Extensions',
            collapsable: false,
            children: [
                'extensions/setup',
                'extensions/api',
                'extensions/example'
            ]
        }
    ]
}

function getTestingSidebar () {
    return [

    ]
}