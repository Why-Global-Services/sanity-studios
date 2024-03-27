import {defineField, defineType} from 'sanity'
// import {MdLocalMovies as icon} from 'react-icons/md'
import { SiWebstorm as icon} from "react-icons/si";

export default defineType({
    name: 'WebSeries',
    title: 'Web series',
    type: 'document',
    icon,
    fields: [
      defineField({
        name: 'Image',
        title: 'Select Image',
        type: 'image',
      }),
      defineField({
        name:"Title",
        title:"Title",
        type:"string",
      }),
      defineField({
          name: "Content",
          title: "Content",
          type:"text",
          rows:10
      }),
      defineField({
        name:"IMDBRating",
        title:"IMDB Rating",
        type:"number",
      }),
      defineField({
        name:"ReleasingYear",
        title:"Releasing Year",
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