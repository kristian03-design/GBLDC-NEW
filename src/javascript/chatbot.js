// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatMessages = document.getElementById('chat-messages');

    // Check if chatbot is being closed
    if (!chatbotWidget.classList.contains('hidden')) {
        // Reset messages and questions
        chatMessages.innerHTML = '';
        delete chatMessages.dataset.questionsAdded;
    }

    chatbotWidget.classList.toggle('hidden');

    // Handle chatbot form submission
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    // Add automatic questions on chatbot open
    const questions = [
        'What are your loan options?',
        'How can I apply for membership?',
        'What are the benefits of being a member?'
    ];

    if (!chatMessages.dataset.questionsAdded) {
        const questionElements = [];

        questions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.className = 'bg-gray-100 p-2 rounded-md self-start cursor-pointer hover:bg-gray-200';
            questionElement.textContent = question;
            questionElement.addEventListener('click', () => {
                // Hide all questions
                questionElements.forEach(el => el.style.display = 'none');
                chatInput.value = question;
                handleUserMessage(question); // Automatically handle the question
            });
            chatMessages.appendChild(questionElement);
            questionElements.push(questionElement);
        });

        chatMessages.dataset.questionsAdded = 'true';
    }

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            handleUserMessage(userMessage);
        }
    });

    function handleUserMessage(message) {
        // Clear previous messages
        chatMessages.innerHTML = '';

        // Append user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'bg-gray-200 p-2 rounded-md self-end';
        userMessageElement.textContent = message;
        chatMessages.appendChild(userMessageElement);

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'bg-green-100 p-2 rounded-md self-start';

            // Provide answers to predefined questions
            let botResponse;
            if (message === 'What are your loan options?') {
                botResponse = 'We offer personal loans, business loans, and educational loans. Visit our Loans page for more details.';
            } else if (message === 'How can I apply for membership?') {
                botResponse = 'You can apply for membership by filling out the application form on our Apply Now page.';
            } else if (message === 'What are the benefits of being a member?') {
                botResponse = 'As a member, you gain access to loans, savings plans, insurance, and social services tailored to your needs.';
            } else {
                botResponse = 'Thank you for your message! How can I assist you?';
            }

            botMessageElement.textContent = botResponse;
            chatMessages.appendChild(botMessageElement);

            // Show questions again after bot response
            const questionElements = chatMessages.querySelectorAll('.bg-gray-100');
            questionElements.forEach(el => el.style.display = 'block');

            // Scroll to the latest message
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        // Clear input field
        chatInput.value = '';
    }

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
