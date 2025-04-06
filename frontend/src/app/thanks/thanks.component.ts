import { Component } from '@angular/core';

@Component({
  selector: 'p2-thanks',
  imports: [],
  template: `
    <p>
      thanks works!
    </p>
  `,
  styles: ``
})
export class ThanksComponent {
  // get the session_id
  // get the session
  // session.status will be either 'open' or 'complete'
  // if session.status == 'complete' then show the success message. can redirect to "thanks" page without session_id
  // if session.status == 'open' go back to the donation page
}
