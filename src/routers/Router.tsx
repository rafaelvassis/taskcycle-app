//Components
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
//Pages
import { Home } from "../pages/Home/Home.tsx";
import { History } from "../pages/History/History.tsx";
import { Settings } from "../pages/Settings/Settings.tsx";
import { About } from "../pages/About/About.tsx";
import { NotFound } from "../pages/NotFound/NotFound.tsx";
import { useEffect } from "react";


function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop/>
        </BrowserRouter>
    )
}