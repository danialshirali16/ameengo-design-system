import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'
import { Button } from './button'

const meta = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
        },
        disabled: {
            control: 'boolean',
        }
    }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <Input type="email" placeholder="Email" {...args} />,
    args: {
        className: 'w-[400px]'
    }
}

export const File: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" {...args} />
        </div>
    ),
}

export const Disabled: Story = {
    render: (args) => <Input disabled type="email" placeholder="Email" {...args} />,
    args: {
        className: 'w-[400px]'
    }
}

export const WithLabel: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" {...args} />
        </div>
    ),
}

export const WithButton: Story = {
    render: (args) => (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" {...args} />
            <Button type="submit">Subscribe</Button>
        </div>
    ),
}
