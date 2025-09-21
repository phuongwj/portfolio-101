export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=phuongwj&api_key=${apiKey}&format=json`;

    const response = await fetch(url);
    const responseJson = await response.json();

    return Response.json(responseJson);
}