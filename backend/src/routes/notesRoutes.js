import express from "express";
import { 
  createNotes,
  getNoteById,
  deleteNotes,
  getAllNotes,
  UpdatedNotes
} from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", UpdatedNotes);

router.delete("/:id", deleteNotes);

export default router;