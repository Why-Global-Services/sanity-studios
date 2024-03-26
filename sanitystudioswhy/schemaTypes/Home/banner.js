import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'Banner',
  title: 'Banner',
  type: 'document',
  icon,
 fields:[
defineField({
    name:'bannerContent',
    title:"Bannercontent",
    type:"string"
})
 ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: "Banner",
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
