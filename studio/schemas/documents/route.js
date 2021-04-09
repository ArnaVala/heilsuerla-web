import client from 'part:@sanity/base/client'

function myAsyncSlugifier (input) {
  const query = '*[_id == $id][0]'
  const params = {id: input._ref}
  return client.fetch(query, params).then(doc => {
    return doc.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  })
}

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  initialValue: {
    useSiteTitle: false
  },
  fields: [
    {
      name: 'page',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      description: 'Veldu síðuna sem þú vilt birta á þessari slóð',
      to: [{type: 'page'}]
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      options: {
        source: 'page',
        // Read more: https://www.sanity.io/docs/slug-type
        slugify: myAsyncSlugifier
      }
    },
    {
      title: 'Use site title?',
      description:
        'Use the site settings title as page title instead of the title on the referenced page',
      name: 'useSiteTitle',
      type: 'boolean'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      type: 'openGraph'
    },
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'title'
    },
    prepare ({title, subtitle}) {
      return {
        title: ['/', title].join(''),
        subtitle
      }
    }
  }
}
