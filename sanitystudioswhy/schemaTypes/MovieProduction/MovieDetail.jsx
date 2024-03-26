import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'


// schemas/images.js

export default defineField({
    name: 'MovieDetail',
    title: 'Images',
    type: 'document',
    fields: [
        {
            name: 'BannerContent',
            title: 'Banner Content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                      
                      {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                          hotspot: true, // Optional, for image cropping
                        },
                      },
                      {
                        name: 'Year',
                        title: 'Year',
                        type: 'string',
                      },
                      {
                        name:'MovieName',
                        title:'Movie Name',
                        type:'string',
                      },
                      {
                        name:"Description",
                        title:"Decription",
                        type:"text",
                        rows:4
                      },
                      {
                        name:"Trailer",
                        title:"Trailer Link",
                        type:"url",
                      },
                      {
                        name:"Time",
                        title:"Time Duration",
                        type:"string",
                      },
                      {
                        name:"Category",
                        title:"Category",
                        type:"string",
                      },
                      {
                        name:"ReleaseDate",
                        title:"Release Date",
                        type:"string"
                      },
                      {
                        name:"IMDBRating",
                        title:"IMDB Rating",
                        type:"number",
                      }
                    ],
                  },
            ],
        },
        {
            name: 'SecondContent',
            title: 'Network & Status',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                      
                      {
                        name: 'Network',
                        title: 'Network',
                        type: 'string',
                      },
                      {
                        name: 'Status',
                        title: 'Status',
                        type: 'string',
                      },
                      
                    ],
                  },
            ],
        },
        {
            name: 'Director',
            title: 'Director',
            type: 'array',
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
                      {
                        name: 'Category',
                        title: 'Category',
                        type: 'string',
                      },
                      {
                        name:'DirectorName',
                        title:'Director Name',
                        type:'string',
                      }
                    ],
                  },
            ],
        },
        {
            name: 'Writer',
            title: 'Writer',
            type: 'array',
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
                      {
                        name: 'Category',
                        title: 'Category',
                        type: 'string',
                      },
                      {
                        name:'WriterName',
                        title:'Writer Name',
                        type:'string',
                      }
                    ],
                  },
            ],
        },
        {
            name: 'CastAndCrew',
            title: 'Cast & Crew',
            type: 'array',
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
                      {
                        name: 'CastRole',
                        title: 'Cast Role',
                        type: 'string',
                      },
                      {
                        name:'CastName',
                        title:'Cast Name',
                        type:'string',
                      }
                    ],
                  },
            ],
        },
        {
            name: 'Posters',
            title: 'Posters',
            type: 'array',
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
                      },
                    ],
                  },
            ],
        },
        {
            name: 'Gallery',
            title: 'Image Gallery',
            type: 'array',
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
    ],
    preview: {
        select: {
          title: 'title',
          date: 'releaseDate',
          media: 'poster',
          castName0: 'castMembers.0.person.name',
          castName1: 'castMembers.1.person.name',
        },
        prepare(selection) {
          const year = selection.date && selection.date.split('-')[0]
          const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
    
          return {
            title: 'MovieDetail',
            date: selection.date,
            subtitle: cast,
            media: selection.media,
          }
        },
      },
    })
  