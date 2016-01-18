declare module mosca {
    var Server: ServerStatic;

    interface ServerStatic {
        new (options?): Server;
    }

    interface Server {
        on(eventName: string, listener: (...args) => void);
        on(eventName: 'clientConncted', listener: (client) => void);
        // TODO: What's arguments?
        on(eventName: 'clientDisconnecting', listener: (...args) => void);
        on(eventName: 'clientDisconnected', listener: (client) => void);
        on(eventName: 'published', listener: (packet, client) => void);
        on(eventName: 'subscribed', listener: (topic: string, client) => void);
        // TODO: What's arguments?
        on(eventName: 'unsubscribed', listener: (...args) => void);
        on(eventName: 'ready', listener: () => void);

        authenticate(client, username, password, callback);
        authorizePublish(client, topic, payload, callback);
        authorizeSubscribe(client, topic, callback);
    }
}
