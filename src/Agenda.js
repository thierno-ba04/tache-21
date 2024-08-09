
import'./Agenda.css';
import React from 'react';

const { useState, useEffect } = React;

const Event = ({ event }) => (
    <div className="event">
        <div className="event-time">{event.time}</div>
        <div className="event-title">{event.title}</div>
        <div className="event-description">{event.description}</div>
    </div>
);

const Day = ({ date, events, onAddEvent }) => {
    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    return (
        <div className="agenda-day">
            <div className="day-header">
                <h2>{formatDate(date)}</h2>
                <button className="add-event" onClick={() => onAddEvent(date)}>Ajouter un événement</button>
            </div>
            {events.map((event, index) => (
                <Event key={index} event={event} />
            ))}
        </div>
    );
};

const Agenda = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Simuler le chargement des événements depuis une API
        const sampleEvents = generateSampleEvents();
        setEvents(sampleEvents);
    }, []);

    const generateSampleEvents = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return [
            {
                date: today.toISOString().split('T')[0],
                time: '09:00',
                title: 'Réunion d\'équipe',
                description: 'Réunion hebdomadaire de l\'équipe'
            },
            {
                date: today.toISOString().split('T')[0],
                time: '14:00',
                title: 'Présentation client',
                description: 'Présentation du nouveau projet au client'
            },
            {
                date: tomorrow.toISOString().split('T')[0],
                time: '11:00',
                title: 'Déjeuner d\'affaires',
                description: 'Déjeuner avec le partenaire commercial'
            }
        ];
    };

    const getEventsForDate = (date) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    const changeWeek = (days) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + days);
        setCurrentDate(newDate);
    };

    const addEvent = (date) => {
        const title = prompt('Titre de l\'événement :');
        if (!title) return;

        const time = prompt('Heure de l\'événement (HH:MM) :');
        if (!time) return;

        const description = prompt('Description de l\'événement :');

        const newEvent = {
            date: date.toISOString().split('T')[0],
            time: time,
            title: title,
            description: description || ''
        };

        setEvents([...events, newEvent]);
    };

    const renderWeek = () => {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i);
            week.push(
                <Day
                    key={i}
                    date={date}
                    events={getEventsForDate(date)}
                    onAddEvent={addEvent}
                />
            );
        }
        return week;
    };

    return (
        <div className="agenda">
            <div className="agenda-header">
                <h1>Mon Agenda</h1>
            </div>
            <div className="agenda-nav">
                <button onClick={() => changeWeek(-7)}> Semaine précédente</button>
                <button onClick={() => changeWeek(7)}>Semaine suivante</button>
            </div>
            <div className="agenda-body">
                {renderWeek()}
            </div>
        </div>
    );
} 
export default Agenda;
