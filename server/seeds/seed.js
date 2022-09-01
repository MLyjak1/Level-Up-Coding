const db = require('../config/connection');
const { Video } = require('../models');
var mongoose = require('mongoose');
var videoSeeds = require("./videoSeeds.json");

db.once('open', async () => {
    try {
      await Video.deleteMany({});

      // Add ids to video seeds
      for(let i = 0; i < videoSeeds.length; i++) {
        videoSeeds[i] = {
          _id: mongoose.Types.ObjectId(),
          // TODO: Add comments to videos
          ...videoSeeds[i]
        };
      }
  
      await Video.create(videoSeeds);
  
      // TODO: Finish adding seeds 
      // for (let i = 0; i < videoSeeds.length; i++) {
      //   const { _id, thoughtAuthor } = await Video.create(thoughtSeeds[i]);
      //   const video = await Video.findOneAndUpdate(
      //     { username: thoughtAuthor },
      //     {
      //       $addToSet: {
      //         thoughts: _id,
      //       },
      //     }
      //   );
      // }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });