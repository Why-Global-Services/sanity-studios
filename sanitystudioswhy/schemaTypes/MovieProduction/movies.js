import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name: 'Movie',
    title: 'Movie',
    type: 'document',
    icon,
    fields: [
      defineField({
        name: 'Image',
        title: 'Select Movie Image',
        type: 'image',
      }),
      defineField({
          name: "MovieName",
          title: "Title",
          type:"string",    
      }),
      defineField({
          name:"Category",
          title:"category",
          type:"string"
      }),
      
    ],
    preview: {
      select: {
        title: 'MovieName',
        date: 'releaseDate',
        media: 'Image',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: 'Movie',
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })