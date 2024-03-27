import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md';

export default defineType({
    name: 'WhatWeDo',
    title: 'What We Do',
    type: 'document',
    icon,
    fields:[
    defineField({
      name:'Image',
      title:"Select The Image",
      type:"image",
    }),
    defineField({
        name:"Name",
        title:" Name",
        type:"string",
    }),
    defineField({
        name:"Description",
        title:"Description",
        type:"text",
        rows:5,
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
    //   prepare(selection) {
    //     const year = selection.date && selection.date.split('-')[0]
    //     const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
    //     return {
    //       title: "BlogDetails",
    //       date: selection.date,
    //       subtitle: cast,
    //       media: selection.media,
    //     }
    //   },
    },
  })