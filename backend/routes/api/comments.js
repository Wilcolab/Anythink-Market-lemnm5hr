/**
 * Router for comment resources.
 * Provides endpoints to list and delete comments using the Mongoose "Comment" model.
 *
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 * @exports express.Router
 */

/**
 * List all comments.
 *
 * Route: GET /
 *
 * Success: 200 OK - JSON array of Comment documents.
 * Failure: 500 Internal Server Error - { error: "Failed to fetch comments" }.
 *
 * @function getComments
 * @name getComments
 * @memberof module:routes/api/comments
 * @inner
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */

/**
 * Delete a comment by its MongoDB ObjectId.
 *
 * Route: DELETE /:id
 *
 * Success: 200 OK - { message: "Comment deleted successfully" }.
 * Not Found: 404 Not Found - { error: "Comment not found" }.
 * Failure: 500 Internal Server Error - { error: "Failed to delete comment" }.
 *
 * @function deleteComment
 * @name deleteComment
 * @memberof module:routes/api/comments
 * @inner
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {string} req.params.id - Comment ObjectId.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHUb Copilot, help me write some code!

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});