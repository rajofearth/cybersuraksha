        // Wrap all the JavaScript code in a DOMContentLoaded event listener
        document.addEventListener('DOMContentLoaded', function() {
            // Glitch effect for headings
            const glitchElements = document.querySelectorAll('.glitch');
            glitchElements.forEach(element => {
                element.setAttribute('data-text', element.textContent);
            });

            // Smooth scroll for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Animate service cards on scroll
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [100, 0],
                            opacity: [0, 1],
                            easing: 'easeOutExpo',
                            duration: 1000,
                            delay: anime.stagger(200)
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.service-card, #types > div > div, #case-studies > div > div, #protection > div > div, #tools > div > div, #blog > div > div').forEach(element => {
                observer.observe(element);
            });

            // Animate neon text
            anime({
                targets: '.neon-text',
                textShadow: [
                    {value: '0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(0, 243, 255, 0.5), 0 0 15px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.5)'},
                    {value: '0 0 5px rgba(0, 243, 255, 1), 0 0 10px rgba(0, 243, 255, 1), 0 0 15px rgba(0, 243, 255, 1), 0 0 20px rgba(0, 243, 255, 1)'},
                    {value: '0 0 5px rgba(0, 243, 255, 0.5), 0 0 10px rgba(0, 243, 255, 0.5), 0 0 15px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.5)'}
                ],
                duration: 1500,
                easing: 'easeInOutSine',
                loop: true
            });
            // FAQ toggle functionality
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('h3');
                question.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
            // Particles.js configuration
            particlesJS('particles-js', {
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#00f3ff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#00f3ff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            });

            // Mobile menu functionality
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');

            if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
                function toggleMobileMenu() {
                    mobileMenu.classList.toggle('hidden');
                    menuIcon.classList.toggle('hidden');
                    closeIcon.classList.toggle('hidden');
                }

                mobileMenuButton.addEventListener('click', toggleMobileMenu);

                // Close mobile menu when a link is clicked
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    });
                });

                // Close mobile menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                });

                // Prevent the mobile menu from closing when clicking inside it
                mobileMenu.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            // Blog post content
            const blogPosts = {
                1: {
                    title: "Latest Phishing Techniques",
                    content: `
                        <p class="mb-4">Phishing attacks continue to evolve, becoming more sophisticated and harder to detect. Stay informed about the latest techniques used by cybercriminals to protect yourself and your organization.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">1. AI-Generated Phishing Emails</h3>
                        <p class="mb-4">Cybercriminals are now using AI language models to create highly convincing phishing emails. These emails are well-written, contextually relevant, and often indistinguishable from legitimate communications.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">2. Vishing (Voice Phishing) Attacks</h3>
                        <p class="mb-4">Vishing attacks combine traditional phishing techniques with voice calls. Attackers use spoofed phone numbers and social engineering tactics to trick victims into revealing sensitive information over the phone.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">3. Quishing (QR Code Phishing)</h3>
                        <p class="mb-4">Quishing involves the use of malicious QR codes to direct victims to phishing websites. These codes can be embedded in emails, posters, or even physical products, making them particularly dangerous.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">How to Protect Yourself</h3>
                        <ul class="list-disc list-inside mb-4">
                            <li>Always verify the sender's email address and domain</li>
                            <li>Be cautious of urgent or threatening messages</li>
                            <li>Use multi-factor authentication whenever possible</li>
                            <li>Keep your software and security systems up to date</li>
                            <li>Educate yourself and your team about the latest phishing techniques</li>
                        </ul>
                        
                        <p>Stay vigilant and remember: if something seems too good to be true or unusually urgent, it's likely a phishing attempt.</p>
                    `
                },
                2: {
                    title: "Social Engineering in the Age of AI",
                    content: `
                        <p class="mb-4">Artificial Intelligence (AI) is revolutionizing many aspects of our lives, including cybersecurity. Unfortunately, it's also being leveraged by cybercriminals to enhance their social engineering attacks.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">AI-Powered Impersonation</h3>
                        <p class="mb-4">AI can now generate highly realistic text, voice, and even video content. This technology is being used to create convincing deepfakes and impersonate trusted individuals or organizations.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">Automated Social Engineering</h3>
                        <p class="mb-4">AI algorithms can analyze vast amounts of personal data from social media and other sources to craft highly personalized and convincing social engineering attacks at scale.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">Adaptive Phishing Campaigns</h3>
                        <p class="mb-4">AI-driven phishing campaigns can adapt in real-time based on user responses, making them more effective and harder to detect.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">Defending Against AI-Enhanced Attacks</h3>
                        <ul class="list-disc list-inside mb-4">
                            <li>Implement AI-powered security solutions</li>
                            <li>Educate employees about AI-enhanced social engineering tactics</li>
                            <li>Use multi-factor authentication and zero trust security models</li>
                            <li>Regularly update and patch systems to protect against known vulnerabilities</li>
                            <li>Conduct regular security audits and penetration testing</li>
                        </ul>
                        
                        <p>As AI continues to advance, both attackers and defenders will leverage its capabilities. Staying informed and proactive is key to protecting yourself and your organization in this new landscape of AI-enhanced social engineering.</p>
                    `
                },
                3: {
                    title: "Cybersecurity for Small Businesses",
                    content: `
                        <p class="mb-4">Small businesses are increasingly becoming targets for cybercriminals due to their often limited security resources. However, there are several cost-effective measures that can significantly improve your cybersecurity posture.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">1. Employee Training</h3>
                        <p class="mb-4">Your employees are your first line of defense. Regular cybersecurity awareness training can help them identify and avoid potential threats.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">2. Strong Password Policies</h3>
                        <p class="mb-4">Implement and enforce strong password policies. Consider using a password manager to generate and store complex passwords securely.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">3. Multi-Factor Authentication (MFA)</h3>
                        <p class="mb-4">Enable MFA wherever possible, especially for critical systems and accounts. This adds an extra layer of security beyond just passwords.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">4. Regular Software Updates</h3>
                        <p class="mb-4">Keep all software, including operating systems and applications, up to date. Many cyberattacks exploit known vulnerabilities in outdated software.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">5. Data Backup and Recovery</h3>
                        <p class="mb-4">Regularly backup your data and test your recovery processes. This can be a lifesaver in case of a ransomware attack or data breach.</p>
                        
                        <h3 class="text-2xl font-bold mb-2 neon-text">6. Network Security</h3>
                        <p class="mb-4">Use firewalls, VPNs, and network segmentation to protect your business network. Regularly monitor for unusual activities or unauthorized access attempts.</p>
                        
                        <p>Remember, cybersecurity is an ongoing process, not a one-time effort. Regularly review and update your security measures to stay protected against evolving threats.</p>
                    `
                }
            };

            // Function to open the blog modal
            function openBlogModal(blogId) {
                const modal = document.getElementById('blogModal');
                const title = document.getElementById('blogTitle');
                const content = document.getElementById('blogContent');
                
                if (modal && title && content) {
                    title.textContent = blogPosts[blogId].title;
                    content.innerHTML = blogPosts[blogId].content;
                    
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                }
            }

            // Function to close the blog modal
            function closeBlogModal() {
                const modal = document.getElementById('blogModal');
                if (modal) {
                    modal.classList.remove('flex');
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            }

            // Event listeners for opening and closing the blog modal
            document.querySelectorAll('.read-more-btn').forEach(btn => {
                btn.addEventListener('click', () => openBlogModal(btn.dataset.blogId));
            });

            const closeModalButton = document.getElementById('closeBlogModal');
            if (closeModalButton) {
                closeModalButton.addEventListener('click', closeBlogModal);
            }

            // Close modal when clicking outside the content
            const blogModal = document.getElementById('blogModal');
            if (blogModal) {
                blogModal.addEventListener('click', (e) => {
                    if (e.target === blogModal) {
                        closeBlogModal();
                    }
                });
            }

            // Apply glitch effect to blog post titles
            function applyGlitchEffect(element) {
                element.setAttribute('data-text', element.textContent);
                element.classList.add('glitch');
            }

            document.querySelectorAll('#blogModal h3').forEach(applyGlitchEffect);
        });