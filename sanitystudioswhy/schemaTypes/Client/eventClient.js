import {defineField, defineType} from 'sanity'
import { FaPeopleCarry as icon } from "react-icons/fa";

export default defineType({
    name: 'EventClient',
    title: 'Event Client',
    type: 'document',
    icon ,
   fields:[
  defineField({
      name:'Image',
      title:"Select The Event Client Image",
      type:"image"
  }),
  defineField({
    name:"Name",
    title:"Name",
    type:"string",
  })
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
      //     title: "Event Client",
      //     date: selection.date,
      //     subtitle: cast,
      //     media: selection.media,
      //   }
      // },
    },
  })