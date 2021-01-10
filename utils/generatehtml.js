const generatehtml = ({
    name,
    projectTitle,
    projectDescription
  }) => {
    const htmlStringToWriteToFile = `
    <!DOCTYPE html>
    
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>README Generator</title>
        <!-- Bootstrap CSS link -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h1>Name:  ${name}</h1>
                    <h5>Project Title:  ${projectTitle}</h5>
                    <p>Project Description:  ${projectDescription}</p>
                    <p></p>
                    <a href="http://github.com">Github.com</a>
                    <a href="http://linkedin.com">LinkedIn.com</a>
                </div>    
            </div>   
        </div>
    </body>
    
    </html>`;
  
    return htmlStringToWriteToFile;
  };
  
  module.exports = generatehtml;
  
  