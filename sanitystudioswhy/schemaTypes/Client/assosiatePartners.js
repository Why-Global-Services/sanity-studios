import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
    name: 'AssociatePartners',
    title: 'Associate Partners',
    type: 'document',
    icon,
   fields:[
  defineField({
      name:'SelectTheImage',
      title:"Associate Partner Image",
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
     
    },
  })