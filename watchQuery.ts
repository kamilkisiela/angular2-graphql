import {
  Component
} from '@angular/core';

import {
  Apollo
} from 'angular2-apollo';

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

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        query getPosts($tag: String) {
          posts(tag: $tag) {
            title
          }
        }
      `,
      variables: {
        tag: '1234'
      }
    });
  }
}
