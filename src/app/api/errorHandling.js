const errorHandling = {
    //Format error logs
    graphiqlError(error) {
        error.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ));
    },
    networkError(error) {
        console.log(`[Network error]: ${error}`);
    },

    //Format error messages
    formatErrorMessage(error) {
        console.log()
        let message;
        switch (error.message) {
            case 'GraphQL error: USER_EMAIL_INVALID_EXISTS':
                message = 'Email exists, please try with a different email'
                break;
            case 'GraphQL error: USER_USERNAME_INVALID_EXISTS':
                message = 'Username exists already'
            break;
            case 'GraphQL error: USER_EMAIL_INVALID_FORMAT':
                message = 'Email is invalid'
            break;
            default:
                message = 'Something went wrong'
                break;
        }
        return message
    }
}

export default errorHandling