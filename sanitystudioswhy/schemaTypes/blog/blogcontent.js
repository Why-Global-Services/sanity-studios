import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md';
import { FaBlog as icon } from "react-icons/fa";

export default defineType({
    name: 'BlogPage',
    title: 'Blog Page',
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
        name:"Blogbasic",
        title:"Blog Basic",
        type:"array",
        of:[
          {
            type:"object",
            fields:[
              {
                name: 'movieimage',
                title: 'Select Movie Image',
                type: 'image',
                validation:Rule=>Rule.required(),
                
              },{
                name: "title",
                title: "Title",
                type:"string",  
                validation:Rule=>Rule.required(),  
                
            },
            {
              name:"Category",
              title:"category",
              type:"string",
              validation:Rule=>Rule.required(),
              
          }
            ]
          }
        ]
      }),
      defineField({
        name:"BlogDetails",
        title:"Blog Details",
        type:"array",
        group:"Main",
        of:[{type:"reference",to:[{type:"BlogDetails"}]}]
      })
    ],
    preview: {
      select: {
        title: 'BlogPage',
        date: 'releaseDate',
        media: 'Image',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: "BlogPage",
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })