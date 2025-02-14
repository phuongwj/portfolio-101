const axios = require('axios');

// const user = "phuongwj";
// const apiKey = "f73b3674aad62bb7f431dd81f58cb837";

const play = async function getCurrentTrack() {
    try {
        const response = await axios.get(
            'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=phuongwj&api_key=f73b3674aad62bb7f431dd81f58cb837&format=json'
        );

        const track = response.data.recenttracks.track[0];
        console.log(track)
        if (track["@attr"].nowplaying) {
            return {
                name: track.name,
                artist: track.artist["#text"]
            }
        } else {
            return null;
        } 

    } catch(error) {
        console.log("Error fetching track: ", error);
        return null;
    }
}

export default play;