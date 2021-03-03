
const initialUser = {
    id: 0,
    firstName: "",
    years: 0,
    techStack: "",
    bio: "",
}

export const userReducer = (state = initialUser, action) => {

    switch (action.type)
    {
        case "SET_USER":
            return {...action.payload};
        default:
            return initialUser;
    }
}