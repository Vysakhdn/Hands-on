import React from "react";

const UserContext = React.createContext('it is a default value');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
const ChannelContext = React.createContext();
const ChannelProvider = ChannelContext.Provider;
const ChannelConsumer = ChannelContext.Consumer;

export { UserProvider, UserConsumer, UserContext, ChannelContext, ChannelConsumer, ChannelProvider };