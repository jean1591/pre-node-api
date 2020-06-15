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

//  @desc     Add property
//  @route    GET /admin/properties/add
//  @access   Private
exports.addProperty = async (req, res, next) => {
	res.render("admin/propertyAdd");
};

//  @desc     Edit property
//  @route    GET /admin/properties/edit/:id
//  @access   Private
exports.editProperty = async (req, res, next) => {
	res.render("admin/propertyEdit");
};
