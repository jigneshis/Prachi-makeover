'use client';

import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Mail, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const ADMIN_EMAIL = "manishakamra7@gmail.com";

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleMagicLink = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: ADMIN_EMAIL,
        options: {
          emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/admin/gallery` : '',
        },
      });

      if (error) throw error;
      
      setIsSent(true);
      toast.success("Magic Link sent to your inbox");
    } catch (error: any) {
      toast.error(error.message || "Failed to send Magic Link");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-soft p-4">
      <Card className="w-full max-w-md border-gold/20 shadow-2xl bg-white rounded-[2.5rem] overflow-hidden">
        <div className="h-2 bg-gold" />
        <CardHeader className="text-center pt-10">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="text-gold" size={32} />
          </div>
          <CardTitle className="font-serif text-3xl text-gray-900">Admin Portal</CardTitle>
          <CardDescription className="mt-2">Secure access for Prachi Makeover</CardDescription>
        </CardHeader>
        <CardContent className="p-10 pt-6">
          {!isSent ? (
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Mail className="text-gray-400" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Admin Account</span>
                  <span className="text-sm font-medium text-gray-700">{ADMIN_EMAIL}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleMagicLink}
                disabled={isLoading}
                className="luxury-button w-full h-16 text-lg flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <span>Send Magic Link</span>
                    <Sparkles size={20} />
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h4 className="text-gray-900 font-medium mb-2">Check your email</h4>
              <p className="text-gray-500 text-sm mb-6">We've sent a secure login link to your inbox. It expires in 24 hours.</p>
              <button 
                onClick={() => setIsSent(false)}
                className="text-gold text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
              >
                Send again
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}