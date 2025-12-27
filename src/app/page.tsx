"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [rtlMode, setRtlMode] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progressValue, setProgressValue] = useState(33);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleRtlMode = () => {
    setRtlMode(!rtlMode);
    document.documentElement.setAttribute("dir", !rtlMode ? "rtl" : "ltr");
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              A
            </div>
            <span className="text-xl font-semibold">Ameengo Design System</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline">46 Components</Badge>
            <Button variant="ghost" size="icon" onClick={toggleRtlMode} title="Toggle RTL">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
                {rtlMode && <path d="M5 12h14" strokeWidth="3" />}
              </svg>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" /></svg>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Open Source • RTL Support</Badge>
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Build beautiful interfaces with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Ameengo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive design system built on Tailwind CSS and shadcn/ui.
              Featuring 46 components, design tokens, full RTL support, and Figma Code Connect integration.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Button>
              <Button size="lg" variant="outline">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <Tabs defaultValue="buttons" className="w-full">
          <ScrollArea className="w-full">
            <TabsList className="mb-8 inline-flex">
              <TabsTrigger value="buttons">Buttons & Actions</TabsTrigger>
              <TabsTrigger value="forms">Forms & Inputs</TabsTrigger>
              <TabsTrigger value="display">Display & Feedback</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
            </TabsList>
          </ScrollArea>

          {/* Buttons & Actions Tab */}
          <TabsContent value="buttons" className="space-y-12">
            {/* Buttons */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
              <p className="text-muted-foreground mb-6">Interactive elements for user actions.</p>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-4">Variants</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-medium mb-4">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14" /><path d="M5 12h14" /></svg>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Toggle & Toggle Group */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Toggle & Toggle Group</h2>
              <p className="text-muted-foreground mb-6">Toggleable state buttons.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Toggle</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Toggle>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                      Toggle
                    </Toggle>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Toggle Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ToggleGroup type="single">
                      <ToggleGroupItem value="left">Left</ToggleGroupItem>
                      <ToggleGroupItem value="center">Center</ToggleGroupItem>
                      <ToggleGroupItem value="right">Right</ToggleGroupItem>
                    </ToggleGroup>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Dialogs */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Dialogs & Modals</h2>
              <p className="text-muted-foreground mb-6">Overlay components for focused interactions.</p>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Dialog Title</DialogTitle>
                          <DialogDescription>
                            This is a dialog component for displaying focused content.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Dialog content goes here.</p>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Open Alert Dialog</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your data.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Forms & Inputs Tab */}
          <TabsContent value="forms" className="space-y-12">
            {/* Text Inputs */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Text Inputs</h2>
              <p className="text-muted-foreground mb-6">Input components for text entry.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Input & Textarea</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message..." />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Select</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Framework</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="vue">Vue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Checkboxes & Radio */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Checkboxes & Radio Buttons</h2>
              <p className="text-muted-foreground mb-6">Selection controls.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Checkboxes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketing" />
                      <label htmlFor="marketing" className="text-sm font-medium leading-none">
                        Receive marketing emails
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Radio Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="option-three" />
                        <Label htmlFor="option-three">Option Three</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Switches & Sliders */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Switch & Slider</h2>
              <p className="text-muted-foreground mb-6">Interactive controls for settings.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Switch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Enable Notifications</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Slider</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Volume: {sliderValue[0]}%</Label>
                      <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Calendar */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Calendar</h2>
              <p className="text-muted-foreground mb-6">Date picker component.</p>
              <Card className="max-w-fit">
                <CardContent className="pt-6">
                  <Calendar mode="single" className="rounded-md border" />
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Display & Feedback Tab */}
          <TabsContent value="display" className="space-y-12">
            {/* Cards */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Cards</h2>
              <p className="text-muted-foreground mb-6">Container components for grouping content.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">This is the card content.</p>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Action</Button>
                  </CardFooter>
                </Card>

                <Card className="border-primary/50">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Featured</Badge>
                    <CardTitle>Pro Plan</CardTitle>
                    <CardDescription>Everything you need.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Subscribe</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      User Card
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cards can contain any content including avatars and badges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Alerts */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Alerts</h2>
              <p className="text-muted-foreground mb-6">Display important messages.</p>
              <div className="space-y-4">
                <Alert>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert message.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            {/* Badges & Avatars */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Badges & Avatars</h2>
              <p className="text-muted-foreground mb-6">Status indicators and user representations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Avatars</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg">AB</AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Progress & Skeleton */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Progress & Loading States</h2>
              <p className="text-muted-foreground mb-6">Indicate loading and progress.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{progressValue}%</span>
                      </div>
                      <Progress value={progressValue} />
                    </div>
                    <Button size="sm" onClick={() => setProgressValue((progressValue + 10) % 110)}>
                      Increase
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Hover Card & Tooltip */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Hover Card & Tooltip</h2>
              <p className="text-muted-foreground mb-6">Contextual information on hover.</p>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline">Hover for info</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">More Information</h4>
                          <p className="text-sm text-muted-foreground">
                            This is a hover card with additional context about the element.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline">Hover for tooltip</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Quick tooltip message</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation" className="space-y-12">
            {/* Breadcrumb */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Breadcrumb</h2>
              <p className="text-muted-foreground mb-6">Show current location in hierarchy.</p>
              <Card>
                <CardContent className="pt-6">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CardContent>
              </Card>
            </section>

            {/* Accordion */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Accordion</h2>
              <p className="text-muted-foreground mb-6">Collapsible content sections.</p>
              <Card>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is this design system?</AccordionTrigger>
                      <AccordionContent>
                        Ameengo is a comprehensive design system built with Next.js, Tailwind CSS, and shadcn/ui.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How many components are included?</AccordionTrigger>
                      <AccordionContent>
                        The design system includes 46 components covering buttons, forms, navigation, and more.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Does it support RTL?</AccordionTrigger>
                      <AccordionContent>
                        Yes! All components have full RTL support for Arabic, Hebrew, Persian, and other RTL languages.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Pagination */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Pagination</h2>
              <p className="text-muted-foreground mb-6">Navigate through pages.</p>
              <Card>
                <CardContent className="pt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardContent>
              </Card>
            </section>

            {/* Menus */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Menus</h2>
              <p className="text-muted-foreground mb-6">Various menu components.</p>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-4">
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger>File</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>New File</MenubarItem>
                          <MenubarItem>Open</MenubarItem>
                          <MenubarItem>Save</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                      <MenubarMenu>
                        <MenubarTrigger>Edit</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>Undo</MenubarItem>
                          <MenubarItem>Redo</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>

                    <ContextMenu>
                      <ContextMenuTrigger asChild>
                        <Button variant="outline">Right-click me</Button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem>Copy</ContextMenuItem>
                        <ContextMenuItem>Paste</ContextMenuItem>
                        <ContextMenuItem>Delete</ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Collapsible */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Collapsible</h2>
              <p className="text-muted-foreground mb-6">Expandable/collapsible content.</p>
              <Card>
                <CardContent className="pt-6">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full">
                        Click to expand
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          This is collapsible content that can be hidden or shown.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-12">
            {/* Table */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Table</h2>
              <p className="text-muted-foreground mb-6">Display structured data.</p>
              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-end">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">John Doe</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                        <TableCell>Developer</TableCell>
                        <TableCell className="text-end">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Jane Smith</TableCell>
                        <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                        <TableCell>Designer</TableCell>
                        <TableCell className="text-end">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bob Johnson</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                        <TableCell>Manager</TableCell>
                        <TableCell className="text-end">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>

            {/* Scroll Area */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Scroll Area</h2>
              <p className="text-muted-foreground mb-6">Scrollable content container.</p>
              <Card>
                <CardContent className="pt-6">
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="text-sm">
                          <h4 className="font-medium">Item {i + 1}</h4>
                          <p className="text-muted-foreground">Description for item {i + 1}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </section>

            {/* Aspect Ratio */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Aspect Ratio</h2>
              <p className="text-muted-foreground mb-6">Maintain aspect ratio for media.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>16:9 Aspect Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 9}>
                      <div className="flex h-full items-center justify-center bg-muted rounded-md">
                        <p className="text-sm text-muted-foreground">16:9 Container</p>
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>1:1 Aspect Ratio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={1}>
                      <div className="flex h-full items-center justify-center bg-muted rounded-md">
                        <p className="text-sm text-muted-foreground">1:1 Container</p>
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Separator */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Separator</h2>
              <p className="text-muted-foreground mb-6">Visual dividers.</p>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <p className="text-sm">Section 1</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm">Section 2</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm">Section 3</p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Design Tokens Tab */}
          <TabsContent value="tokens" className="space-y-8">
            {/* Colors */}
            <section>
              <h2 className="text-2xl font-semibold mb-2">Colors</h2>
              <p className="text-muted-foreground mb-6">The design system color palette.</p>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Semantic Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg bg-primary" />
                        <p className="text-sm font-medium">Primary</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg bg-secondary" />
                        <p className="text-sm font-medium">Secondary</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg bg-accent" />
                        <p className="text-sm font-medium">Accent</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg bg-muted" />
                        <p className="text-sm font-medium">Muted</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg bg-destructive" />
                        <p className="text-sm font-medium">Destructive</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-16 rounded-lg border-2 bg-card" />
                        <p className="text-sm font-medium">Card</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Typography</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-xs text-muted-foreground">H1 - 48px Bold</span>
                      <h1 className="text-5xl font-bold">The quick brown fox</h1>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">H2 - 36px Bold</span>
                      <h2 className="text-4xl font-bold">The quick brown fox</h2>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">H3 - 30px Semibold</span>
                      <h3 className="text-3xl font-semibold">The quick brown fox</h3>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Body - 16px Regular</span>
                      <p>The quick brown fox jumps over the lazy dog.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Spacing Scale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-2 flex-wrap">
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((size) => (
                        <div key={size} className="flex flex-col items-center">
                          <div
                            className="bg-primary rounded"
                            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
                          />
                          <span className="text-xs text-muted-foreground mt-2">{size}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-sm">
                A
              </div>
              <span className="font-medium">Ameengo Design System</span>
            </div>
            <p className="text-sm text-muted-foreground">
              46 Components • RTL Support • Dark Mode • Figma Code Connect
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
