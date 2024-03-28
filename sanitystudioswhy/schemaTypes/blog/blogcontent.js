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
      name:'Image',
      title:"Select The Image",
      type:"image",
      validation:Rule=>Rule.required(),
      group:"Main",
    }),
    defineField({
        name:'name',
        title:'Name',
        type:'string',
        validation:Rule=>Rule.required(),
        group:"Main",
    }),
    defineField({
        name:'category',
        title:"Genre",
        type:'string',
        validation:Rule=>Rule.required(),
        group:"Main",
    })
   ],
    preview: {
      select: {
        title: 'name',
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