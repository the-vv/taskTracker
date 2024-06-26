/*
    Function to handle the window close event by gracefully exiting the Neutralino application.
*/
function onWindowClose() {
    Neutralino.app.exit();
}

// Initialize Neutralino
Neutralino.init()

Neutralino.events.on("windowClose", onWindowClose);


(async () => {
    console.log(await Neutralino.storage.getKeys())
})();

