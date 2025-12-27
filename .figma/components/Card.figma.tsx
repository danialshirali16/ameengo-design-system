/**
 * Figma Code Connect - Card Component
 * 
 * Replace FIGMA_CARD_URL with your actual Figma component URL.
 */

import figma from "@figma/code-connect"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "../../src/components/ui/card"

// TODO: Replace with your actual Figma component URL
const FIGMA_CARD_URL = "https://www.figma.com/design/YOUR_FILE_ID/YOUR_FILE_NAME?node-id=CARD_NODE_ID"

figma.connect(Card, FIGMA_CARD_URL, {
    props: {
        title: figma.string("Title"),
        description: figma.string("Description"),
        hasFooter: figma.boolean("Has Footer"),
    },
    example: (props) => (
        <Card>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card content goes here</p>
            </CardContent>
            {props.hasFooter && (
                <CardFooter>
                    <p>Card footer</p>
                </CardFooter>
            )}
        </Card>
    ),
})
