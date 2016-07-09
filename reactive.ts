import {
  Component
} from '@angular/core';

import {
  ApolloReactive,
  Query
} from 'angular2-apollo';

/*

interface Query {
  loading: boolean;
  errors: ApolloError;
  refetch: (variables: Object) => any;
  unsubscribe: Function
  stopPolling: Function
  startPolling: (pollInterval: number) => any;
}

 */

interface DataQuery extends Query {
  data: any;
}

@Component({
  selector: 'app',
  template: `
    <ul>
      <li></li>
    </ul>
  `
})
@ApolloReactive({
  queries(component: App) {
    return {
      // data
      data: {
        // define query of data
        query: gql`
          query getPosts($tag: String) {
            posts(tag: $tag) {
              title
            }
          }
        `,
        // define variables of data
        variables: {
          tag: component.tag
        }
      }
    };
  },
  mutations(component: App) {
    return {
      // reply
      reply(raw: string) {
        return {
          // define mutation of reply
          mutation: gql`
            mutation postReply(
              $topic_id: ID!
              $raw: String!
            ) {
              createPost(
                topic_id: $topic_id
                raw: $raw
              ) {
                id
              }
            }
          `,
          // define variables of reply
          variables: {
            topic_id: component.topicId,
            raw,
          }
        };
      }
    };
  }
})
class App {
  data: DataQuery;
  tag: string;
  topicId: string;
  reply: (raw: string) => Promise<GraphQLResult>;
}
