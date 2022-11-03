import express, { Request, Response } from 'express'; 
import nodeHtmlToImage from "node-html-to-image";
import fs from 'fs';
import GeneratePost from './GeneratePost';

const app = express();

// Collect html
const html = fs.readFileSync('./src/templates/index.html', 'utf-8');
const css = fs.readFileSync('./src/templates/styles.css', 'utf-8');
const styledHtml = html.replace(/<link rel=.stylesheet.+>/, `<style>\n${css}\n</style>`);

app.use(express.static('src/templates'));

app.get(`/image`, async function(req: Request, res: Response) {
    const image = await GeneratePost({
        title: "A Test Title", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        date: "ongeveer nu", 
        time: new Date().toLocaleTimeString(), 
        location: "Discord",
        imageURL: "https://www.tastingtable.com/img/gallery/why-you-should-leave-the-skin-on-pears/intro-1653326060.jpg"
    });
    res.writeHead(200, {'Content-Type': 'image/png'}); 
    res.end(image, 'binary');
});

app.listen(3000);

console.log("Test unfilled html at localhost:3000/image"); 
console.log("Preview image at localhost:3000/index.html"); 