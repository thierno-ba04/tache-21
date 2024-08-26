import React, { createContext, useState, useContext } from 'react';

// Créer un contexte pour la photo de profil
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [photoURL, setPhotoURL] = useState(null);

    return (
        <ProfileContext.Provider value={{ photoURL, setPhotoURL }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
