import { Outlet } from "react-router-dom";

//it is still to be improved

function MainLayout(){
    return (
        <main>
            <sideBar/>
            <TopBar/>
            <Player/>
            <Outlet/>
        </main>
    )
}