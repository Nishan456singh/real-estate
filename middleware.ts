import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
 
export default authMiddleware({
  afterAuth(auth, req) {
    // Handle users who aren't authenticated
        if (auth.userId && auth.isPublicRoute) {
          return redirectToSignIn({ returnBackUrl: req.url });
        }
      },
      publicRoutes: [
        '/',
        '/events/:id',
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
 