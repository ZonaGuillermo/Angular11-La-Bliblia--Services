import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Writer } from 'src/app/models/writer.model';
import { WritersService } from 'src/app/services/writers.service';

@Component({
  selector: 'app-writer-detail',
  templateUrl: './writer-detail.component.html',
  styleUrls: ['./writer-detail.component.css']
})
export class WriterDetailComponent implements OnInit {

  writer: Writer | undefined;

  constructor(
    private writersService: WritersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.writer = await this.writersService.getById(Number(params['writerId']));
    })
  }

}
