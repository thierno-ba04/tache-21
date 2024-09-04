import'./AgentList.css';
import React from 'react';

const AgentList = () => {
    const [agents, setAgents] = React.useState([
        { id: 1, name: "Oumy Laye Kane", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=1" },
        { id: 2, name: "Daouda 	Senghor", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=2" },
        { id: 3, name: "Assane Geuye", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=3" },
        { id: 4, name: "Kalika", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=4" },
        { id: 5, name: "Dieynaba	Ly", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=5" },
        { id: 6, name: "Alkali", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=6" },
        { id: 7, name: "Jésus-Christ DIATTA", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=7" },
        { id: 8, name: "Mouhamed	SARR", role: "Coach Programmation", avatar: "https://i.pravatar.cc/150?img=8" },
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
                placeholder="Rechercher un Coach..."
                className="search-bar"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul className="agent-list">
                {filteredAgents.map(agent => (
                    <li key={agent.id} className="agent-item " style={{textAlign:"justify"}}>
                        <img src={agent.avatar} alt={`Avatar de ${agent.name}`} className="agent-avatar" />
                        <div className="agent-info">
                            <h3 className="agent-name">{agent.name}</h3>
                            <p className="agent-role" style={{textAlign:"justify"}}>{agent.role}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default AgentList;