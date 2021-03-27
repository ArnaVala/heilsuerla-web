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
                  buildHookId: '60411cc5d3ff0e00c358cd82',
                  title: 'Blog Website',
                  name: 'heilsa',
                  apiId: '8e011d9a-ff9d-4946-9da2-6c5dae14f43c'
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
          {title: 'Frontend', value: 'https://heilsa.netlify.app', category: 'apps'}
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
