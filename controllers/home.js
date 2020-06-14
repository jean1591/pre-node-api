//  @desc     Get homepage
//  @route    GET /
//  @access   Public
exports.getHome = async (req, res, next) => {
	res.render("home/home");
};

//  @desc     Get about page
//  @route    GET /about
//  @access   Public
exports.getAbout = async (req, res, next) => {
	res.render("home/about");
};
