/**
 * Figma Code Connect - Button Component
 * 
 * This file maps the Button component from the design system to Figma.
 * Replace FIGMA_BUTTON_URL with your actual Figma component URL.
 * 
 * To get the Figma URL:
 * 1. Select the Button component in Figma
 * 2. Right-click → Copy link to selection
 * 3. Replace the placeholder URL below
 */

import figma from "@figma/code-connect"
import { Button } from "../../src/components/ui/button"

// TODO: Replace with your actual Figma component URL
const FIGMA_BUTTON_URL = "https://www.figma.com/design/YOUR_FILE_ID/YOUR_FILE_NAME?node-id=BUTTON_NODE_ID"

figma.connect(Button, FIGMA_BUTTON_URL, {
    props: {
        // Map Figma properties to component props
        children: figma.string("Label"),
        variant: figma.enum("Variant", {
            "Default": "default",
            "Destructive": "destructive",
            "Outline": "outline",
            "Secondary": "secondary",
            "Ghost": "ghost",
            "Link": "link",
        }),
        size: figma.enum("Size", {
            "Small": "sm",
            "Default": "default",
            "Large": "lg",
            "Icon": "icon",
        }),
        disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
        <Button
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
        >
            {props.children}
        </Button>
    ),
})
