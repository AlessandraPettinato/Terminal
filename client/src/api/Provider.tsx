import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

const Provider: React.FC<{}> = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Provider;
