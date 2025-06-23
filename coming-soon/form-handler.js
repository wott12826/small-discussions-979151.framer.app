document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const formContainer = document.querySelector('.framer-1y0rjsb[data-framer-name="Content"]');

    if (form && formContainer) {
        // Предотвращаем стандартную отправку формы
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            console.log('Form submitted, showing thank you message');
            
            // Hide the form container
            formContainer.style.display = 'none';

            // Create the "Thank You" message element
            const thankYouMessage = document.createElement('div');
            thankYouMessage.innerHTML = `
                <div class="framer-qnnec5" data-framer-name="Content" id="navbar-bg">
                    <div class="framer-qvoa8n" data-framer-name="Text">
                        <div class="framer-ab9ltr" data-framer-name="Heading" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
                            <h2 class="framer-text framer-styles-preset-6svli0" data-styles-preset="CkmCTEeGd" style="--framer-text-alignment: center;">
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">Thank</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">You,</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">for</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">your</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">request!</span>
                            </h2>
                        </div>
                        <div class="framer-1ebh8d4" data-framer-name="Supporting text" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; transform: none;">
                            <p class="framer-text framer-styles-preset-5ox9ny" data-styles-preset="lapmogqvz" style="--framer-text-alignment: center;">
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">We</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">appreciate</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">your</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">interest.</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">Our</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">manager</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">will</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">contact</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">you</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">during</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">business</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">hours</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">to</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">assist</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">you</span>
                                <span style="display: inline-block; opacity: 1; filter: blur(0px); transform: none; will-change: transform;">further.</span>
                            </p>
                        </div>
                    </div>
                    <div class="framer-13vg82h" data-framer-appear-id="13vg82h" data-framer-name="CTA" style="opacity: 1; transform: none; will-change: transform;">
                        <div class="framer-gjl1t4-container" style="opacity: 1; will-change: transform; transform: none;">
                            <a class="framer-eeLFr framer-DdbWm framer-r4ytee framer-v-r4ytee framer-q5iot3" data-border="true" href="../" style="--border-bottom-width: 2px; --border-color: rgba(255, 255, 255, 0.12); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; backdrop-filter: none; background-color: var(--token-d8314751-3109-4e71-b0e5-25619a148f21, rgb(0, 255, 178)); height: 100%; border-radius: 48px; box-shadow: rgba(42, 240, 124, 0.3) 0px 0px 34px 0px, rgba(0, 255, 178, 0.1) 0px 0px 0px 4px; opacity: 1; will-change: auto;" data-framer-name="Primary">
                                <div class="framer-ulzhs3" data-framer-component-type="RichTextContainer" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-r6o4lv: var(--token-0847a4bc-13bf-4d74-9d6a-967884fd94ee, rgb(0, 0, 0)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; opacity: 1;">
                                    <p class="framer-text framer-styles-preset-1dkivo1" data-styles-preset="doUCpi5z9" style="--framer-text-color: var(--extracted-r6o4lv, var(--token-0847a4bc-13bf-4d74-9d6a-967884fd94ee, rgb(0, 0, 0)));">Go Home</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            // Insert the "Thank You" message after the form's original container
            if (formContainer.parentNode) {
                formContainer.parentNode.insertBefore(thankYouMessage, formContainer.nextSibling);
            }
            
            // Prevent any further form submission
            return false;
        });
        
        // Также предотвращаем отправку при нажатии Enter
        form.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                form.dispatchEvent(new Event('submit'));
            }
        });
    } else {
        console.log('Form or form container not found');
    }
}); 