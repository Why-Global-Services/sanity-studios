import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md';
import { RiAdvertisementLine as icon } from "react-icons/ri";

export default defineType({
    name: 'Ads',
    title: 'Ads',
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
      name:'URL',
      title:"ads URL",
      type:"text",
      rows:3,
      validation:Rule=>Rule.required(),
      group:"Main",
    }),
    defineField({
      name:"name",
      title:"Name",
      type:"string",
      validation:Rule=>Rule.required(),
      group:"Main",
    })
   ],
    preview: {
      select: {
        title: 'name',
        date: 'releaseDate',
        media: 'poster',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: "Ads",
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })