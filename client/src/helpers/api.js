/* @flow */




const host = 'localhost';
const port = 8888;
const apiURL = `http://${host}:${port}`;

export default async (url: string, options: Object) => {
//  const token = await AsyncStorage.getItem('jwtToken');
  const optionsWithHeaders = {
        ...options,
        headers: {
          ...options.headers,
          //Authorization: `Bearer ${token}`,
        },
      }
  return fetch(apiURL + url, optionsWithHeaders);
};
