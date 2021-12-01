import { ApolloServer } from "apollo-server-express";
import express from "express";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const port = 8080;

const startServer = async () => {
	const app = express();

	const apolloServer = new ApolloServer({ typeDefs, resolvers });

	await apolloServer.start();
	apolloServer.applyMiddleware({ app });

	app.listen(port, () =>
		console.log(`Server up and running on ${port}${apolloServer.graphqlPath}`)
	);
};

startServer();
