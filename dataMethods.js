const fs = require("fs");
////////////////////////////////////
function readDataInfo() {
    try {
        return JSON.parse(fs.readFileSync("./data-info.json").toString());
    } catch {
        return [];
    }
}

function writeDataInfo(allData) {
    allData.sort((a, b) => {
        return a.id - b.id;
    })
    fs.writeFileSync("data-info.json", JSON.stringify(allData));
}

function BinarySearsh(array, idForSearsh) {
    let left = array.length - 1;
    let right = 0;
    while (right <= left) {
        let mid = Math.floor((left - right) / 2 + right);
        // console.log(mid);
        if (array[mid].id == idForSearsh) {
            return mid;
        } else if (array[mid].id > idForSearsh) {
            left = mid - 1;
        }
        else if (array[mid].id < idForSearsh) {
            right = mid + 1;
        }
    }
    return -1;
}
/////////////////////////////////////
function addNewData(id, fname, lname, city, phone, email, address) {
    const data = readDataInfo();
    let test = BinarySearsh(data, id);
    // console.log(test);
    if (test === -1) {
        data.push({
            id,
            fname,
            lname,
            city,
            phone,
            email,
            address,
        });
        writeDataInfo(data);
        console.log("Done.");
    } else {
        console.log("Sorry ! This ID information is already used.");
    }
}

function deleteData(id) {
    const data = readDataInfo();
    let test = BinarySearsh(data, id);
    if (test !== -1) {
        data.splice(test, 1);
        writeDataInfo(data);
        console.log("Done.");
    } else {
        console.log("Sorry ! This ID information is not found.");
    }
}

function readUsers(id) {
    const data = readDataInfo();
    let test = BinarySearsh(data, id);
    if (test !== -1) {
        console.log(`id: ${data[test].id}\nfirst name: ${data[test].fname}\nlast name: ${data[test].lname}\ncity: ${data[test].city}\nphone: ${data[test].phone}\nemail: ${data[test].email}\naddress: ${data[test].address}\n`);
    } else {
        console.log("Sorry ! This ID information is not found.");
    }
}

function listItems() {
    const data = readDataInfo();
    data.forEach(element => {
        console.log(`id: ${element.id}, first name: ${element.fname}, last name: ${element.lname}, city: ${element.city}`)
    });
}


/////////////////////////////////////
module.exports = {
    addNewData,
    deleteData,
    readUsers,
    listItems,
}
