import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from './label'
import { Button } from './button'

const meta = {
    title: 'UI/Textarea',
    component: Textarea,
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    // @ts-ignore - Custom render function
    render: () => <Textarea placeholder="Type your message here." />,
}

export const WithLabel: Story = {
    // @ts-ignore - Custom render function
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    ),
}

export const WithButton: Story = {
    // @ts-ignore - Custom render function
    render: () => (
        <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
    ),
}
