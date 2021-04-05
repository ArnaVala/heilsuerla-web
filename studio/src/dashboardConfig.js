export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60411cc5ac689600da5ddba4',
                  title: 'Sanity Studio',
                  name: 'heilsa-studio',
                  apiId: '30a69399-0ddd-41d4-a21e-69e7d2346f77'
                },
                {
                  buildHookId: '6069e5a7d0439f9abf9f0ac1',
                  title: 'HeilsuErla.is',
                  name: 'heilsuerla',
                  apiId: 'e37dfc92-000b-41dc-b5ea-14e90e18700c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArnaVala/heilsa',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://www.heilsuerla.is', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
