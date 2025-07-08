import { Button } from '@workspace/ui/components/button'
import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@workspace/ui/components/accordion'
import { Alert, AlertTitle, AlertDescription } from '@workspace/ui/components/alert'
import { Card, CardHeader, CardTitle, CardContent } from '@workspace/ui/components/card'
import { Checkbox } from '@workspace/ui/components/checkbox'
import { Input } from '@workspace/ui/components/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@workspace/ui/components/tabs'
import { Tooltip, TooltipTrigger, TooltipContent } from '@workspace/ui/components/tooltip'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@workspace/ui/components/input-otp'
import { Avatar, AvatarImage, AvatarFallback } from '@workspace/ui/components/avatar'
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@workspace/ui/components/alert-dialog'

function ShadcnuDemo() {
  return (
	<div className="space-y-8">
		<Button>Button Test</Button>

		{/* Accordion Example */}
		<Accordion type="single" collapsible className="w-full max-w-md">
			<AccordionItem value="item-1">
				<AccordionTrigger>Accordion Trigger</AccordionTrigger>
				<AccordionContent>Accordion Content</AccordionContent>
			</AccordionItem>
		</Accordion>

		{/* Alert Example */}
		<Alert>
			<AlertTitle>Alert Title</AlertTitle>
			<AlertDescription>This is an alert description.</AlertDescription>
		</Alert>

		{/* Card Example */}
		<Card className="max-w-md">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
			</CardHeader>
			<CardContent>Card content goes here.</CardContent>
		</Card>

		{/* Checkbox Example */}
		<Checkbox />

		{/* Input Example */}
		<Input placeholder="Input field" />

		{/* Tabs Example */}
		<Tabs defaultValue="tab1" className="w-full max-w-md">
			<TabsList>
				<TabsTrigger value="tab1">Tab 1</TabsTrigger>
				<TabsTrigger value="tab2">Tab 2</TabsTrigger>
			</TabsList>
			<TabsContent value="tab1">Tab 1 Content</TabsContent>
			<TabsContent value="tab2">Tab 2 Content</TabsContent>
		</Tabs>

		{/* Tooltip Example */}
		<Tooltip>
			<TooltipTrigger asChild>
				<Button>Hover me</Button>
			</TooltipTrigger>
			<TooltipContent>Tooltip content</TooltipContent>
		</Tooltip>

		{/* Input OTP Example */}
		<InputOTP maxLength={4} containerClassName="gap-2">
			<InputOTPGroup>
				{[0, 1, 2, 3].map((i) => (
					<InputOTPSlot key={i} index={i} />
				))}
			</InputOTPGroup>
			<InputOTPSeparator />
		</InputOTP>

		{/* Avatar Example */}
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>

		{/* AlertDialog Example */}
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Open AlertDialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Are you sure?</AlertDialogTitle>
				<AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
				<div className="flex gap-2 mt-4">
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	</div>
  )
}

export default ShadcnuDemo
