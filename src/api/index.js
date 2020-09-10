export function authHeader() {
    let authDetail = JSON.parse(localStorage.getItem('authDetail'));
    if (authDetail) {
        return { 
            'authorization': 'bearer ',
            'content-type': 'application/json',
        };
    } else {
        return {
            'content-type': 'application/json'
        };
    }
}
export function endPointConnect(url , data , succssType , failType ,dispatch) {
    fetch(`test`+url, data)
        .then(HandleResponse)
            .then(result => {
                dispatch({            
                    type : succssType,
                    payload : result,
                    error : ""
                });

            }).catch((error) => {
                dispatch({            
                    type : failType,
                    payload : "",
                    error : "Sorry, something went wrong. Please try again later."
                });
            });
}
export function HandleResponse(response) {
    return response.text().then(text => {
        if(!response.ok){
            var callStatus = response.status;
            if(callStatus === 401){
                localStorage.removeItem("browser");
                localStorage.removeItem("server");
                localStorage.removeItem("authDetail");
                localStorage.removeItem("notification");
                window.location.href =`${process.env.REACT_APP_LOGOUT_URL}`;
            }
            const error = "Sorry, something went wrong. Please try again later..";
            return Promise.reject(error);
        }        
        const data = text && JSON.parse(text);
        return data;
    });
}