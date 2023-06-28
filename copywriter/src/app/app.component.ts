import { Component } from '@angular/core';
/*import { FormControl, FormGroup } from '@angular/forms';
import { WriterService } from './writer.service'*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [WriterService]
})
export class AppComponent {
  //constructor(private writerService: WriterService) {}
  title = 'Copywriter';
  /*copyForm = new FormGroup({
    description: new FormControl(''),
  });
  ad:any = '';
  async onSubmit() {
    this.ad = await this.writerService.write(this.copyForm.value.description);
    //console.log(this.ad);
    //console.log(this.copyForm.value.description);
  }*/
}
