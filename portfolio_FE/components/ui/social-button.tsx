import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const socialButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 w-full",
  {
    variants: {
      variant: {
        google: "bg-login-google text-white hover:bg-login-google/90",
      },
    },
    defaultVariants: {
      variant: "google",
    },
  }
);

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof socialButtonVariants> {}

const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(socialButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

SocialButton.displayName = "SocialButton";

export { SocialButton, socialButtonVariants };