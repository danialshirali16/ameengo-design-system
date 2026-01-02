import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card'
import { Button } from './button'

const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},

    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content goes here. This is where the main content of the card is displayed.</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground">Card Footer</p>
            </CardFooter>
        </Card>
    ),
}

export const WithButton: Story = {
    args: {},

    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">Get started by choosing a framework and deployment region.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    ),
}

export const Notification: Story = {
    args: {},

    render: () => (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex items-center gap-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive emails about your activity.</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Mark all as read</Button>
            </CardFooter>
        </Card>
    ),
}

export const Simple: Story = {
    args: {},

    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Simple Card</CardTitle>
            </CardHeader>
            <CardContent>
                <p>A simple card with just a title and content.</p>
            </CardContent>
        </Card>
    ),
}
