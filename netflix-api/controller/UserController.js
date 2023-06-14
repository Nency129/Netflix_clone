const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => (id = data.id));
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(user._id, {
          likedMovies: [...user.likedMovies, data],
        },
        {new:true});
      }else return res.json({msg:"Movie already added to the linked list"});
    }else await User.create({email,likedMovies:[data]});
    return res.json("movie Added successfully");
  } catch (error) {
    return res.json({ msg: "Error adding movie" });
  }
};