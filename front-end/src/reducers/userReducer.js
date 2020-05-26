  
const userState = {
    id: "",
    name: "Frank Johnson",
    email: "Frank@email.com",
    bio: " testing"
   
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;