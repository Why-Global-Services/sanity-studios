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
            name:"url",
            title:"Link url",
            type:"string",
            group:"seo",
          }),
          defineField({
            name:"eventclient",
            title:"Event Client List",
           
            type:'array',
            of:[
              {type:"object",
              fields:[
                {
                  name:'Image',
                  title:"Select The Event Client Image",
                  type:"image",
                  validation:Rule=>Rule.required(),
                 
              },
              {
                name:"Name",
                title:"Name",
                type:"string",
                validation:Rule=>Rule.required(),
              }
              ]
            }
        ]
          }),

          defineField({
            name:"assosiatePartner",
            title:"Associate Partner List",
            type:"array",
            of:[
              {
                type:"object",
                fields:[
                  {
                  name:"partnersname",
                  title:"Associate Partner Name",
                  type:"string",
                  validation:Rule=>Rule.required(),
                  },
                  {
                    name:'SelectTheImage',
                    title:"Associate Partner Image",
                    type:"image",
                    validation:Rule=>Rule.required(),
                  }
                ],
              }
            ]
          
          }),
          defineField({
            name:"TvShowClients",
            title:"TV Show Clients",
            type:"array",
            group:"Main",
            of:[
              {
                type:"object",
                fields:[
                  {
                    name: 'Image',
                    title: 'TV  Show Image',
                    type: 'image',
                    options: {hotspot: true},
                    validation:Rule=>Rule.required(),
                    
                  },
                  {
                      name:"Name",
                      title:"Client Name",
                      type:"string",
                      validation:Rule=>Rule.required(),
                      
                  },
                  {
                      name:"Content",
                      title:"Content",
                      type:"text",
                      rows:10,
                      validation:Rule=>Rule.required(),
                      
                  },
                ]
              }
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