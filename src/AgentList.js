import'./AgentList.css';
import React from 'react';

const AgentList = () => {
    const [agents, setAgents] = React.useState([
        { id: 1, name: "Marie Dupont", role: "Directrice", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Pierre Martin", role: "Professeur de Mathématiques", avatar: "https://i.pravatar.cc/150?img=2" },
        { id: 3, name: "Sophie Lefebvre", role: "Secrétaire", avatar: "https://i.pravatar.cc/150?img=3" },
        { id: 4, name: "Lucas Moreau", role: "Professeur d'Histoire-Géographie", avatar: "https://i.pravatar.cc/150?img=4" },
        { id: 5, name: "Emma Dubois", role: "Infirmière scolaire", avatar: "https://i.pravatar.cc/150?img=5" },
        { id: 6, name: "Thomas Girard", role: "Conseiller d'orientation", avatar: "https://i.pravatar.cc/150?img=6" },
        { id: 7, name: "Chloé Roux", role: "Professeur de Français", avatar: "https://i.pravatar.cc/150?img=7" },
        { id: 8, name: "Antoine Bernard", role: "Surveillant", avatar: "https://i.pravatar.cc/150?img=8" },
    ]);

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAgents = agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h4></h4>
            <input
                type="text"
                placeholder="Rechercher un agent..."
                className="search-bar"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul className="agent-list">
                {filteredAgents.map(agent => (
                    <li key={agent.id} className="agent-item">
                        <img src={agent.avatar} alt={`Avatar de ${agent.name}`} className="agent-avatar" />
                        <div className="agent-info">
                            <h3 className="agent-name">{agent.name}</h3>
                            <p className="agent-role">{agent.role}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default AgentList;