import axios from 'axios'



class ApiServices {
  static async listLeague() {

    try {
      const response = await axios({
        method: 'GET',
        url: "https://www.api-football.com/demo/api/v2/leagues",
        // headers: sheaders,
        data: null
      });
      console.log('xo', response)
      return response;

    } catch (error) {
      console.log(error);
    }
  }

  static async teamLeague(param) {

    try {
      const response = await axios({
        method: 'GET',
        url: `https://www.api-football.com/demo/api/v2/teams/league${param}`,
        // headers: sheaders,
        data: null
      });
      console.log('xo api', response)
      return response;

    } catch (error) {
      console.log(error);
    }
  }
}

export default ApiServices;