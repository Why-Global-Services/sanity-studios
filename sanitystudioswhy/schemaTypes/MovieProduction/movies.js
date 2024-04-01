import { defineField, defineType } from 'sanity'
import { MdLocalMovies as icon } from 'react-icons/md'

export default defineType({
  name: 'Movie',
  title: 'Movie',
  type: 'document',
  icon,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "Main",
      title: "Main",
    }
  ],
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "MetaDescription",
      title: "Meta Description",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "AllData",
      title: "All Data",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "FocusKeyword",
      title: "Focus Keyword",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "moviebasic",
      title: "Movie Basic",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: 'Image',
              title: 'Select Movie Image',
              type: 'image',
              validation: Rule => Rule.required(),
            },
            {
              name: "MovieName",
              title: "Title",
              type: "string",
              validation: Rule => Rule.required(),
            },
            {
              name: "Category",
              title: "category",
              type: "string",
              validation: Rule => Rule.required(),
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'Moviedetails',
      title: 'Movie Details',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'MovieDetail' }]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'Movie List',
      date: 'releaseDate',
      media: 'Image',
      // castName0: 'castMembers.0.person.name',
      // castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: 'Movies List',
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
