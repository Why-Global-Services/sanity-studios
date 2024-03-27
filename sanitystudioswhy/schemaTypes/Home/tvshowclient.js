import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'Tvshowsclient',
  title: 'Tv Shows Client',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'Image',
      title: 'TV  Show Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
        name:"Name",
        title:"Client Name",
        type:"string",
    }),
    defineField({
        name:"Content",
        title:"Content",
        type:"text",
        rows:10,
    }),
  ],
  preview: {
    select: {
      title: 'Name',
      date: 'releaseDate',
      media: 'Image',
      // castName0: 'castMembers.0.person.name',
      // castName1: 'castMembers.1.person.name',
    },
    // prepare(selection) {
    //   const year = selection.date && selection.date.split('-')[0]
    //   const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

    //   return {
    //     title: 'Tv Shows Client',
    //     date: selection.date,
    //     subtitle: cast,
    //     media: selection.media,
    //   }
    // },
  },
})
