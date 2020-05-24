const withImages = require("next-images");
module.exports = {
  env: {
    WP_API: "https://michael-wp.skills.network/wp-json/wp/v2",
  },
  ...withImages(),
};
