module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
    const trailController = require("../controllers/TrailController");
    
    // // // Should match with "/api/Trail"
    router.route("/trail")
        .get(trailController.findAll)
        .post(trailController.create)
        // .delete(trailController.remove);
    
    // // // Should match with "/api/Trail/:id"
    // router
    //     .route("/:id")
    //     .get(TrailController.findById)


    // router.post("/addTrail", function(req, res){
    //     console.log(req.body);
    //     res.json("It really does.");
    // });

    return router;
    
};




