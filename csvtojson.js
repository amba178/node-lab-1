const http = require('http')//not using it
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
const csv = require('csvtojson')

const jsonData = []
const folderName = uuidv1()
const csvtojson = (file='./customer-data.csv') => {
	          csv().fromFile(file).on('json', (jsonObj) => {
	          	jsonData.push(JSON.stringify(jsonObj)+'\n')
	          }).on('done', (error) => {
	          	if(error)return(`Got error ${error.message}`)
	          	fs.mkdirSync(folderName)
	          	fs.writeFileSync(path.join(__dirname, folderName, 'file.json'), jsonData)
	          	console.log(`Finished converting csv to json, an array with ${jsonData.length} items.`)
	          })

}
csvtojson()