import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'
import { Button } from './button'

const meta = {
    title: 'UI/AspectRatio',
    component: AspectRatio,
    tags: ['autodocs'],
    argTypes: {
        ratio: {
            control: 'number',
            description: 'The aspect ratio of the content',
        }
    }
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <div className="w-[450px]">
            <AspectRatio {...args}>
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    className="rounded-md object-cover w-full h-full"
                />
            </AspectRatio>
        </div>
    ),
    args: {
        ratio: 16 / 9,
    }
}
