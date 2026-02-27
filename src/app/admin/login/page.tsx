'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-soft p-4">
      <Card className="w-full max-w-md border-gold/20 shadow-xl bg-white">
        <CardHeader className="text-center">
          <CardTitle className="font-serif text-3xl text-gold">Prachi Makeover</CardTitle>
          <CardDescription>Admin Portal Access</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#D4AF37',
                    brandAccent: '#996515',
                  },
                },
              },
            }}
            providers={[]}
            theme="light"
            redirectTo={`${window.location.origin}/admin/dashboard`}
          />
        </CardContent>
      </Card>
    </div>
  );
}
