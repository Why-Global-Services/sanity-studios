import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md';

export default defineType({
    name: 'BlogDetails',
    title: 'BlogDetails',
    type: 'document',
    icon,
    fields:[
    defineField({
      name:'Image',
      title:"Select The Image",
      type:"array",
      of:[
        { type: "block" },
      ]
    }),
    defineField({
        name:"directorName",
        title:"Director Name",
        type:"array",
        of:[
            {
                type:"object",
                fields:[
                    {
                        name:"image",
                        title:"image",
                        type:"image",
                    },
                    {
                        name:"Name",
                        title:"Name",
                        type:"string",
                    },
                    {
                        name:"Content",
                        title:"Content",
                        type:"text",
                        rows:"5",
                    }
                ]
            }

        ]
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
          title: "BlogDetails",
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
    },
  })