import React from 'react';
import EventBanner from "../components/EventBanner.jsx";
import EventStats from "../components/EventStats.jsx";
import EventIntro from "../components/EventIntro.jsx";
import EventTimeline from "../components/EventTimeline.jsx";
import ParticipantsAndActivities from "../components/ParticipantsAndActivities.jsx";
import MainActivities from "../components/MainActivities.jsx";
import SideActivities from "../components/SideActivities.jsx";

function HomePage() {
    return (
        <>
            <EventBanner />
            <EventStats />
            <EventIntro />
            <EventTimeline />
            <ParticipantsAndActivities />
            <MainActivities />
            <SideActivities />
        </>
    );
}

export default HomePage;
