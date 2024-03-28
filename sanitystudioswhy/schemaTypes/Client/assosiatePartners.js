import {defineField, defineType} from 'sanity'
import { FaUserFriends as icon } from "react-icons/fa"

export default defineType({
    name: 'AssociatePartners',
    title: 'Associate Partners',
    type: 'document',
    icon,
   fields:[
    defineField({
    name:"partnersname",
    title:"Associate Partner Name",
    type:"string"
    }),
  defineField({
      name:'SelectTheImage',
      title:"Associate Partner Image",
      type:"image"
  }),
   ],
    preview: {
      select: {
        title: 'partnersname',
        date: 'releaseDate',
        media: 'SelectTheImage',
        castName0: 'castMembers.0.person.name',
        castName1: 'castMembers.1.person.name',
      },
     
    },
  })