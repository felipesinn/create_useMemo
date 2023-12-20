import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReRender} from "../pages/Re.Render";


export function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ReRender />} />
        </Routes>
        </BrowserRouter>
    )
}