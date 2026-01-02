import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'
import { useState } from 'react'
import { addDays } from 'date-fns'

const meta = {
    title: 'UI/Calendar',
    component: Calendar,
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},

    render: () => {
        const CalendarDemo = () => {
            const [date, setDate] = useState<Date | undefined>(new Date())

            return (
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            )
        }
        return <CalendarDemo />
    },
}

export const Range: Story = {
    args: {},

    render: () => {
        const CalendarRangeDemo = () => {
            const [date, setDate] = useState<{
                from: Date | undefined
                to?: Date | undefined
            }>({
                from: new Date(2022, 0, 20),
                to: addDays(new Date(2022, 0, 20), 20),
            })

            return (
                <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onSelect={setDate as any}
                    className="rounded-md border"
                />
            )
        }
        return <CalendarRangeDemo />
    },
}
