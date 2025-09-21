import fs from 'fs';

// Read the file
async function readVisitorCountFile() {
    const file = await fs.readFileSync('src/local-json/visitor-count.json', 'utf-8');
    const obj = JSON.parse(file);

    return obj;
}

// Update the counter inside the JSON file.
// async function incrementCounter() {
//     const fileJson = await readVisitorCountFile();
//     fileJson.count++;
//     await fs.writeFile(
//         'src/local-json/visitor-count.json', 
//         JSON.stringify(fileJson)
//     );

//     return fileJson.count;
// }

// Get the counter from the json file.
export async function GET() {
    const fileJson = await readVisitorCountFile();
    return new Response(JSON.stringify(fileJson));
}

// Send a update to the counter in the JSON file.
// export async function POST() {
//     const count = await incrementCounter();
//     return Response.json({ count });
// }