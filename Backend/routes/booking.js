//backend/routes/booking.js

import express from "express";
import { 
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
    getBookings,
    getApprovedBookings,
    getWaitingBookings,
    approveBooking
} from "../controllers/Booking.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//INSERT
router.post("/create", createBooking);
//UPDATE
router.put("/update/:id", verifyUser, updateBooking);
//DELETE
router.delete("/delete/:id", verifyUser,  deleteBooking);
//GET
router.get("/getbyid/:id", getBooking);
//GET ALL
router.get("/getall", getBookings);
//GET ALL APPROVED
router.get("/approved", getApprovedBookings);
//GET ALL WAITING
router.get("/waiting", getWaitingBookings);
//APPROVE THE BOOKING STATUS
router.put("/approve/:id",approveBooking);
export default router

