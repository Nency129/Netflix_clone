const User = require("../models/UserModel");

const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie Already added to the linked list" });
    } else await User.create({ email, likedMovies: [data] });
    return res.json("movie Added successfully");
  } catch (error) {
    return res.json({ msg: "Error Adding movie" });
  }
};

const getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      // console.log(user);
      return res.json({ msg: "success", movie: user.likedMovies });
    } else return res.json({ msg: "User with given email not found" });
  } catch (error) {
    return res.json({ msg: "Error fetching movie" });
  }
};

const removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    console.log(req.body);
    // error
    console.log(email);
    const user = await User.findOne({ email }); 
    console.log(user)
    if (user) {
      const { likedMovies } = user;
      const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) res.status(400).send({ msg: "Movie not found" });
      likedMovies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies,
        },
        { new: true }
      );
      return res.json({msg:"Movie Deleted",movies:likedMovies});
    } 
  } catch (error) {
    return res.json({ msg: "Error in deleting movie" });
  }
};

module.exports = { getLikedMovies, addToLikedMovies, removeFromLikedMovies };
