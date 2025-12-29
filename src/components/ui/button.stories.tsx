import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Mail, ChevronRight, Loader2 } from 'lucide-react'

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            description: 'The visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
            description: 'The size of the button',
        },
        asChild: {
            control: 'boolean',
            description: 'Whether to render the button as a child component',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
    },
}

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive',
    },
}

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
}

export const Ghost: Story = {
    args: {
        children: 'Ghost',
        variant: 'ghost',
    },
}

export const Link: Story = {
    args: {
        children: 'Link',
        variant: 'link',
    },
}

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'sm',
    },
}

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'lg',
    },
}

export const Icon: Story = {
    args: {
        size: 'icon',
        children: <ChevronRight />,
    },
}

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail />
                Login with Email
            </>
        ),
    },
}

export const Loading: Story = {
    args: {
        disabled: true,
        children: (
            <>
                <Loader2 className="animate-spin" />
                Please wait
            </>
        ),
    },
}

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
}
