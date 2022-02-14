import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  // id: Observable<string | null>;

  msg = '';

  constructor(private aRoute: ActivatedRoute, private router: Router, private dataSrv: DataService) {

    // this.id =  this.aRoute.paramMap.pipe(
    //   map(paramMap => paramMap.get('id'))
    // );

    // this.id = paramMap.get('id');

    // this.dataSrv.rechercherCollegueParPseudo(this.id)
  }

  ngOnInit(): void {



  }

  modifier() {
    this.msg = 'modification en cours';
    setTimeout(() => this.router.navigateByUrl('/liste'), 2000);
  }

}
