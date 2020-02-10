# fboeller.github.io
My personal resume

## Setup

The resume uses JSON Resume (https://jsonresume.org/) to compile an html file from the resume.json specification.

The compiled version uses the theme "kendall".
To use it, it must be installed globally with npm.
  
  `npm install -g resume-cli jsonresume-theme-kendall`
  
Then the index.html can be generated with

  `resume export -t kendall index.html`

