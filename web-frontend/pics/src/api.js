import axios from 'axios'

async function searchImages(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            "Authorization": "Client-ID 5nSoa6-CG7Ij3h3etjjLVL7E5GLW8ky3pnLlhTTUCn0",
            "Accept-Version": "v1"
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;