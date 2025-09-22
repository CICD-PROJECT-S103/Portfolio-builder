"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialButton } from "@/components/ui/social-button";

import { useRouter } from "next/navigation"; // ✅ Next.js router
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LoginPage = () => {
  const router = useRouter(); // ✅ Next.js hook
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme-dark');
      return stored ? stored === 'true' : true;
    }
    return true;
  });
  // Persist theme to localStorage
  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      localStorage.setItem('theme-dark', String(!prev));
      return !prev;
    });
  };
  const handleContinueClick = () => {
    router.push("/password"); // ✅ Next.js navigation
  };
  const bgColor = darkMode ? '#000' : '#fff';
  const fgColor = darkMode ? '#fff' : '#111';
  const inputBg = darkMode ? '#444' : '#eee';
  const inputColor = darkMode ? '#fff' : '#111';

  return (
  <div className="min-h-screen flex items-center justify-center p-2 sm:p-4" style={{ background: bgColor, color: fgColor, position: 'relative' }}>
      {/* Logo at top-left */}
      <div style={{ position: 'absolute', top: 24, left: 32, fontWeight: 700, fontSize: 22, letterSpacing: 1, color: fgColor }}>
        Portfolio Builder
      </div>
  <div className="w-full max-w-2xl mx-auto" style={{ color: fgColor }}>
        <div style={{ position: 'absolute', top: 24, right: 32 }}>
    <ThemeToggle darkMode={darkMode} onToggle={handleThemeToggle} />
        </div>
        <style>{`
          .text-login-heading,
          .text-login-link,
          .text-login-divider,
          .text-foreground,
          .text-muted-foreground,
          .text-sm,
          .text-xs,
          label,
          a,
          p,
          span,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          button {
            color: ${fgColor} !important;
          }
          #email {
            outline: none !important;
            border-color: #2563eb !important;
            background: ${inputBg} !important;
            color: ${inputColor};
          }
        `}</style>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-login-heading mb-4">Log In</h1>
          <p className="text-foreground">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-login-link hover:underline"
              onClick={e => {
                e.preventDefault();
                router.push("/signup");
              }}
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </a>
          </p>
        </div>

        {/* Main Content */}
  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full">
          {/* Left Column - Email Login */}
          <div className="flex-1 w-full md:w-1/2">
            <div className="space-y-4 w-full">
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                  <Input
                    className="w-full"
                    id="email"
                    type="email"
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #2563eb",
                      borderRadius: 6,
                      fontSize: 16,
                      outline: 'none',
                      background: inputBg,
                      color: inputColor,
                      zIndex: 2
                    }}
                  />
              </div>
              
              <div className="text-left">
                <a href="#" className="text-sm text-foreground hover:underline">
                  Forgot Email?
                </a>
              </div>
              
              {/* ✅ Updated Button with click handler */}
              <Button
                variant="outline"
                className="w-full h-12 mt-8 text-login-link border-login-link hover:bg-login-link/5"
                onClick={handleContinueClick}
                style={{ minWidth: 0 }}
              >
                Continue with Email →
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center min-h-[200px]">
            <span className="text-login-divider font-medium">or</span>
          </div>

          {/* Right Column - Social Login */}
          <div className="flex-1 w-full md:w-1/2 space-y-4">
            <SocialButton
              variant="google"
              className="flex items-center justify-center gap-3"
              style={!darkMode ? { background: '#fff', border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', color: '#222' } : {}}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </SocialButton>

            <SocialButton
              variant="facebook"
              className="flex items-center justify-center gap-3"
              style={!darkMode ? { background: '#fff', border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', color: '#222' } : {}}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </SocialButton>

            <SocialButton
              variant="apple"
              className="flex items-center justify-center gap-3"
              style={!darkMode ? { background: '#fff', border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', color: '#222' } : {}}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Continue with Apple
            </SocialButton>

            <div className="text-center mt-6">
              <a href="#" className="text-login-link hover:underline text-sm">
                Continue with SSO
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center space-y-2">
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p className="text-xs text-muted-foreground">
            This site is protected by reCAPTCHA Enterprise.{" "}
            <a href="#" className="hover:underline">Google's Privacy Policy</a>
            {" "}and{" "}
            <a href="#" className="hover:underline">Terms of Service</a>
            {" "}apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
