import { ParsedRequest } from "./types";

function getCss() {
  return `
 @font-face {
     font-family: 'Fira Sans', sans-serif;
     font-style: normal;
     font-weight: normal;
}
 @font-face {
     font-family: 'Fira Sans', sans-serif;
     font-style: normal;
     font-weight: bold;
}
 @font-face {
     font-family: 'Nunito', sans-serif;
     font-style: normal;
     font-weight: normal;
}
 * {
     box-sizing: border-box;
}
 html, body, #root {
     min-height: 100%;
     margin: 0;
     color: #183749;
}
h1 {
  font-family: 'Fira Sans', sans-serif;
  font-size: 9.6vh;
  font-style: normal;
  font-weight: 600;
  line-height: 11.5vh;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 0;
}

p,
li {
  font-family: 'Nunito', sans-serif;
  font-size: 3vh;
  font-style: normal;
  font-weight: 400;
  line-height: 4.8vh;
  letter-spacing: 0em;
  text-align: left;
}

img {
  object-fit: contain;
  object-position: center;
}

.Press .post-container .post-titleblock {
	background-color: #ee6b47;
	border-radius: 4.45vh;
	color: #fff;
	padding: 4.27vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Press .post-container .post-titleblock .header {
	display: flex;
	flex-flow: row wrap;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
}

.Press .post-container .post-titleblock .header .header-logo {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
}

.Press .post-container .post-titleblock .header .header-logo .logo {
	max-height: 8.9vh;
	margin: 1.78vh;
}

.Press .post-container .post-titleblock .header .header-logo .perch-logo {
	height: 8.9vh;
	margin-left: auto;
}

.Press .post-container .post-titleblock .release-title {
	margin-top: 4.27vh;
	margin-bottom: 4.27vh;
}
.Press .post-container .post-titleblock .release-title h1 {
	font-size: 8vh;
	line-height: 8.9vh;
	text-align: center;
}
.Press .post-container .post-titleblock .partner-logo {
	display: flex;
	align-items: center;
	justify-content: center;
}
`;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text, date, partnerLogo } = parsedReq;
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600&family=Nunito:wght@400;800&display=swap"
      rel="stylesheet"
    />
    <style>
      ${getCss()}
    </style>
  </head>
  <body>
    <article class="Press">
      <div class="post-container">
        <div class="post-titleblock">
          <div class="header">
            <div class="header-logo">
              <div class="logo">
                ${getPerchLogo()}
              </div>
            </div>
            <div class="header-text">
              <p>Press Release - ${date}</p>
            </div>
          </div>
          <div class="release-title">
            <h1>
              ${text}
            </h1>
          </div>
          ${partnerLogo ?
          `<div class="partner-logo">
            <img src="${partnerLogo}" />
          </div>`
          : `<div></div>`}
        </div>
      </div>
    </article>
  </body>
