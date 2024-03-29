import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md';
import { IoMdPerson as icon } from "react-icons/io";

export default defineType({
    name: 'AboutPage',
    title: 'AboutPage',
    type: 'document',
    icon,
    groups:[
        {
          name:"seo",
          title:"SEO",
        },
        {
          name:"Main",
          title:"Main",
        }
      ],
    fields:[
        defineField({
            name:"metaTitle",
            title:"Meta Title",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"MetaDescription",
            title:"Meta Description",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"AllData",
            title:"All Data",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"FocusKeyword",
            title:"Focus Keyword",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"about",
            title:"About",
            type:"array",
            group:"Main",
            of:[
              {
                type:"object",
                fields:[
                  {
                    name:'Image',
                    title:"Select The Image",
                    type:"image",
                    validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Name",
                      title:" Name",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Role",
                      title:"Role",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Description",
                      title:"Description",
                      type:"text",
                      rows:5,
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Facebook",
                      title:"FaceBook URL",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"LinkedIn",
                      title:"LinkedIn URL",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Youtube",
                      title:"YouTube URL",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                  {
                      name:"Twitter",
                      title:"Twitter URL",
                      type:"string",
                      validation:Rule=>Rule.required(),
                  },
                ]
              }
            ]
          })
    
   ],
    preview: {
      select: {
        title: 'Name',
        date: 'releaseDate',
        media: 'Image',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
    //   prepare(selection) {
    //     const year = selection.date && selection.date.split('-')[0]
    //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
    //     return {
    //       title: "BlogDetails",
    //       date: selection.date,
    //       subtitle: cast,
    //       media: selection.media,
    //     }
    //   },
    },
  })