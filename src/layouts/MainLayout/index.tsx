import {Header} from "components/Header";
import {Main} from "components/Main";
import {Wrap} from "./styled";

export const MainLayout = () => {

    return (
        <Wrap>
            <Header/>
            <Main/>
        </Wrap>
    )
};