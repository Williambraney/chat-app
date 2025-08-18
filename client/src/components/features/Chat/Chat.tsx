import { Block, Blocks } from "components/layout";

export default function Chat() {

    // const chatID = useParams()

    return (
        <Blocks>
            <Block>
            <ChatHistory />
            </Block>
            <Block>
            <ChatCompose />
            </Block>
        </Blocks>
    );
};