const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tahir", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document
// const reactPlaylist = new Playlist({
//   name: "react js",
//   ctype: "front end",
//   videos: 90,
//   active: true,
// });
// reactPlaylist.save()

//using async await
// const createdoc = async () => {
//   try {
//     const nodePlaylist = new Playlist({
//       name: "node js",
//       ctype: "back end",
//       videos: 80,
//       active: true,
//     });
//     const result = await nodePlaylist.save()
//     console.log(result)

//   } catch (err) {
//     console.log(err)
//   }
// }

// createdoc()

//many documents
const createdoc = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "javascript",
      ctype: "web func",
      videos: 70,
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "mongodb",
      ctype: "data base",
      videos: 30,
      active: true,
    });

    const mongoosePlaylist = new Playlist({
      name: "mongoose npm",
      ctype: "data base",
      videos: 70,
      active: true,
    });
    const result = await Playlist.insertMany([
      jsPlaylist,
      mongoPlaylist,
      mongoosePlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createdoc()

//read data
// const getdocument = async () => {
//   try {
//     const result = await Playlist.find({ ctype: "data base" }); //.select({name:1}).limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getdocument();

//logical query
// const getdocument = async () => {
//   try {
//     const result = await Playlist
//       .find({ videos: {$gt : 70} }); //.select({name:1}).limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getdocument();

// const getdocument = async () => {
//   try {
//     const result = await Playlist.find({ videos: { $gte: 70 } }); //.select({name:1}).limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getdocument();

// const getdocument = async () => {
//   try {
//     const result = await Playlist.find({ videos: { $lt: 70 } }); //.select({name:1}).limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getdocument();

// const getdocument = async () => {
//   try {
//     const result = await Playlist.find({ ctype: { $in: ["back end","front end"] } }); //.select({name:1}).limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getdocument();

const updateDocument = async (_id) => {
  try {
    const result = await Playlist.updateOne(
      { _id },
      {
        $set: {
          name: "JAVASCRIPT",
        },
      }
    );
    console.log(result);
  } catch (err) {
    console.log(result);
  }
};

updateDocument("62ea52175a2c02008f94ea22");


// adding additional data
// const reactPlaylist = new Playlist({
//   name: "react js",
//   ctype: "front end",
//   videos: 90,
//   active: true,
// });
// reactPlaylist.save()

//deleting a document
const deleteDocument = async(_id) => {
  try {
    const result = await Playlist.deleteOne({ _id });
     console.log(result);
  } catch (err) {
    console.log(err)
  }
}

deleteDocument("62eb84d34d8626acdf33bf35");