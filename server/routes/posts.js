import express from "express";
import { deleteComment, postComment, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:postId/:userId/comment/delete", verifyToken, deleteComment);
//Post
router.post("/:postId/:userId/comment", verifyToken, postComment);

export default router;
