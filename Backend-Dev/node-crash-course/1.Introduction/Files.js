const { ChildProcess } = require("child_process");
const FileSystem = require("fs");

// reading files
// const data = FileSystem.readFile("./docs/sample.txt", (err, data) => {
//   if (err) console.log(err);
// //   console.log(data); // this will return a buffer
//     console.log(data.toString());
// });

// readFile is a async function but it doesn't block the code
// console.log('last line')

// writing files

// FileSystem.writeFile('./docs/sample.txt', 'Hello World' , () => {
//     console.log("File was written !!");
// })

FileSystem.writeFile("./docs/sample2.txt", "Hello World", () => {
  console.log("File was written !!");
});

// directory
if (!FileSystem.existsSync("./assets")) {
  FileSystem.mkdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("Folder was created !!");
  });
} else {
  FileSystem.rmdir("./assets", (err) => {
    if (err) console.log(err);
    else {
      console.log("Folder was deleted !!");
    }
  });
}

// deleting files

if (FileSystem.existsSync("./docs/deleteMe.txt")) {
  FileSystem.unlink("./docs/deleteMe.txt", (err) => {
    if (err) console.log(err);
    else {
      console.log("File was deleted !!");
    }
  })
}else{
    FileSystem.writeFile('./docs/deleteMe.txt','',() => {
        console.log("File is created")
    })
}
