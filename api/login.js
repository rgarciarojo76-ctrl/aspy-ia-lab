export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;

    // Define allowed users directly from Environment Variables
    // Format: We will check against distinct ENV sets for flexibility
    // Or simpler: We can parse a JSON string from one ENV if complex, 
    // but for now let's stick to the requested 2 users using distinct vars or a simpler logic.

    // To support the specific users requested:
    // User 1: 4667
    // User 2: ridouan.elbachiri@qubiq.es

    // We will assume the user sets these in Vercel as:
    // USER1_ID / USER1_PASS
    // USER2_ID / USER2_PASS

    // However, to be more robust and allow "N" users without code changes, 
    // strictly speaking we should move the USER LIST to an Env Var (JSON).
    // Let's expect an env var "AUTH_USERS" containing a JSON array.
    // Example: [{"username":"...","password":"..."}]

    try {
        let authorizedUsers = [];

        if (process.env.AUTH_USERS) {
            try {
                const parsed = JSON.parse(process.env.AUTH_USERS);
                if (Array.isArray(parsed)) {
                    authorizedUsers = [...parsed];
                }
            } catch (e) {
                console.error("Failed to parse AUTH_USERS", e);
            }
        }

        // Always check for Admin User too (Merge both sources)
        if (process.env.ADMIN_USER && process.env.ADMIN_PASS) {
            authorizedUsers.push({
                username: process.env.ADMIN_USER,
                password: process.env.ADMIN_PASS
            });
        }

        const isValid = authorizedUsers.some(
            u => u.username === username && u.password === password
        );

        if (isValid) {
            return res.status(200).json({ success: true, token: 'mock-jwt-token-' + Date.now() });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

    } catch (error) {
        console.error('Auth Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
