import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name: 'TvAdvertisement',
    title: 'Tv Advertisement',
    type: 'document',
    icon,
    fields: [
      defineField({
        name: 'Image',
        title: 'Tv Shows Url',
        type: 'text',
        placeholder:"(kindly Copy the Source from the Embeded Link Provided in Youtube )",
        rows:3
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
    ],
    preview: {
      select: {
        title: 'Title',
        date: 'releaseDate',
        media: 'image',
     
      },
      // prepare(selection) {
      //   const year = selection.date && selection.date.split('-')[0]
      //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
      //   return {
      //     title: 'Titles',
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })