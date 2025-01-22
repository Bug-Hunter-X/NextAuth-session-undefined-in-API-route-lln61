```javascript
import {unstable_getServerSession} from 'next-auth/next';
import {authOptions} from '../api/auth/[...nextauth]' // Path to your authOptions

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // ... rest of your API route handler
  res.status(200).json({message: 'success', session})
};
export default handler; 
```