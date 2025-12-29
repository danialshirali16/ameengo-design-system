import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'
import { cn } from "@/lib/utils"

const meta = {
    title: 'UI/Slider',
    component: Slider,
    tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", args.className)}
            {...args}
        />
    ),
}

export const Range: Story = {
    render: (args) => (
        <Slider
            defaultValue={[25, 75]}
            max={100}
            step={1}
            className={cn("w-[60%]", args.className)}
            {...args}
        />
    ),
}
