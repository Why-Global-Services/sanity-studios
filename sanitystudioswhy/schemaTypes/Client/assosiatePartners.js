import {defineField, defineType} from 'sanity'
import { FaUserFriends as icon } from "react-icons/fa"

export default defineType({
    name: 'AssociatePartners',
    title: 'Associate Partners',
    type: 'document',
    icon,
    groups:[
      {
        name:"seo",
        title:"SEO",
      },
      {
        name:"Main",
        title:"Main",
      }
    ],
   fields:[
    defineField({
      name:"metaTitle",
      title:"Meta Title",
      type:"string",
      group:"seo",
    }),
    defineField({
      name:"MetaDescription",
      title:"Meta Description",
      type:"string",
      group:"seo",
    }),
    defineField({
      name:"AllData",
      title:"All Data",
      type:"string",
      group:"seo",
    }),
    defineField({
      name:"FocusKeyword",
      title:"Focus Keyword",
      type:"string",
      group:"seo",
    }),
    defineField({
    name:"partnersname",
    title:"Associate Partner Name",
    type:"string",
    validation:Rule=>Rule.required(),
    group:"Main",
    }),
  defineField({
      name:'SelectTheImage',
      title:"Associate Partner Image",
      type:"image",
      validation:Rule=>Rule.required(),
      group:"Main",
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