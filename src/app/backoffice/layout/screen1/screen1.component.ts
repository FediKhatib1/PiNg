import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Reclamation} from '../../../model/reclamation';
import {ReclamationService} from '../../../services/reclamation.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminreclamationService} from '../../../services/adminreclamation.service';
import {Block} from '../../../model/block';
import { Action, Store } from "@ngrx/store";
import {Chart, ChartOptions} from 'chart.js';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {Observer} from 'rxjs';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements   OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  BarChart=[];

  blocks : Block ;
  closeResult: string;
  displayedColumns: string[] = ['id', 'email', 'object', 'type', 'message'];
  dataSource = new MatTableDataSource<Reclamation>();
  reclamationList : Reclamation[]
  blocklist : Block[]
  blocklistss : Reclamation[]
  total : number
  private blockUsers: string ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private email: string ;
  public test: any ;
  reclammation: Reclamation[];
  reclamation: Reclamation;
  LineChart= [];
nbrAll: number ;
nbrSanitaire: number;
nbrArgent: number ;
nbrTravel: number;
barChartData: { data: number[]; label: string; }[];
barChartOptions: ChartOptions;
barChartLabels: any;
barChartLegend: any;
barChartType:  any ;
  private test22: (() => void) | Partial<Observer<Reclamation[]>>;
  constructor( private modalService: NgbModal , private rService : ReclamationService  , private aService: AdminreclamationService) { }

  ngOnInit() {
    this.rService.getComplaint().subscribe((data:Reclamation[]) =>(this.reclamationList = data)) ;
    // this.aService.getComplaintWeek().subscribe((data:any[]) =>(this.blocklistss = data)) ;
  //  this.total=this.blocklistss.indexOf(1).valueOf();


this.rService.getComplaint().subscribe(res=>{
  this.nbrAll = res.length;
  this.nbrArgent = res.filter(reclamations => reclamations.object=="ARGENT_POCHE"  ).length;
  this.nbrTravel = res.filter(reclamations => reclamations.object=="APROPO_VOYAGE"  ).length;
  this.nbrSanitaire = res.filter(reclamations => reclamations.object=="SANITAIRE"  ).length;

// @ts-ignore
    this.barChartOptions  = {responsive: true,
      // @ts-ignore
      plugins: {
        title: {
          display: true,
          text: 'Trips Charts',
        },
      },
    };
    this.barChartType = 'bar';
    this.barChartData = [
      {data: [this.nbrSanitaire], label: 'sanitaire'},
      {data: [this.nbrArgent], label: 'apropo argent'},
      {data: [this.nbrTravel], label: 'apropo voyage '},
    ];

})
  }


  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, {windowClass: 'modal-mini', size: 'sm', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, {windowClass: 'modal-danger', centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, {centered: true}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  block(email: string) {
    this.aService.blockUser(email).subscribe (
        () => (this.blocklist.indexOf(this.blocks)))
    alert ("vous etes bloque cette personne :" + email)
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_n48vl11', 'template_gy7l6ji', e.target as HTMLFormElement, 'xl03ko_N6F_R4xHdV')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }


//  public barChartOptions = {    scaleShowVerticalLines: false,    responsive: true};
//  public barChartOptions: { scaleShowVerticalLines: false,    responsive: true };
}
