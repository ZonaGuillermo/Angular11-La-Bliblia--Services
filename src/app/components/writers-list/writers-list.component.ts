import { Component, OnInit } from '@angular/core';
import { Writer } from 'src/app/models/writer.model';
import { WritersService } from 'src/app/services/writers.service';

@Component({
  selector: 'app-writers-list',
  templateUrl: './writers-list.component.html',
  styleUrls: ['./writers-list.component.css']
})
export class WritersListComponent implements OnInit {

  writersList: Writer[] = [];

  constructor(private WritersService: WritersService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.writersList = await this.WritersService.getAll();
    } catch (error) {
      console.log(error);
    }
  }

  async onClick(event: any): Promise<void> {
    try {
      this.writersList = await this.WritersService.getByPais(event.target.value);
    } catch(error) {
      console.log(error)
    }
  }
}
