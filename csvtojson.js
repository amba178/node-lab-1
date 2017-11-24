const http = require('http')//not using it
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
const csv = require('csvtojson')

const jsonData = []

const csvtojson = (file='./customer-data.csv') => {
	          csv().fromFile(file).on('json', (jsonObj) => {

	          	jsonData.push(JSON.stringify(jsonObj)+'\n')
	          	if(jsonData.length===1000){
	          	   const folderName = uuidv1()
	          	   fs.mkdirSync(folderName)
	          	   fs.writeFileSync(path.join(__dirname, folderName, 'file.json'), jsonData)
	          	}
	          }).on('done', (error) => {
	          	if(error)return `Got error ${error}`
	          	console.log('done converting the csv to json.')
	          })

}
csvtojson()