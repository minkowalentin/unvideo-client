const errorHandling = {
    graphiqlError (error)  {
        error.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ));
    },
    networkError (error) {
        console.log(`[Network error]: ${error}`);
    }
}

export default errorHandling