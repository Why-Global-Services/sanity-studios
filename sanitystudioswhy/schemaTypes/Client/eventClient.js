import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name: 'EventClient',
    title: 'Event Client',
    type: 'document',
    icon,
   fields:[
  defineField({
      name:'Image',
      title:"Select The Event Client Image",
      type:"image"
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
          title: "Event Client",
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
    },
  })