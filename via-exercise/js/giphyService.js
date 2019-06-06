
import * as constants from './constants';

class GiphyService {
    
  constructor(){  }

  getSearchData(keywords){    
    let searchUrl = '' + constants.GIPHY_URLS.search + keywords + '&api_key=' + constants.API_KEY ;/* + '&limit=15';*/
    return fetch(searchUrl).then((response) => {
            return  response.json();
        });
  }
}

const giphyService = new GiphyService();
Object.freeze(giphyService);

export default giphyService;