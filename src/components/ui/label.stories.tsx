import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Checkbox } from './checkbox'

const meta = {
    title: 'UI/Label',
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    ),
}
