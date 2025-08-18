import { Block } from "components/layout";
import type { JSX } from "react/jsx-runtime";

type ChatMessageProps =  {
    isSender: boolean;
    message: string;
    timestamp: string;
} 

export default function ChatMessage({ isSender, message, timestamp }: ChatMessageProps): JSX.Element {

    return (
        <Block>

        </Block>
    )
}