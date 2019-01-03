import gql from "graphql-tag";

const CONVERT_VIDEO_QUERY = gql`
query ConvertVideoQuery($url: String!) {
    convertVideo( url: $url)
}
`;

export {
    CONVERT_VIDEO_QUERY
};