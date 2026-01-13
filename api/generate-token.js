import crypto from 'crypto';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Shared secret must be identical in Portal and specific App
        const secret = process.env.SHARED_SECRET;

        if (!secret) {
            console.error('SHARED_SECRET is not defined in Environment Variables');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Generate timestamp
        const timestamp = Date.now();

        // Sign timestamp with HMAC SHA256
        const signature = crypto
            .createHmac('sha256', secret)
            .update(String(timestamp))
            .digest('hex');

        // Return token data
        return res.status(200).json({
            timestamp,
            signature
        });

    } catch (error) {
        console.error('Token Generation Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
