/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         CategoryId:
 *           type: integer
 *           example: 1
 *         Name:
 *           type: string
 *           example: "Fiction"
 *         Description:
 *           type: string
 *           example: "Books that are fictional."
 *       required:
 *         - Name
 *         - Description
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API for managing categories
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Error fetching categories.
 */

/**
 * @swagger
 * /api/category/categoryId/{categoryId}:
 *   get:
 *     summary: Get a specific category by CategoryId
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: The ID of the category to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The category was found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error fetching the category.
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Add a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 example: "Fiction"
 *               Description:
 *                 type: string
 *                 example: "Books that are fictional."
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Error creating the category.
 */

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update an existing category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the category to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was updated successfully
 *       404:
 *         description: Category not found
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the category to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error deleting the category.
 */

/**
 * @swagger
 * /api/category/categoryId/{categoryId}:
 *   delete:
 *     summary: Delete a category by CategoryId
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: The ID of the category to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Error deleting the category.
 */
