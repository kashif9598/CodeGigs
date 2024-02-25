const Gig = require("../models/Gig");
const { validateGigInfo } = require("../utils/validator");

const fetchAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    if (gigs.length > 0) {
      res.status(200).json({
        status: "success",
        results: gigs.length,
        data: {
          gigs,
        },
      });
    } else {
      res.status(400).json({
        status: "success",
        data: {
          message: "No gigs available",
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const addGig = async (req, res) => {
  try {
    const validationError = validateGigInfo(req.body);
    if (validationError.length > 0) {
      res.status(400).json({
        status: "Error",
        results: "Blank Values not accepted",
      });
    } else {
      const gigs = await Gig.create(req.body);
      res.status(201).json({
        status: "success",
        data: {
          gigs,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const updateGig = async (req, res) => {
  try {
    const { title, technologies, description, budget, contact_email} = req.body
    const gigToUpdate = await Gig.findOne({ where: { id: req.params.id } });
    if (gigToUpdate === null) {
      res.status(400).json({
        status: "success",
        data: {
          message: `No Gig available with ID ${req.params.id}`,
        },
      });
    } else {
      const updatedGig = await Gig.update(
        { title, technologies, description, budget, contact_email },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        status: "success",
        data: {
          updatedGig,
        },
      });
      console.log("gigToUpdate", updatedGig);
    }
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

const deleteGig = async (req, res) => {
  try {
    const deleteGig = await Gig.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(deleteGig);
    if (deleteGig.rowDeleted === 0) {
      res.status(404).json({
        status: "fail",
        message: "No notes available for this ID",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: `Notes with ${req.params.id} ID deleted`,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = { fetchAllGigs, addGig, updateGig, deleteGig };
