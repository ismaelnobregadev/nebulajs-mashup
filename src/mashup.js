(async () => {
    /********BE CAREFUL WHAT YOU DELETE BELOW THIS LINE********/
    
    // Get the configuration information from the config.js file
    const config = await await fetch("config").then((response) =>
      response.json()
    );
  
  
 
  
    // Build the websocket URL to connect to the Qlik Sense applicaiton
    const url = `wss://${config.tenantDomain}/app/${
      config.appId
    }`;
  
    // Fetch the schema for communicating with Qlik's engine API
    const schema = await (
      await fetch("https://unpkg.com/enigma.js/schemas/12.612.0.json")
    ).json();
  
    // Create Qlik engine session
    const session = window.enigma.create({ schema, url });
  
    // Open the application
    const app = await (await session.open()).openDoc(config.appId);
  
    /********BE CAREFUL WHAT YOU DELETE ABOVE THIS LINE********/
    
    const themeFile = await await fetch("themes/horizon").then((response) =>
      response.json()
    );
    console.log(themeFile);
  
    // Create embed configuration
    const nuked = window.stardust.embed(app, {
      themes: [
        {
          id: "horizon",
          load: () =>
            Promise.resolve({
              //fontFamily: "Arial, sans-serif",
              palettes: {
                data: [
                  {
                    scale: themeFile.theme.palettes.data[1].scale
                  }
                ]
              }
            })
        }
      ],
      context: { theme: "horizon" },
      types: [
        {
          name: "line-chart",
          load: () => Promise.resolve(window["sn-line-chart"])
        },
        {
          name: "barchart",
          load: () => Promise.resolve(window["sn-bar-chart"])
        }
      ]
    });
  
    // render viz
 /*    nuked.render({
      element: document.querySelector(".lines"),
      type: "mekko",
      fields: ["Country", "CategoryName", "=Sum([Sales])"]
    });
  
    nuked.render({
      element: document.querySelector("#bar"),
      id: "19194cab-989b-49d4-822a-106b1b9d597a"
    });
  
    (await nuked.selections()).mount(document.querySelector(".curr-selections")); */

    nuked.render({
        element: document.querySelector('.object'),
        id: 'e3816763-68f3-4ffe-956f-824e62eb626d',
      });
    
      nuked.render({
        element: document.querySelector('.barra'),
        id: '584af1eb-196d-4005-8c83-b3fac6e4cbc7',
      });
    
    
      
      nuked.render({
        element: document.querySelector('.lines'),
        type: 'line-chart',
        fields: ['ANO', '=[Histórico ADMISSÕES CAGED HOTELARIA]', '=[Histórico DEMISSÕES CAGED  HOTELARIA]'],
      
        // Overrides default properties
        properties: {
          title: 'Histórico de Admissões e Demissões',
          dataPoint: {
            show: true,
            showLabels: false,
          },
          gridLine: {
            auto: false,
          },
          preferContinuousAxis: false,
          
        },
      });

  })();
  