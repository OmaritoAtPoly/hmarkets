(async function Restrict() {
    const htmlElement = "<div class=\"access-denied\"><h1>Access Denied</h1><p>This content is not available in your country.</p>";

    try {
        let response = await fetch('https://ipapi.co/json/');
        const blockedCountries = ['BG']; // Country codes to block


        if (response.status === 200) {
            response = await response.json();

            if (blockedCountries.includes(response.country)) {
                document.body.innerHTML = htmlElement;
            }
        }
    } catch (error) {
        console.error("Geo check failed:", error);
    }
})();
