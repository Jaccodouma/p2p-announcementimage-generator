# Even snel een Peer2Peer post genereren

`npx nodemon` om de applicatie te runnen (als dev, ofc). 

**index.ts** bevat een express app die `GeneratePost()` aanroept om snel te kunnen testen.   
http://localhost:3000/image voor een ingevulde afbeelding.  
http://localhost:3001/index.html voor de html, maar deze is wel leeg. 

Ik gebruik:
- [node-html-to-image](https://www.npmjs.com/package/node-html-to-image#setting-output-image-resolution) om de image te genereren.
- [axios](https://www.npmjs.com/package/axios) om een afbeelding van het web te downloaden.
- [express](https://github.com/expressjs/express) als een simpele server. 

De icoontjes zijn van [fontawesome](https://fontawesome.com/icons). 