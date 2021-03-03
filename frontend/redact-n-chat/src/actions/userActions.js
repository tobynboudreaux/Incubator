const SET_USER = "SET_USER";

export const setUserInfo = (givenData) => {
    return {
        type: SET_USER,
        payload: givenData
    }
}