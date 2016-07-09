import {
  Component
} from '@angular/core';

import {
  Apollo
} from 'angular2-apollo';

import {
  GraphQLResult
} from 'graphql';

@Component({
  selector: 'app',
  template: `
    <ul>
      <li></li>
    </ul>
  `
})
class App {
  constructor(
    private apollo: Apollo;
  ) {}

  postReply({
    topicId,
    raw
  }) {
    this.apollo.mutate({
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
      variables: {
        topic_id: topicId,
        raw: raw,
      }
    }).then(({ data }: GraphQLResult) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
}
