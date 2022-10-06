function getNotifications() {
    if( !("Notification" in window)) {
        console.log("Notificações não suportadas pelo navegador.");
    } else if (Notification.permission === "granted") {
        const notify = new Notification("A partir de agora você está inscrito em nossa newsletter.");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission( function(permission) {
            if(permission === "granted") {
                const notify = new Notification("Deseja receber nossa newsletter?")
            }
        })
    }
}