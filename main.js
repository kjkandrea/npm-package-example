import { getCatEmoji } from './cat.js'

document.querySelector('#app').innerHTML = `
 <h1>${getCatEmoji()}</h1>
`
