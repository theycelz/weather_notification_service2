const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

router.post('/subscribe', subscriberController.subscribe);
router.delete('/unsubscribe', subscriberController.unsubscribe);

/**
 * @swagger
 * /subscribe:
 *   post:
 *     summary: Subscribe to notifications
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             frequency:
 *               type: string
 *     responses:
 *       201:
 *         description: Subscription successful
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /unsubscribe:
 *   delete:
 *     summary: Unsubscribe from notifications
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Unsubscription successful
 *       404:
 *         description: Subscriber not found
 */
router.post('/subscribe', subscriberController.subscribe);
router.delete('/unsubscribe', subscriberController.unsubscribe);

module.exports = router;
