/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         BookId:
 *           type: integer
 *           example: 2
 *         Name:
 *           type: string
 *           example: "Sample gggg Book"
 *         Description:
 *           type: string
 *           example: "This is a sample description."
 *         Price:
 *           type: number
 *           format: float
 *           example: 19.99
 *         Author:
 *           type: string
 *           example: "Author Name"
 *         Stock:
 *           type: integer
 *           example: 10
 *         CategoryId:
 *           type: string
 *           example: "60d0fe4f5311236168a109ca"
 *       required:
 *         - BookId
 *         - Name
 *         - Description
 *         - Price
 *         - Stock
 *         - CategoryId
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API for managing books
 */

/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     security:
 *       - BearerAuth: []  # Indicating that this endpoint requires authentication
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       401:
 *         description: Unauthorized, invalid token
 *       500:
 *         description: Error fetching books.
 */

/**
 * @swagger
 * /api/book/bookid/{bookId}:
 *   get:
 *     summary: Get a specific book by BookId
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The book was found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Error fetching the book.
 */

/**
 * @swagger
 * /api/book:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *             example:
 *               BookId: 2
 *               Name: "Sample gggg Book"
 *               Description: "This is a sample description."
 *               Price: 19.99
 *               Author: "Author Name"
 *               Stock: 10
 *               CategoryId: "60d0fe4f5311236168a109ca"
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Error creating the book.
 */

/**
 * @swagger
 * /api/book/bookid/{bookId}:
 *   put:
 *     summary: Update an existing book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *             example:
 *               BookId: 2
 *               Name: "Sample gggg Book"
 *               Description: "This is a sample description."
 *               Price: 19.99
 *               Author: "Author Name"
 *               Stock: 10
 *               CategoryId: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: The book was updated successfully
 *       404:
 *         description: Book not found
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/book/bookid/{bookId}:
 *   patch:
 *     summary: Partially update an existing book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book to partially update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 example: "Updated Book Name"
 *               Description:
 *                 type: string
 *                 example: "This is an updated description."
 *               Price:
 *                 type: number
 *                 format: float
 *                 example: 17.99
 *               Author:
 *                 type: string
 *                 example: "Updated Author Name"
 *               Stock:
 *                 type: integer
 *                 example: 15
 *               CategoryId:
 *                 type: string
 *                 example: "60d0fe4f5311236168a109ca"
 *     responses:
 *       200:
 *         description: The book was partially updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/book/bookid/{bookId}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: The ID of the book to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Error deleting the book.
 */
