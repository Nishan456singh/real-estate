import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs/server";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
      publicRoutes: [
        '/',
        '/events/:id',
        '/men',
        '/women',
        '/kids',
        '/contact/',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
      ],
      ignoredRoutes: [
        '/contact/',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
      ],
    });
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 