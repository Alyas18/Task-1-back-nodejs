const fs = require('fs');
const allData = require('./allData.js')

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData()

  const DuplicatedData = allData.filter((obj) => {
    return obj.id === id
  })

  console.log(DuplicatedData)


  if (DuplicatedData.length === 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    })

    saveAllData(allData)

    console.log("Item Added")
  } else {
    console.log("ERROR DUPLICATED ID")

  }
}

////////////////////////////////////////////////////////////////
const loadData = () => {
  try {
    const datajson = fs.readFileSync('data10.json').toString();
    return JSON.parse(datajson);
  }
  catch {
    return [];
  }

}

//////////////////////////////////////////////////////////////////////////////
const saveAllData = (data) => {
  const alldatajson = JSON.stringify(data);
  fs.writeFileSync("data10.json", alldatajson)

}

//////////////////////////////////////////////////////////////////////////////
const deleteData = (id) => {
  const allData = loadData();

  const datatokeep = allData.filter((data) => {
    return data.id !== id
  })

  saveAllData(datatokeep)

  console.log("you have deleted an Item Now")

}

///////////////////////////////////////////////////////////////////////////
const readData = (id) => {
  const allData = loadData();

  const itemfind = allData.find((data) => {
    return data.id === id
  })

  if (itemfind) {
    console.log("id is " + itemfind.id + " " + itemfind.fname + " " + itemfind.lname + ", " + itemfind.age + " years old " + ", lives in " + itemfind.city)
  } else {
    console.log("id needed not found")
  }
}

///////////////////////////////////////////////////////////////////////////
const listData = () => {
  const allData = loadData();

  allData.forEach((obj) => {
    console.log("First Name is " + obj.fname)
    console.log("Age is " + obj.age)
    console.log("City is " + obj.city)
    console.log("==========================================")
  })
}

//////////////////////////////////////////////////////////////////////////
module.exports = {
  addPerson,
  deleteData,
  readData,
  listData
}