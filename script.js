let role = '';

function joinRole(selectedRole) {
    role = selectedRole;
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('courtroom').style.display = 'block';
    document.getElementById(role.toLowerCase().replace(' ', '')).innerText = role;
}

function sendMessage() {
    const message = document.getElementById('chat-input').value;
    if (message.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerText = `${role}: ${message}`;
        document.getElementById('courtroom').appendChild(messageElement);
        document.getElementById('chat-input').value = '';
    }
}
