import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReclamationService} from "../../services/reclamation.service";
import {Reclamation} from "../../model/reclamation";

@Component({
  selector: 'app-details-reclam',
  templateUrl: './details-reclam.component.html',
  styleUrls: ['./details-reclam.component.css']
})
export class DetailsReclamComponent implements OnInit {
  id : any;
  rec : Reclamation ;
  constructor(private activatedRoute : ActivatedRoute, private rService : ReclamationService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.rService.getComplaintById(this.id).subscribe((data: Reclamation) => (this.rec = data))

  }

}
