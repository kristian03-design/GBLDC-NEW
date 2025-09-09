   // Payment frequency selection
        const paymentOptions = document.querySelectorAll('.payment-option');
        const amountDue = document.getElementById('amount-due');
        const buttonText = document.getElementById('button-text');
        let selectedAmount = 1000;

        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                if (option.innerHTML.includes('Pay Full')) {
                    selectedAmount = 12000;
                    amountDue.textContent = '₱12,000.00';
                    buttonText.textContent = 'Pay ₱12,000.00 Now';
                } else {
                    selectedAmount = 1000;
                    amountDue.textContent = '₱1,000.00';
                    buttonText.textContent = 'Pay ₱1,000.00 Now';
                }
            });
        });

        // Payment method selection
        const methodOptions = document.querySelectorAll('.method-option');
        const cardDetails = document.getElementById('card-details');

        methodOptions.forEach(option => {
            option.addEventListener('click', () => {
                methodOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                if (option.innerHTML.includes('Card')) {
                    cardDetails.style.display = 'block';
                } else {
                    cardDetails.style.display = 'none';
                }
            });
        });

        // Card number formatting
        const cardNumberInput = document.getElementById('card-number');
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });

        // Expiry date formatting
        const expiryInput = document.getElementById('expiry');
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0,2) + '/' + value.substring(2,4);
            }
            e.target.value = value;
        });

        // CVC validation
        const cvcInput = document.getElementById('cvc');
        cvcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        // Form submission
        const paymentForm = document.getElementById('payment-form');
        const payButton = document.getElementById('pay-button');
        const loadingSpinner = document.getElementById('loading-spinner');
        const successMessage = document.getElementById('success-message');

        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            payButton.classList.add('loading');
            buttonText.classList.add('hidden');
            loadingSpinner.classList.remove('hidden');
            
            // Simulate payment processing
            setTimeout(() => {
                paymentForm.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.classList.add('fade-in');
            }, 2000);
        });

        // Back button functionality
        function goBack() {
            if (confirm('Are you sure you want to go back? Your progress will be lost.')) {
                window.history.back();
            }
        }

        // Input validation
        function validateCardNumber(number) {
            const regex = new RegExp("^[0-9]{13,19}$");
            return regex.test(number.replace(/\s/g, ''));
        }

        // Real-time validation
        cardNumberInput.addEventListener('blur', (e) => {
            const cardError = document.getElementById('card-error');
            if (!validateCardNumber(e.target.value)) {
                cardError.classList.remove('hidden');
                e.target.classList.add('border-red-500');
            } else {
                cardError.classList.add('hidden');
                e.target.classList.remove('border-red-500');
            }
        });
        