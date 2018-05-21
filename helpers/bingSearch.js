const axios = require('axios');

exports.bingSearch = (search) => {
    let encodedSearch = encodeURIComponent(search);

    return axios.get('https://api.cognitive.microsoft.com/bing/v7.0/search?q=' + encodedSearch, 
        {
            headers: { 'Ocp-Apim-Subscription-Key' : process.env.BING_SUBSCRIPTION_KEY }
        }
    )
    .then((response) => {
        return response.data.webPages;
    })
    .catch((error) => {
        console.log(error);
    })
}