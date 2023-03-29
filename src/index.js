/* eslint-disable */
// import { AuthType } from '@qlik/sdk';
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    //connectionType: '<AuthType.SOME_CONNECTION_TYPE>',
    url: 'qap.sebrae.com.br/usina',
    appId: '96a7d192-860d-4ecc-90e7-a404e81154b2',

    // you should use only one of below keys
    // based on your `connectionType`
    // clientId: '<Qlik OAuth client id>',
    // webIntegrationId: '<Qlik web integration id>',
  });

  const n = embed(app);

  const fieldName = 'REGIAO_TURISTICA'; // Should refer to a field in your app
  const options = {
    title: "Filtro de Município" // Overrides fieldname to set a custom title
  };
  



  // n.render({});

  (await n.selections()).mount(document.querySelector(".curr-selections"));

  n.render({
    element: document.querySelector('.object'),
    id: 'e3816763-68f3-4ffe-956f-824e62eb626d',
  });

  n.render({
    element: document.querySelector('.barra'),
    id: '584af1eb-196d-4005-8c83-b3fac6e4cbc7',
  });


  
  n.render({
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






  
}

run();
