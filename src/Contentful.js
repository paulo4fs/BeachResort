import { createClient } from 'contentful';

console.log(process.env.REACT_APP_API_ACCESS_TOKEN,'asdf');

export default createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});