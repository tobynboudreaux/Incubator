
export const initialUser = {
    id: 0,
    photoUrl: "https://a1-images.myspacecdn.com/images03/33/2fcf8d796bd94d7a9ef7f4dae774abee/600x600.jpg",
    firstName: "Steven Finkis",
    years: 1,
    techStack: "Master of everything",
    bio: "My discord account is: DaGuy#6942",
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