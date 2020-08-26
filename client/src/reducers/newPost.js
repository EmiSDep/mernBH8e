const INITIAL_STATE = {
    form: {
        poster: "",
        author: "",
        skillLevel: "",
        title: "",
        categories: "",
        link: "",
        resourceType: "",
        comments: [],
        likes: ""
    },
    loading: false,
    errors: {}
}

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE_QUERY":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload.field]: action.payload.value,
                },
            };
        case "SUBMIT_POST":
            return{
                ...state,
                errors: {},
                loading: true
            }
        case "SUBMIT_POST_SUCCESS":
            return {...INITIAL_STATE};
        case "SUBMIT_POST_FAIL":
            return {
            ...state,
            errors: action.payload,
            loading: false
        };
        default:
            return state;
    }
};