/**
 * Figma Code Connect - Avatar Component
 * 
 * Replace FIGMA_AVATAR_URL with your actual Figma component URL.
 */

import figma from "@figma/code-connect"
import { Avatar, AvatarFallback, AvatarImage } from "../../src/components/ui/avatar"

// TODO: Replace with your actual Figma component URL
const FIGMA_AVATAR_URL = "https://www.figma.com/design/YOUR_FILE_ID/YOUR_FILE_NAME?node-id=AVATAR_NODE_ID"

figma.connect(Avatar, FIGMA_AVATAR_URL, {
    props: {
        src: figma.string("Image URL"),
        fallback: figma.string("Fallback"),
        size: figma.enum("Size", {
            "Small": "sm",
            "Medium": "md",
            "Large": "lg",
        }),
    },
    example: (props) => (
        <Avatar>
            <AvatarImage src={props.src} alt="Avatar" />
            <AvatarFallback>{props.fallback}</AvatarFallback>
        </Avatar>
    ),
})
