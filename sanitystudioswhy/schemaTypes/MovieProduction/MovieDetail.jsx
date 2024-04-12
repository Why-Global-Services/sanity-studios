import {defineField, defineType} from 'sanity'
import {RiMovie2Fill as icon} from 'react-icons/ri'

// schemas/images.js

export default defineField({
  name: 'MovieDetail',
  title: 'Movie Detail',
  type: 'document',
  icon,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'Main',
      title: 'Main',
    },
  ],
  fields: [
    {
      name: 'BannerContent',
      title: 'Banner Content',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Year',
              title: 'Year',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'MovieName',
              title: 'Movie Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Description',
              title: 'Decription',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Trailer',
              title: 'Trailer Link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Time',
              title: 'Time Duration',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ReleaseDate',
              title: 'Release Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'IMDBRating',
              title: 'IMDB Rating',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      name: 'SecondContent',
      title: 'Network & Status',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Network',
              title: 'Network',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Status',
              title: 'Status',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Director',
      title: 'Director',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Select Image',
              type: 'image',
              options: {
                hotspot: true, // Optional, for image cropping
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'DirectorName',
              title: 'Director Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Writer',
      title: 'Writer',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Select Image',
              type: 'image',
              options: {
                hotspot: true, // Optional, for image cropping
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'WriterName',
              title: 'Writer Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'CastAndCrew',
      title: 'Cast & Crew',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Select Image',
              type: 'image',
              options: {
                hotspot: true, // Optional, for image cropping
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'CastRole',
              title: 'Cast Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'CastName',
              title: 'Cast Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Posters',
      title: 'Posters',
      type: 'array',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Select Posters Image',
              type: 'image',
              options: {
                hotspot: true, // Optional, for image cropping
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Gallery',
      title: 'Image Gallery',
      type: 'array',
      group: 'Main',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Select Image',
              type: 'image',
              options: {
                hotspot: true, // Optional, for image cropping
              },
            },
          ],
        },
      ],
    },
    {
      name: 'storyline',
      type: 'array',
      title: 'Story Line',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'line',
              title: 'Story Line',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Genres',
              title: 'Genres',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ReleaseDate',
              title: 'Release Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Languages',
              title: 'Languages',
              type: 'array',
              validation: (Rule) => Rule.required(),
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'Language',
                      title: 'Language',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
            {
              name: 'Country',
              title: 'Country',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Technicalspecs',
      type: 'array',
      title: 'Technical specs',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Runtime',
              title: 'RunTime',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'SoundMix',
              title: 'Sound Mix',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Color',
              title: 'Color',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'FilmingProduction',
      type: 'array',
      title: 'Filming Production',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'Fliming',
              title: 'Fliming Location',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'FilmingDates',
              title: 'Filming Dates',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ProductionDates',
              title: 'Production Dates',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'Sites',
      type: 'array',
      title: 'Sites',
      group: 'Main',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'SiteName',
              title: 'Site Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Sites',
              title: 'Sites',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'BannerContent.0.MovieName',
      date: 'releaseDate',
      media: 'BannerContent.0.image',
      // castName0: 'castMembers.0.person.name',
      // castName1: 'castMembers.1.person.name',
    },
  },
})
