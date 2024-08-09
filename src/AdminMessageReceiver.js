
import'./AdminMessageReceiver.css'
import React from 'react';



const AdminMessage = ({ admin, message, timestamp, priority, onAcknowledge }) => {
    const initials = admin.name.split(' ').map(n => n[0]).join('');

    return (
        <div className="message-item">
            <div className="message-header">
                <div className="admin-info">
                    <div className="admin-avatar">{initials}</div>
                    <div>
                        <div className="admin-name">{admin.name}</div>
                        <div className="admin-role">{admin.role}</div>
                    </div>
                </div>
                <div className="message-timestamp">{timestamp}</div>
            </div>
            <div className="message-content">{message}</div>
            <div className="message-footer">
                <span className={`priority-tag priority-${priority}`}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </span>
                <button className="action-button" onClick={onAcknowledge}>
                    Accuser réception
                </button>
            </div>
        </div>
    );
};

const AdminMessageReceiver = () => {
    const [messages, setMessages] = React.useState([
        {
            id: 1,
            admin: {
                name: "Marie Dubois",
                role: "Administratrice Système"
            },
            message: "Attention à tous : Une maintenance du serveur est prévue ce soir à 22h. Le système sera indisponible pendant environ 2 heures. Veuillez sauvegarder votre travail avant 21h45.",
            timestamp: "Aujourd'hui à 10:30",
            priority: "high",
            acknowledged: false
        },
        {
            id: 2,
            admin: {
                name: "Pierre Martin",
                role: "Responsable Sécurité"
            },
            message: "Rappel : La nouvelle politique de mots de passe entre en vigueur la semaine prochaine. Assurez-vous de mettre à jour votre mot de passe avant lundi.",
            timestamp: "Hier à 16:45",
            priority: "medium",
            acknowledged: false
        },
        {
            id: 3,
            admin: {
                name: "Sophie Leroux",
                role: "Coordinatrice RH"
            },
            message: "Information : Les formulaires d'évaluation annuelle sont désormais disponibles dans votre espace personnel. La date limite de soumission est fixée au 30 du mois courant.",
            timestamp: "Il y a 2 jours",
            priority: "low",
            acknowledged: false
        }
    ]);

    const handleAcknowledge = (id) => {
        setMessages(messages.map(msg => 
            msg.id === id ? {...msg, acknowledged: true} : msg
        ));
        alert("Message accusé de réception !");
    };

    const unacknowledgedMessages = messages.filter(msg => !msg.acknowledged);

    return (
        <div className="admin-message-receiver">
            <div className="receiver-header">Messages de l'Administration</div>
            <div className="message-list">
                {unacknowledgedMessages.length > 0 ? (
                    unacknowledgedMessages.map((msg) => (
                        <AdminMessage 
                            key={msg.id}
                            {...msg}
                            onAcknowledge={() => handleAcknowledge(msg.id)}
                        />
                    ))
                ) : (
                    <div className="no-messages">Aucun nouveau message de l'administration.</div>
                )}
            </div>
        </div>
    );
}
export default AdminMessageReceiver;
