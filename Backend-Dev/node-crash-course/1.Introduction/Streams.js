const fileSystem = require("fs");

const readStream = fileSystem.createReadStream("./docs/largeFile.txt", {
  encoding: "utf8",
});
const writeStream = fileSystem.createWriteStream("./docs/WriteStream.txt");

// readStream.on("data", (chunk) => {
//   console.log(
//     "----------------------------NEW CHUNK -----------------------------"
//   );
//   //   console.log(chunk.toString());
//   console.log(chunk); // as above we have encoded
//   writeStream.write("\n New Chunk \n");
//   writeStream.write(chunk);
// });

// --------------------------------------------------------------------------------------------------------------------------------

// Piping
readStream.pipe(writeStream);

// Duplex Streams
