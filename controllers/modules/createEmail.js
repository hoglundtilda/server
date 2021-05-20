// const fs = require('fs'),
// path = require("path"),
// handlebars = require("handlebars"),
// Styliner = require('styliner')
// //baseDir = require("../../templates");


// exports.readHTMLFile = async (htmlTemplate, replacements) => {
//   console.log(htmlTemplate, replacements)
//   //const originalFile = path.join(__dirname, htmlTemplate);
//   //var options = { noCSS : true };
//   var styliner = new Styliner(__dirname + "../../templates");

//   const filePath = path.join(__dirname, htmlTemplate),
//   source = fs.readFileSync(filePath, "utf-8").toString(),
//   template = handlebars.compile(source),
//   Email = template(replacements);
  
//   const processedHTML = await styliner.processHTML(Email)
//         .then(function(processedSource) {
//             return processedSource
//         });

//         return processedHTML
//   };