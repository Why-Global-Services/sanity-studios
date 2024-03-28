import {defineField, defineType} from 'sanity'
import { RiMovie2Fill as icon } from "react-icons/ri";


// schemas/images.js

export default defineField({
    name: 'MovieDetail',
    title: 'Movie Detail',
    type: 'document',
    icon,
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
                          hotspot: true,
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
        {
          name:"storyline",
          type:"array",
          title:"Story Line",
          of:[
            {
              type:"object",
              fields:[{
                name:"line",
                title:"Story Line",
                type:"text",
                rows:4
              },{
                name:"Genres",
                title:"Genres",
                type:"string",
              
              },
              {
                name:"ReleaseDate",
                title:"Release Date",
                type:"string"
              },{
                name:"Languages",
                title:"Languages",
                type:"array",
                of:[
                  {
                    type:"object",
                    fields:[
                      {
                        name:"Language",
                        title:"Language",
                        type:"string",
                      },
                    ]
                  }]
              },{
                name:"Country",
                title:"Country",
                type:"text",
                rows:2
              }
            ]
            }
          ]
        },
        {
          name:"Technicalspecs",
          type:"array",
          title:"Technical specs",
          of:[
            {
              type:"object",
              fields:[{
                name:"Runtime",
                title:"RunTime",
                type:"string",
              
              },
              {
                name:"SoundMix",
                title:"Sound Mix",
                type:"string"
              },{
                name:"Color",
                title:"Color",
                type:"text",
                rows:2
              }
            ]
            }
          ]
        },
        {
          name:"FilmingProduction",
          type:"array",
          title:"Filming Production",
          of:[
            {
              type:"object",
              fields:[{
                name:"Fliming",
                title:"Fliming Location",
                type:"string",
              
              },
              {
                name:"FilmingDates",
                title:"Filming Dates",
                type:"string"
              },{
                name:"ProductionDates",
                title:"Production Dates",
                type:"text",
                rows:2
              }
            ]
            }
          ]
        },
        {
          name:"Sites",
          type:"array",
          title:"Sites",
          of:[
            {
              type:"object",
              fields:[
                {
                  name:"SiteName",
                  title:"Site Name",
                  type:"string",
                },
                {
                name:"Sites",
                title:"Sites",
                type:"string",
              },
             
            ]
            }
          ]
        }
    ],
    preview: {
        select: {
          title:'BannerContent.0.MovieName',
          date: 'releaseDate',
          media: 'BannerContent.0.image',
          // castName0: 'castMembers.0.person.name',
          // castName1: 'castMembers.1.person.name',
        },
        
      },
    })
  