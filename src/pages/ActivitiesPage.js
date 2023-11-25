import React from "react";
import Navbar from "./../components/shared/Navbar";
import Calendars from "./../components/activities_page/Calendars";
import Title from "./../components/shared/Title";

const ActivitiesPage = () => {
    return (
        <div>
            <Navbar />
            <Title content="Actividades" img="./img/img_activities.png"/>
            <Calendars />
        </div>
    );
};


export default ActivitiesPage;