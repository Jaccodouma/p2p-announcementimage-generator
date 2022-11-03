import nodeHtmlToImage from "node-html-to-image";
import fs from 'fs';
import axios from "axios";

export type PostContent = {
    title: string,
    description: string,
    date: string,
    time: string,
    location: string,
    imageURL: string
}

export default async function GeneratePost(content: PostContent) {

    // Create styled HTML
    const html = fs.readFileSync('./src/templates/index.html', 'utf-8');
    const css = fs.readFileSync('./src/templates/styles.css', 'utf-8');
    const styledHtml = html.replace(/<link rel=.stylesheet.+>/, `<style>\n${css}\n</style>`);

    // Convert imageURL into base64
    content.imageURL = 'data:image/jpeg;base64,' + await getBase64(content.imageURL);

    // Generate image
    const image = await nodeHtmlToImage({
        html: styledHtml,
        content
    });

    return image;
}

// https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64 
function getBase64(url: string) {
    return axios
        .get(url, {
            responseType: 'arraybuffer'
        })
        .then(response => Buffer.from(response.data, 'binary').toString('base64'))
}