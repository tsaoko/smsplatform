import { SK_CONFIG } from "../config";

export default {
    getCafes: function () {
        return axios.get( SK_CONFIG.API_URL + '/cafes' );
    },
    getCafe: function( cafeID ) {
        return axios.get( SK_CONFIG.API_URL + '/cafes/' + cafeID);
    },
    postAddNewCafe: function(name, address, city, state, zip ) {
        return axios.post( SK_CONFIG.API_URL + '/cafes',
            {
                name: name,
                address: address,
                city: city,
                state: state,
                zip: zip
            });
    }
}