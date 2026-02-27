import { createMiddleware } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { supabase } from '@/integrations/supabase/client';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddleware({ req, res });

  // Admin route protection
  if (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.includes('/login')) {
    const session = await supabase.auth.getSession();
    if (!session.data.session) {
      return NextResponse.redirect(new URL('/admin/login', req.nextUrl));
    }
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
};