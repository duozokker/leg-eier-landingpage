"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow,transform] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-white/5 hover:bg-white/10 hover:scale-105 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-white/20 bg-transparent hover:bg-white/10 text-white hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-white/10 text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2 has-[>svg]:px-4",
        sm: "h-10 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-14 rounded-full px-8 text-base has-[>svg]:px-6",
        xl: "h-16 rounded-full px-10 text-lg has-[>svg]:px-8",
        xxl: "h-20 rounded-full px-12 text-xl has-[>svg]:px-10",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(
        "relative group overflow-hidden",
        liquidbuttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {/* The complex liquid glass edge shadows */}
      <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full 
          shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.4),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.1),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.2),inset_0_0_6px_6px_rgba(255,255,255,0.05),inset_0_0_2px_2px_rgba(255,255,255,0.1),0_0_12px_rgba(255,255,255,0.05)] 
      transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.6),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.2),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.8),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.3),inset_0_0_8px_6px_rgba(255,255,255,0.1),inset_0_0_4px_2px_rgba(255,255,255,0.2)]" />
      
      {/* The SVG Filter Backdrop */}
      <div
        className="absolute top-0 left-0 isolate -z-10 h-full w-full rounded-full transition-all duration-500 group-hover:bg-white/5"
        style={{ backdropFilter: 'url("#container-glass") blur(10px)', WebkitBackdropFilter: 'url("#container-glass") blur(10px)' }}
      />

      <div className="pointer-events-none z-10 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
        {children}
      </div>
    </Comp>
  )
}

function GlassFilter() {
  return (
    <svg className="hidden absolute w-0 h-0">
      <defs>
        <filter
          id="container-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.02"
            numOctaves="2"
            seed="2"
            result="turbulence"
          />

          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />

          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />

          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />

          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export { liquidbuttonVariants, LiquidButton, GlassFilter }