import express from 'express';
// const express=require('express');
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
// import { createListing} from '../controllers/listing.controller.js';

// verifyToken middleware is used to check the validity of user tokens
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);  // Invokes the verifyToken middleware and then the createListing function when a POST request is made to /create
router.delete('/delete/:id', verifyToken, deleteListing); // Invkod the verifyToken function and deleteListing when aPOST request is made to /delete
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);

export default router;
