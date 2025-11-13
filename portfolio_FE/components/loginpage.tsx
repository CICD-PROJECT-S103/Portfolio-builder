"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialButton } from "@/components/ui/social-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { FirebaseError } from "firebase/app";

const LoginPage = () => {
  const router = useRouter();
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleContinueClick = () => {
    if (email) {
      setShowPassword(true);
    } else {
      setError("Please enter your email address");
    }
  };

  const getFriendlyErrorMessage = (code: string) => {
    const messages: Record<string, string> = {
      "auth/invalid-credential": "Invalid email or password.",
      "auth/user-not-found": "No account found with that email.",
      "auth/wrong-password": "Incorrect password. Please try again.",
      "auth/invalid-email": "Please enter a valid email address.",
      "auth/too-many-requests": "Too many attempts. Please try again later.",
      "auth/popup-closed-by-user": "The sign-in window was closed before completion.",
      "auth/cancelled-popup-request": "The sign-in request was cancelled. Please try again.",
    }

    return messages[code] || "Unable to sign in. Please try again.";
  }

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmail(email, password);
      router.push("/builder");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(getFriendlyErrorMessage(err.code));
      } else {
        setError("An unexpected error occurred during login.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);

    try {
      await signInWithGoogle();
      router.push("/builder");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        setError(getFriendlyErrorMessage(err.code));
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 bg-background text-foreground">
      <div className="w-full max-w-2xl mx-auto">
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
            color: var(--foreground, #222) !important;
          }
          #email {
            outline: none !important;
            border-color: #2563eb !important;
            background: #fff !important;
            color: #111 !important;
          }
          .social-button {
            background: #fff !important;
            color: #222 !important;
            border: 1px solid #e0e0e0 !important;
          }
          .social-button svg {
            color: #222 !important;
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={showPassword}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    border: "1px solid #2563eb",
                    borderRadius: 6,
                    fontSize: 16,
                    outline: 'none',
                    background: 'var(--input, #eee)',
                    color: 'var(--foreground, #111)',
                    zIndex: 2
                  }}
                />
              </div>

              {showPassword && (
                <div>
                  <label htmlFor="password" className="text-sm text-muted-foreground mb-2 block">
                    Password
                  </label>
                  <Input
                    className="w-full"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #2563eb",
                      borderRadius: 6,
                      fontSize: 16,
                      outline: 'none',
                      background: 'var(--input, #eee)',
                      color: 'var(--foreground, #111)',
                      zIndex: 2
                    }}
                  />
                </div>
              )}
              
              <div className="text-left">
                <button
                  type="button"
                  className="text-sm text-foreground hover:underline"
                  onClick={() => router.push("/password")}
                >
                  {showPassword ? "Forgot Password?" : "Forgot Email?"}
                </button>
              </div>

              {error && (
                <div className="p-3 rounded-md bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              
              <Button
                variant="outline"
                className="w-full h-12 mt-8 text-login-link border-login-link hover:bg-login-link/5"
                onClick={showPassword ? handleLogin : handleContinueClick}
                disabled={isLoading}
                style={{ minWidth: 0 }}
              >
                {isLoading ? "Logging in..." : showPassword ? "Log In" : "Continue with Email →"}
              </Button>

              {showPassword && (
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => { setShowPassword(false); setPassword(""); setError(""); }}
                >
                  ← Back to Email
                </Button>
              )}
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
              className="flex items-center justify-center gap-3 social-button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
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