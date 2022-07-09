import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/containers/Home/Home";
import Login from "./components/auth/Login/Login";
import Signup from "./components/auth/Signup/Signup";
import NotFound from "./components/containers/common/NotFound";
import CharacterList from "./components/containers/Character/CharacterList";
import WeaponList from "./components/containers/Weapon/WeaponList";
import EnemyList from "./components/containers/Enemy/EnemyList";

function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/weapons" element={<WeaponList />} />
            <Route path="/enemies" element={<EnemyList />} />
            <Route path="*" element={<NotFound />} />;
        </Routes>
    );
}

export default Links;
