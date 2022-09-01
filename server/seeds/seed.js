const db = require('../config/connection');
const { Video } = require('../models');

db.once('open', async () => {
    try {
      await Video.deleteMany({});
  
      await Video.create(videoSeeds);
  
      for (let i = 0; i < videoSeeds.length; i++) {
        const { _id, thoughtAuthor } = await Video.create(thoughtSeeds[i]);
        const video = await Video.findOneAndUpdate(
          { username: thoughtAuthor },
          {
            $addToSet: {
              thoughts: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });