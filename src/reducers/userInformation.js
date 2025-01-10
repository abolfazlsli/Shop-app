const userinfo = {
    name:"newname",
    lastname:"",
    token:""
}


const stateHandler = (state=userinfo , action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case "CHANGE_USER_NAME" :
            return {
                ...state , name:action.data
            }
        default :
            return state
    }
}


export {stateHandler}