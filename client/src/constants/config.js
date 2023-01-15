// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading : {
        title : 'Loading...',
        message : 'Data is being loaded, please wait.'
    },
    success : {
        title: 'Success',
        message : 'Data successfully loaded.'
    },
    responseFailure : {
        title : 'Error',
        message : 'An error occured while fetching response from the server. Please try again.'
    },
    requestFailure : {
        title : 'Error',
        message : 'An error occured while parsing data'
    },
    networkError : {
        title : 'Error',
        message : 'Unable to connect with the server. Please check internet connectivity'
    }

}

//api service call
export const SERVICE_URLS = {
     userSignup : {url: '/signup' , method : 'POST'},
     userlogin : {url: '/login' , method : 'POST'}
}