require('dotenv').config(); 
const axios = require('axios');

exports.handler = async function () {
    try {
        const apiKey = process.env.LASTFM_API_KEY;
        const userName = "phuongwj";

        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "API key is missing"})
            };
        }

        const response = await axios.get(
            `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${apiKey}&format=json`
        );
        const track = response.data.recenttracks.track[0];

        if (track["@attr"]?.nowplaying) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    name: track.name,
                    artist: track.artist["#text"]
                })
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "No track currently playing"})
            };
        }
    } catch (error) {
        console.log("Error fetching track: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch track data"})
        };
    }
};
