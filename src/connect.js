import enigma from 'enigma.js';

export default function connectLocal({ url , appId }) {
  const loadSchema = () =>
    fetch('https://unpkg.com/enigma.js/schemas/12.612.0.json').then((response) => response.json());

  const createConnection = () =>
    loadSchema().then((schema) =>
      enigma
        .create({
          schema,
          url: `wss://${url}/app/${appId}`,
        })
        .open()
        .then((qix) => qix.openDoc(`${appId}`))
    );

  return createConnection().then(
    (app) => app
  );
}