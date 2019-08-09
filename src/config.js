// export default {
//   API_ENDPOINT: `https://https://pure-anchorage-38442.herokuapp.com//`,
//   API_KEY: process.env.REACT_APP_API_KEY,
// };

const prod = {
  url: {
    API_URL: `https://pure-anchorage-38442.herokuapp.com`,
    API_URL_USERS: `https://pure-anchorage-38442.herokuapp.com/users`,
  },
};
const dev = {
  url: {
    API_URL: `http://localhost:8000`,
  },
};
export const config = process.env.NODE_ENV === `development` ? dev : prod;
