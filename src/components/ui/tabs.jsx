"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex max-[425px]:w-full h-20  my-8 items-center space-x-6 max-[425px]:space-x-0 shadow-sm justify-center rounded-2xl bg-white text-muted-foreground",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flexfont-[ObjectiveBold] w-[85%] tracking-[0.30rem]	 text-xl max-[425px]:text-xs  items-center text-center justify-center h-[60%] bg-whitejustify-center whitespace-nowrap rounded-2xl px-3 font-black ring-offset-background text-[#0a1a4a] transition-all   disabled:opacity-50 data-[state=active]:bg-[#0a1a4a] data-[state=active]:font-black data-[state=active]:text-white ",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "flex max-[425px]:flex-col max-[425px]:space-x-0 space-x-20 mt-2 ring-offset-background justify-center  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
