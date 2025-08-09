import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("✅ Backend is running fine at " + new Date().toISOString());
});

export default router;
