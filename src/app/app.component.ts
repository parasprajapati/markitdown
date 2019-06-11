import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'markitdown';
  markdownInput = '';
  htmlOutput = '';

  convertMarkdown() {
    const lines = this.markdownInput.split('\n');
    console.log(lines);
    this.htmlOutput = this.markdownInput;
  }
}

