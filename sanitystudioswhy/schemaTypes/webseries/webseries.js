import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { SiWebstorm as icon} from "react-icons/si";

export default defineType({
    name: 'WebSeries',
    title: 'Web series',
    type: 'document',
    icon,
    groups:[
      {
        name:"seo",
        title:"SEO",
      },{
        name:"Main",
        title:"Main Content"
      }
    ],
    fields: [
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
        name: 'Image',
        title: 'Select Image',
        type: 'image',
        group:"Main",
        validation:Rule=>Rule.required(),
      }),
      defineField({
        name:"Title",
        title:"Title",
        type:"string",
        group:"Main",
        validation:Rule=>Rule.required(),
      }),
      defineField({
          name: "Content",
          title: "Content",
          type:"text",
          group:"Main",
          rows:10,
          validation:Rule=>Rule.required(),
      }),
      defineField({
        name:"IMDBRating",
        title:"IMDB Rating",
        type:"number",
        group:"Main",
        validation:Rule=>Rule.required(),
      }),
      defineField({
        name:"ReleasingYear",
        title:"Releasing Year",
        group:"Main",
        validation:Rule=>Rule.required(),
        type:"number"
      })
    ],
    preview: {
      select: {
        title: 'Title',
        date: 'releaseDate',
        media: 'Image',
        
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: 'WebSeries',
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })