function showRegisterSection() {
        const reg = document.getElementById('registerSection');
        const login = document.querySelector('.max-w-6xl.flex.rounded-2xl.shadow-xl.overflow-hidden:not(#registerSection):not(#otpSection):not(#forgotPasswordSection)');
        // Hide login section
        if (login) {
          login.classList.add('hidden', 'invisible', 'pointer-events-none');
          login.style.display = 'none';
        }
        // Show registration section
        reg.classList.remove('hidden', 'invisible', 'pointer-events-none');
        reg.style.display = 'flex';
        reg.style.opacity = 0;
        reg.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          reg.style.opacity = 1;
        }, 10);
        reg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Scroll to login section when "Log in" is clicked
      function scrollToLogin() {
        const login = document.querySelector('.max-w-6xl.flex.rounded-2xl.shadow-xl.overflow-hidden:not(#registerSection):not(#otpSection):not(#forgotPasswordSection)');
        const reg = document.getElementById('registerSection');
        const otp = document.getElementById('otpSection');
        const forgot = document.getElementById('forgotPasswordSection');
        // Hide registration, OTP, and forgot password sections
        if (reg) {
          reg.classList.add('hidden', 'invisible', 'pointer-events-none');
          reg.style.display = 'none';
        }
        if (otp) {
          otp.classList.add('hidden', 'invisible', 'pointer-events-none');
          otp.style.display = 'none';
        }
        if (forgot) {
          forgot.classList.add('hidden', 'invisible', 'pointer-events-none');
          forgot.style.display = 'none';
        }
        // Show login section
        if (login) {
          login.classList.remove('hidden', 'invisible', 'pointer-events-none');
          login.style.display = 'flex';
          login.style.opacity = 0;
          login.style.transition = 'opacity 0.5s';
          setTimeout(() => {
            login.style.opacity = 1;
          }, 10);
          login.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      // Show OTP section and hide registration
      function showOtpSection() {
        // Show SweetAlert2 before showing OTP section with timer, no confirm button
        Swal.fire({
            icon: 'success',
            iconColor: '#16a34a',
            customClass: {
              popup: 'swal2-custom-popup'
            },
            title: 'Check your email',
            titleText: 'Email Verification',
            color: '#1e2939',
            text: 'Your 6-digit code has been sent to your email address.',
            timer: 2000,
            showConfirmButton: false,
            willClose: () => {
              const otp = document.getElementById('otpSection');
              const reg = document.getElementById('registerSection');
              if (reg) {
                reg.classList.add('hidden', 'invisible', 'pointer-events-none');
                reg.style.display = 'none';
              }
              if (otp) {
                otp.classList.remove('hidden', 'invisible', 'pointer-events-none');
                otp.style.display = 'flex';
                otp.style.opacity = 0;
                otp.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                  otp.style.opacity = 1;
                }, 10);
                otp.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
        });
      }

      // OTP input auto-focus and form logic
      document.addEventListener('DOMContentLoaded', function () {
        const otpInputs = document.querySelectorAll('#otpSection input[type="text"]');
        otpInputs.forEach((input, idx) => {
          input.addEventListener('input', function () {
            if (this.value.length === 1 && idx < otpInputs.length - 1) {
              otpInputs[idx + 1].focus();
            }
          });
          input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && !this.value && idx > 0) {
              otpInputs[idx - 1].focus();
            }
          });
        });

        // OTP form submit handler using SweetAlert2
        const otpForm = document.querySelector('#otpSection form');
        if (otpForm) {
          otpForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let otpCode = '';
            otpInputs.forEach(inp => otpCode += inp.value);
            if (otpCode.length === 6) {
              Swal.fire({
                icon: 'success',
                iconColor: '#16a34a',
                customClass: {
                  popup: 'swal2-custom-popup'
                },
                title: 'Account Created!',
                titleText: 'Welcome to GBLDC',
                text: 'Your account has been successfully created.',
                color: '#1e2939',
                timer: 2000,
                showConfirmButton: false,
                willClose: () => {
                  scrollToLogin();
                }
              });
            } else {
              Swal.fire({
                icon: 'warning',
                iconColor: '#dc2626',
                title: 'Incomplete Code',
                titleText: 'Invalid OTP',
                color: '#1e2939',
                text: 'Please enter the 6-digit code.',
                confirmButtonColor: '#16a34a'
              });
            }
          });
        }

        // Optional: Resend OTP handler using SweetAlert2
        const resendLink = document.querySelector('#otpSection a[href="#"]');
        if (resendLink) {
          resendLink.addEventListener('click', function (e) {
            e.preventDefault();
            Swal.fire({
              icon: 'info',
              iconColor: '#dc2626',
              title: 'OTP Resent',
              titleText: 'Resend OTP',
              color: '#1e2939',
              text: 'A new OTP has been sent to your email.',
              confirmButtonColor: '#16a34a'
            });
          });
        }

        // Forgot Password link logic
        const forgotLink = document.getElementById('forgotPasswordLink');
        if (forgotLink) {
          forgotLink.addEventListener('click', function (e) {
            e.preventDefault();
            showForgotPasswordSection();
          });
        }

        // Handle forgot password form submit
        const forgotForm = document.getElementById('forgotPasswordForm');
        if (forgotForm) {
          forgotForm.addEventListener('submit', function (e) {
            e.preventDefault();
            Swal.fire({
              icon: 'success',
              iconColor: '#16a34a',
              customClass: { popup: 'swal2-custom-popup' },
              title: 'Reset Link Sent',
              text: 'A password reset link has been sent to your email address.',
              color: '#1e2939',
              timer: 2000,
              showConfirmButton: false,
              willClose: () => {
                scrollToLogin();
              }
            });
          });
        }
      });

      function showForgotPasswordSection() {
        const forgot = document.getElementById('forgotPasswordSection');
        const login = document.querySelector('.max-w-6xl.flex.rounded-2xl.shadow-xl.overflow-hidden:not(#registerSection):not(#otpSection):not(#forgotPasswordSection)');
        // Hide login section
        if (login) {
          login.classList.add('hidden', 'invisible', 'pointer-events-none');
          login.style.display = 'none';
        }
        // Show forgot password section
        forgot.classList.remove('hidden', 'invisible', 'pointer-events-none');
        forgot.style.display = 'flex';
        forgot.style.opacity = 0;
        forgot.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          forgot.style.opacity = 1;
        }, 10);
        forgot.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
       // Realtime update of OTP email hint based on login email input
            document.addEventListener('DOMContentLoaded', function () {
              const loginEmailInput = document.querySelector('#loginSect input[type="email"]');
              const otpEmailHint = document.getElementById('otpEmailHint');
              if (loginEmailInput && otpEmailHint) {
                loginEmailInput.addEventListener('input', function () {
                  const email = loginEmailInput.value.trim();
                  if (email) {
                    otpEmailHint.textContent = `Code sent to: ${email}`;
                  } else {
                    otpEmailHint.textContent = 'Example: juandelacruz@gmail.com';
                  }
                });
              }
            });
               // Show OTP section after login credentials (simulate login with OTP)
        document.addEventListener('DOMContentLoaded', function () {
          // Replace login button logic to show OTP section
          const loginForm = document.querySelector('#loginSect form');
          if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
          e.preventDefault();
          // Show SweetAlert2 before showing OTP section
          Swal.fire({
            icon: 'success',
            iconColor: '#16a34a',
            customClass: { popup: 'swal2-custom-popup' },
            title: 'Check your email',
            titleText: 'Login Verification',
            color: '#1e2939',
            text: 'Your 6-digit code has been sent to your email address.',
            timer: 2000,
            showConfirmButton: false,
            willClose: () => {
          const otp = document.getElementById('loginOtpSection');
          const login = document.getElementById('loginSect').parentElement;
          if (login) {
            login.classList.add('hidden', 'invisible', 'pointer-events-none');
            login.style.display = 'none';
          }
          if (otp) {
            otp.classList.remove('hidden', 'invisible', 'pointer-events-none');
            otp.style.display = 'flex';
            otp.style.opacity = 0;
            otp.style.transition = 'opacity 0.5s';
            setTimeout(() => {
              otp.style.opacity = 1;
            }, 10);
            otp.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
            }
          });
        });
          }

          // OTP input auto-focus and form logic for login OTP
          const otpInputs = document.querySelectorAll('#loginOtpSection input[type="text"]');
          otpInputs.forEach((input, idx) => {
        input.addEventListener('input', function () {
          if (this.value.length === 1 && idx < otpInputs.length - 1) {
            otpInputs[idx + 1].focus();
          }
        });
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Backspace' && !this.value && idx > 0) {
            otpInputs[idx - 1].focus();
          }
        });
          });

          // OTP form submit handler using SweetAlert2
          const otpForm = document.getElementById('loginOtpForm');
          if (otpForm) {
        otpForm.addEventListener('submit', function (e) {
          e.preventDefault();
          let otpCode = '';
          otpInputs.forEach(inp => otpCode += inp.value);
          if (otpCode.length === 6) {
            Swal.fire({
          icon: 'success',
          iconColor: '#16a34a',
          customClass: { popup: 'swal2-custom-popup' },
          title: 'Login Successful!',
          text: 'You have been logged in.',
          color: '#1e2939',
          timer: 2000,
          showConfirmButton: false,
          willClose: () => {
            window.location.href = 'user-landingpage.php'; // Redirect to user landing page
          }
            });
          } else {
            Swal.fire({
          icon: 'warning',
          iconColor: '#dc2626',
          title: 'Incomplete Code',
          titleText: 'Invalid OTP',
          color: '#1e2939',
          text: 'Please enter the 6-digit code.',
          confirmButtonColor: '#16a34a'
            });
          }
        });
          }

          // Resend OTP handler for login OTP
            const resendLink = document.getElementById('loginOtpResend');
            if (resendLink) {
            resendLink.addEventListener('click', function (e) {
              e.preventDefault();
              let timerInterval;
              Swal.fire({
              icon: 'info',
              iconColor: '#16a34a',
              title: 'OTP Resent',
              titleText: 'Resend OTP',
              color: '#1e2939',
              text: 'A new OTP has been sent to your email.',
              confirmButtonColor: '#16a34a',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval);
              }
              });
            });
            }
        });