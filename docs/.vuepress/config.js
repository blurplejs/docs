module.exports = {
    title: 'blurple.js',
    description: 'The blurple.js Discord Bot Framework',
    themeConfig: {
        repo: 'blurplejs/runtime',
        docsRepo: 'blurplejs/docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        sidebar: [
            ['/', 'Start'],
            {
                title: 'Runtime',
                collapsable: false,
                children: [
                    '/runtime/installation',
                    '/runtime/configuration',
                    '/runtime/usage'
                ]
            },
            {
                title: 'Bot Extensions',
                collapsable: false,
                children: [
                    '/extensions/usage',
                    '/extensions/example'
                ]
            }
        ]
    }
}
