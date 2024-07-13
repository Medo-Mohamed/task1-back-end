const fs = require("fs");
const yargs = require("yargs");
const validator = require("validator");
const dataMethods = require("./dataMethods.js");
////////////////////////////
yargs.command({
    command: "add",
    describe: "to add an item .",
    builder: {
        id: {
            describe: "This is id for user",
            demandOption: true,
            type: "Number",
        },
        fname: {
            describe: "This is First name",
            demandOption: true,
            type: "String",
        },
    },
    handler: (DataOject) => {
        dataMethods.addNewData(DataOject.id, DataOject.fname, DataOject.lname ? DataOject.lname : "Unknown", DataOject.city ? DataOject.city : "Unknown", (DataOject.phone) ? DataOject.phone : "Unknown", (DataOject.email) ? DataOject.email : "Unknown", (DataOject.address) ? DataOject.address : "UnKnown");
    },
});

yargs.command({
    command: "delete",
    describe: "to delete an item .",
    builder: {
        id: {
            describe: "This is id for user",
            demandOption: true,
            type: "Number",
        },
    },
    handler: (DataOject) => {
        dataMethods.deleteData(DataOject.id);
    },
})

yargs.command({
    command: "read",
    describe: "to read an item .",
    builder: {
        id: {
            describe: "This is id for user",
            demandOption: true,
            type: "Number",
        },
    },
    handler: (DataOject) => {
        dataMethods.readUsers(DataOject.id);
    },
})

yargs.command({
    command: "list",
    describe: "to list an items .",
    // builder: {
    // },
    handler: () => {
        dataMethods.listItems();
    },
})

////////////////////////////
yargs.parse();