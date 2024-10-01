/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: "john_doe"
 *         password:
 *           type: string
 *           example: "securePassword123"
 *       required:
 *         - username
 *         - password
 *
 *     AuthToken:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR..."
 *
 * securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API for user registration, login, and management
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid input; username and password are required.
 *       409:
 *         description: Username already exists.
 *       500:
 *         description: Error registering user.
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Logged in successfully. Returns a JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthToken'
 *       400:
 *         description: Invalid input; username and password are required.
 *       401:
 *         description: Invalid credentials.
 */

/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users. **Note:** You must include a Bearer token in the Authorization header that return in login api in authorizations tap in the top.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: "john_doe"
 *                   password:
 *                     type: string
 *                     example: "securePassword123"  # Consider omitting password in responses for security reasons
 *       401:
 *         description: Unauthorized access. Bearer token is required.
 *       500:
 *         description: Error fetching users.
 */
