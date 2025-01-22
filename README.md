# NextAuth Session Undefined in API Route

This repository demonstrates a common issue encountered when using NextAuth.js with API routes: the session object is undefined even after a successful login.  The problem is often due to incorrect configuration or missing middleware.

## Bug

The `bug.js` file contains a Next.js API route that attempts to access the user's session using `unstable_getServerSession`. Despite successful login, the session object is consistently null, resulting in an "Unauthorized" response.

## Solution

The `bugSolution.js` file provides a corrected version. The primary change involves ensuring the correct import and setup for `unstable_getServerSession`.  It also correctly sets up and exports the handler function.  Additional checks may be needed depending on your specific configuration.