export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff894a9de87070babd53692',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wpw3xiib',
                  apiId: 'be64462e-2093-4e54-9a01-ca9d0caefa5a'
                },
                {
                  buildHookId: '5ff894a9b03b465afdf4e13b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gkpivuoq',
                  apiId: '8f7c644c-a86c-4a2e-be46-6c8dbb05a7be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swaminator/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gkpivuoq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
