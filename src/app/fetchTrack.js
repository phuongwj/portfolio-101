const axios = require("axios");

const play = async () => {
    try {
        const response = await axios.get("/.netlify/functions/lastfm");
        console.log("this is data: ", response.data);
    } catch (error) {
        console.log("Error fetching track: ", error);
    }
};

play();