import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WriterService } from '../../writer.service'

@Component({
  selector: 'app-copywriter',
  templateUrl: './copywriter.component.html',
  styleUrls: ['./copywriter.component.css'],
  providers: [WriterService]
})
export class CopywriterComponent {
  constructor(private writerService: WriterService) {}
  copyForm = new FormGroup({
    description: new FormControl(''),
  });
  ad:any = '';
  async onSubmit() {
    this.ad = await this.writerService.write(this.copyForm.value.description);
    //console.log(this.ad);
    //console.log(this.copyForm.value.description);
  }
}
