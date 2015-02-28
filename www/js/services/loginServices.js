angular.module('login.services',[]).factory('login',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){

    return{

        getAllUsers:function(){
            return $http.get('https://api.parse.com/1/classes/login',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY
                }

            })
        },
        getUser: function (id) {
            return $http.get('https://api.parse.com/1/classes/login'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY
                }
            })
        },
        createUser: function(data){
            return $http.post('https://api.parse.com/1/classes/login',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY
                }
            })
        }


    }


}]).
    value('PARSE_CREDENTIALS',{
        APP_ID: '5NTlYIVzYAQbyjaxqrbx7KYVkcCQpWJhEjtb1Gjr',
        REST_API_KEY:'N1mlOgaEw38BXZsdWJKCgD0H7YNJUraHBg1aMlVg'
    });