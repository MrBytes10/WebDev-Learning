..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
- Here is some sample code to change browser theme dynamically using JavaScript:
        // Get all CSS link elements
        const themeStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        // Get saved user preference from localStorage, default to 'light'
        let selectedTheme = localStorage.getItem('theme') || 'light'; 
        // Function that switches CSS theme
        function setTheme(theme) {
        // Loop through stylesheets
        for(let stylesheet of themeStylesheets){
            // Get href of each stylesheet 
            let themeHref = stylesheet.getAttribute('href');
                // Replace old theme name in href 
            let newHref = themeHref.replace(/(-|)light|dark/g, `-${theme}`);
            // Update stylesheet href
            stylesheet.setAttribute('href', newHref);
            }  
        // Save preference to localStorage
        localStorage.setItem('theme', theme); 
        }
        // Initial theme setup on page load 
        setTheme(selectedTheme);  
        // Add event listener for theme toggle button
        document.getElementById('themeButton').addEventListener('click', () => {
            // Toggle light/dark on click
        selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';
            setTheme(selectedTheme);
          });
        /*This allows switching CSS stylesheets dynamically by manipulating the href attributes based on a 
        theme name. localStorage saves the user selection. */

..................................................................................................
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..........................................In JavaScript alone................................................
- Here is a version using only JavaScript to toggle the browser theme:
            // Get document body
            const body = document.body;
            // Set default theme
            let theme = 'light';
            // Function to switch theme
            function setTheme(theme) {
            if (theme === 'light') {
                // Light theme styles
                body.style.backgroundColor = 'white';
                body.style.color = 'black';  
            } else {
                // Dark theme styles
                body.style.backgroundColor = 'black';
                body.style.color = 'white';
            }
            }
            // Initially set light theme
            setTheme(theme);
            // Add event listener for button 
            document.getElementById('themeButton').addEventListener('click', () => {
            // Toggle theme
            if (theme === 'light') {
                theme = 'dark';
            } else {
                theme = 'light';
            }
            setTheme(theme);

            });

/*
- Instead of changing CSS stylesheets:
- It directly applies the styles needed for light and dark mode to the body
- A theme variable tracks the current active theme
- The button click listener toggles that theme variable
- setTheme() applies the needed styling
*/
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]
..]]]]]]]]]]]]]]]].. ..]]]]]]]]]]]]]]]

.....................JavaScript..........................................................................