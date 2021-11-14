import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {
  data: any;
  link1 = 'https://api.spacexdata.com/v3/missions'
  displayedColumns: string[] = ['mission_name','mission_id', 'manufacturers','payload_ids','wikipedia','website','twitter','description'];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.link1).subscribe ((responseData:any) => {
      this.data = responseData;
    })
  }

}
