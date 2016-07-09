import {
  bootstrap
} from '@angular/platform-browser-dynamic'

import {
  provideClient,
  APOLLO_PROVIDERS
} from 'angular2-apollo';

import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';

import {
  App
} from './app';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:8080')
});

bootstrap(App, [
  APOLLO_PROVIDERS,
  provideClient(client)
]);
