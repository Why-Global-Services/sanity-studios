import {defineField, defineType} from 'sanity';

export default defineType({
    name:"OurClient",
    title:"Our client",
    type:"document",
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
    fields: [
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
            name:"ourClient",
            title:"Our Client Page",
            group:"Main",
            type:'array',
            of:[
              {type:"reference",
                to:[
                  {type:"AssociatePartners"},
                  {type:"EventClients"},
                  {
                    type:"Tvshowsclient",
                  },
                ]
              },
          // {
          //   type:"reference",
          // },
          // {
          //   type:"reference",
          //   to:{
          //     type:"Tvshowsclient"
          //   }
          // }
        ]
          })
    ],
    preview: {
      select: {
        title: 'partnersname',
        date: 'releaseDate',
        media: 'SelectTheImage',
        // castName0: 'castMembers.0.person.name',
        // castName1: 'castMembers.1.person.name',
      },
      prepare(selection) {
        const year = selection.date && selection.date.split('-')[0]
        const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
      
        return {
          title: "Our Clients",
          date: selection.date,
          subtitle: cast,
          media: selection.media,
        }
      },
     
    },

})