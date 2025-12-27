/**
 * Figma Code Connect - Badge Component
 * 
 * Replace FIGMA_BADGE_URL with your actual Figma component URL.
 */

import figma from "@figma/code-connect"
import { Badge } from "../../src/components/ui/badge"

// TODO: Replace with your actual Figma component URL
const FIGMA_BADGE_URL = "https://www.figma.com/design/YOUR_FILE_ID/YOUR_FILE_NAME?node-id=BADGE_NODE_ID"

figma.connect(Badge, FIGMA_BADGE_URL, {
    props: {
        children: figma.string("Label"),
        variant: figma.enum("Variant", {
            "Default": "default",
            "Secondary": "secondary",
            "Destructive": "destructive",
            "Outline": "outline",
        }),
    },
    example: (props) => (
        <Badge variant={props.variant}>
            {props.children}
        </Badge>
    ),
})
