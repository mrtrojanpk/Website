function createNewPage() {
  // Generate a unique file name
  const fileName = `newfile${Date.now()}.html`;
  
  // Create a new HTML file with a link to a new CSS file
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Page</title>
  <link rel="stylesheet" type="text/css" href="${fileName.replace('.html', '.css')}">
</head>
<body>
  <h1>New Page</h1>
  <p>Welcome to the new page!</p>
  <script src="${fileName.replace('.html', '.js')}"></script>
</body>
</html>`;
  
  // Create a new Blob with the HTML content
  const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
  
  // Create a new URL for the HTML Blob
  const htmlURL = URL.createObjectURL(htmlBlob);
  
  // Create a new link element for the HTML file
  const htmlLink = document.createElement('a');
  htmlLink.href = htmlURL;
  htmlLink.download = fileName;
  
  // Append the link element to the document body and click it to download the HTML file
  document.body.appendChild(htmlLink);
  htmlLink.click();
  
  // Create a new CSS file
  const cssContent = `/* CSS for the new page */`;
  const cssBlob = new Blob([cssContent], { type: 'text/css' });
  const cssURL = URL.createObjectURL(cssBlob);
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = cssURL;
  document.head.appendChild(cssLink);
  
  // Create a new JavaScript file
  const jsContent = `// JavaScript for the new page`;
  const jsBlob = new Blob([jsContent], { type: 'text/javascript' });
  const jsURL = URL.createObjectURL(jsBlob);
  const jsScript = document.createElement('script');
  jsScript.type = 'text/javascript';
  jsScript.src = jsURL;
  document.body.appendChild(jsScript);
}
