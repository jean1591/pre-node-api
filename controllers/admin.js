//  @desc     Get login page
//  @route    GET /admin/login
//  @access   Public
exports.login = async (req, res, next) => {
	res.render("admin/login");
};

//  @desc     Get dashboard
//  @route    GET /admin/dahsboard
//  @access   Private
exports.dashboard = async (req, res, next) => {
	res.render("admin/dashboard", {
		data: []
	});
};

//  @desc     Get all properties
//  @route    GET /admin/properties
//  @access   Private
exports.getProperties = async (req, res, next) => {
	res.render("admin/propertiesAdmin", {
		data: []
	});
};

//  @desc     Get single property
//  @route    GET /admin/properties/:id
//  @access   Private
exports.getProperty = async (req, res, next) => {
	res.render("admin/propertyAdmin", {
		data: []
	});
};
