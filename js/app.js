
const fs = require("fs")

const x = require("./allData")

const validator = require("validator")

const data10 = require("./data10")
const yargs = require("yargs")

yargs.command({
  command: 'add',
  describe: "add a new person",
  builder: {
    id: {
      describe: " add id person",
      demandOption: true,
      type: "number"
    },
    fname: {
      descripe: " this is the first name",
      demandOption: true,
      type: "string"
    },
    lname: {
      describe: " this is the last name",
      demandOption: true,
      type: "string"
    },
  },
  handler: (item) => {
    data10.addPerson(item.id, item.fname, item.lname, item.age, item.city)
  }
})

yargs.command({
  command: 'delete',
  describe: "Delete a person by given id",
  handler: (item) => {
    data10.deleteData(item.id)
  }
})

yargs.command({
  command: 'read',
  describe: 'to read data',
  builder: {
    id: {
      describe: " add id person",
      demandOption: true,
      type: "number"
    },
  },
  handler: (item) => {
    data10.readData(item.id)
  }
})

yargs.command ({
  command : "list",
  describe : "to list data" ,
  handler : () => {
    data10.listData()
  }
})


yargs.parse()