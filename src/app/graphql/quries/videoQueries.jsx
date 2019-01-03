import { CONVERT_VIDEO_QUERY } from '../videos.graphql';
import client from '../apollo.config';

async function convertVideo(url) {
    const {data} = await client.query({
      query: CONVERT_VIDEO_QUERY,
      variables: { url }
    });
    return data;
  }


export {
    convertVideo
} 