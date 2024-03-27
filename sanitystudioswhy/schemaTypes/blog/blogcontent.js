import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md';

export default defineType({
    name: 'BlogPage',
    title: 'Blog Page',
    type: 'document',
    icon,
    fields:[
    defineField({
      name:'Image',
      title:"Select The Image",
      type:"image"
    }),
    defineField({
        name:'name',
        title:'Name',
        type:'string',
    }),
    defineField({
        name:'category',
        title:"Genre",
        type:'string',
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
          title: "BlogPage",
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
    },
  })