</html>`;
}

function getPerchLogo() {
  return `                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 287.78 98.6"
                  fill="white"
                  class="perch-logo"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #317ca8;
                      }
                      .cls-2 {
                        fill: #ed6a48;
                      }
                    </style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_2-2" data-name="Layer 2">
                      <path
                        fill="current"
                        d="M137.42,17.85c8.52,0,15.18,6.66,15.18,17s-6.66,17.28-15.18,17.28a13.57,13.57,0,0,1-11-5.28V67.47H118V18.39h8.4v4.8A13.28,13.28,0,0,1,137.42,17.85Zm-2.22,7.38c-4.5,0-8.76,3.48-8.76,9.78s4.26,9.78,8.76,9.78,8.82-3.6,8.82-9.9S139.76,25.23,135.2,25.23Z"
                      ></path>
                      <path
                        fill="current"
                        d="M173.24,52.17c-9.66,0-16.68-6.72-16.68-17.16s6.84-17.16,16.68-17.16c9.6,0,16.38,6.54,16.38,16.44a19.63,19.63,0,0,1-.24,3.24h-24.3c.42,4.92,3.78,7.68,8,7.68a6.85,6.85,0,0,0,6.66-4h9.06C187,47.31,181.46,52.17,173.24,52.17Zm-8.1-20.28h15.78c-.12-4.38-3.6-7.14-7.92-7.14C169,24.75,165.8,27.33,165.14,31.89Z"
                      ></path>
                      <path
                        fill="current"
                        d="M204.14,51.63h-8.4V18.39h8.4v5.16a11.53,11.53,0,0,1,10.2-5.64v8.82h-2.22c-5,0-8,1.92-8,8.34Z"
                      ></path>
                      <path
                        fill="current"
                        d="M234.26,17.85c8.28,0,13.86,4.32,15.66,11.76h-9.06A6.53,6.53,0,0,0,234.2,25c-4.68,0-7.8,3.54-7.8,10s3.12,10,7.8,10c3.48,0,5.64-1.56,6.66-4.56h9.06c-1.8,7.08-7.38,11.76-15.66,11.76-9.6,0-16.44-6.72-16.44-17.16S224.66,17.85,234.26,17.85Z"
                      ></path>
                      <path
                        fill="current"
                        d="M256.1,7.23h8.4v15.3a12.77,12.77,0,0,1,10.32-4.62c7.5,0,13,5,13,14.22v19.5h-8.4V33.27c0-5.34-2.94-8.22-7.38-8.22s-7.5,2.88-7.5,8.22V51.63h-8.4Z"
                      ></path>
                      <path
                        fill="current"
                        d="M133.55,84.42a8.91,8.91,0,0,0,6.54,2.85c3,0,4.16-1.46,4.16-2.82,0-1.86-2.21-2.42-4.72-3.07-3.38-.84-7.35-1.83-7.35-6.2,0-3.41,3-6.05,7.54-6.05A10.76,10.76,0,0,1,147.47,72l-2.08,2.7a8.4,8.4,0,0,0-6-2.35c-2.14,0-3.5,1-3.5,2.57s2.1,2.14,4.55,2.76c3.41.87,7.48,1.92,7.48,6.42,0,3.44-2.42,6.38-8,6.38a11.08,11.08,0,0,1-8.41-3.28Z"
                      ></path>
                      <path
                        fill="current"
                        d="M152.21,69.44h14.17v3.19H155.84V78h10.32v3.19H155.84v5.74h10.54v3.19H152.21Z"
                      ></path>
                      <path
                        fill="current"
                        d="M174.66,75.05V90.12H171V69.44h3.72l10.57,14.67V69.44H189V90.12h-3.5Z"
                      ></path>
                      <path
                        fill="current"
                        d="M195,84.42a8.91,8.91,0,0,0,6.54,2.85c3,0,4.16-1.46,4.16-2.82,0-1.86-2.21-2.42-4.72-3.07-3.38-.84-7.35-1.83-7.35-6.2,0-3.41,3-6.05,7.54-6.05A10.76,10.76,0,0,1,208.88,72l-2.08,2.7a8.4,8.4,0,0,0-6-2.35c-2.14,0-3.5,1-3.5,2.57s2.1,2.14,4.55,2.76c3.41.87,7.48,1.92,7.48,6.42,0,3.44-2.42,6.38-8,6.38a11.08,11.08,0,0,1-8.41-3.28Z"
                      ></path>
                      <path
                        fill="current"
                        d="M213.62,69.44h3.63V90.12h-3.63Z"
                      ></path>
                      <path
                        fill="current"
                        d="M226.21,75.05V90.12h-3.63V69.44h3.72l10.57,14.67V69.44h3.63V90.12H237Z"
                      ></path>
                      <path
                        fill="current"
                        d="M255.75,69.1a9.71,9.71,0,0,1,8.34,4.31l-3,1.67a6.56,6.56,0,0,0-5.36-2.75c-4.09,0-7.13,3.13-7.13,7.47s3,7.5,7.13,7.5a7.57,7.57,0,0,0,4.9-1.86V82.22h-6.17V79h9.8v7.75a11.21,11.21,0,0,1-8.53,3.76c-6,0-10.85-4.25-10.85-10.73S249.77,69.1,255.75,69.1Z"
                      ></path>
                      <circle
                        fill="current"
                        cx="61.53"
                        cy="29.5"
                        r="4.1"
                      ></circle>
                      <path
                        fill="current"
                        d="M43.85,74.84a12.27,12.27,0,0,0,8.39-21.21l-1.1-.91L44.27,47,28.55,65.76,32,68.66l7.05-8.43,5.33,4.46-7,8.32A12.24,12.24,0,0,0,43.85,74.84Z"
                      ></path>
                      <path
                        fill="current"
                        d="M49.3,0A49.31,49.31,0,0,0,7.2,75l7.86-9.4,10-12,3.33-4L41.75,33.68l8,6.71h0l7.33,6.14A20.79,20.79,0,0,1,43.85,83.37c-.44,0-.88,0-1.32,0a20.7,20.7,0,0,1-11.28-4.21A18.71,18.71,0,0,1,29.8,77.9l-6.72-5.61L13.75,83.44A49.3,49.3,0,1,0,49.3,0ZM61.53,41.73A12.23,12.23,0,1,1,73.75,29.5,12.23,12.23,0,0,1,61.53,41.73ZM76,34.34V24.65l8.4,4.85Z"
                      ></path>
                    </g>
                  </g>
                </svg>`
}
