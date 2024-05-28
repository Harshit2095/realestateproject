import express from 'express';
// const express=require('express');
import { signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);  // invokes signup function when a post request is made to /signup
router.post("/signin", signin);
// router.post('/google', google);
router.get('/signout', signOut)  // invokes signout function when a get request is made to /signup

export default router;