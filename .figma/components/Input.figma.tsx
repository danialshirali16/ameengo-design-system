/**
 * Figma Code Connect - Input Component
 * 
 * Replace FIGMA_INPUT_URL with your actual Figma component URL.
 */

import figma from "@figma/code-connect"
import { Input } from "../../src/components/ui/input"
import { Label } from "../../src/components/ui/label"

// TODO: Replace with your actual Figma component URL
const FIGMA_INPUT_URL = "https://www.figma.com/design/YOUR_FILE_ID/YOUR_FILE_NAME?node-id=INPUT_NODE_ID"

figma.connect(Input, FIGMA_INPUT_URL, {
    props: {
        placeholder: figma.string("Placeholder"),
        type: figma.enum("Type", {
            "Text": "text",
            "Email": "email",
            "Password": "password",
            "Number": "number",
        }),
        disabled: figma.boolean("Disabled"),
    },
    example: (props) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="input">Label</Label>
            <Input
                id="input"
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
        </div>
    ),
})
