import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbCalendar, NgbDate, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Reclamation} from '../../model/reclamation';
import {User} from '../../model/user';
import {AuthenticationService} from '../../services/authentication.service';
import {ReclamationService} from '../../services/reclamation.service';
import {Router} from '@angular/router';
import {NotificationType} from '../../notification/notification-type';
import {NotificationService} from '../../services/notification.service';
import { webSocket } from 'rxjs/webSocket';
import { ActivatedRoute } from '@angular/router';
import { of , Subscription } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import {ReclamForum} from '../../model/reclamForum';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    focus: any;
    focus1: any;
    fromDate: NgbDate;
    toDate: NgbDate;
    hoveredDate: NgbDate;
    closeResult: string;
    model1: NgbDate;
    model2: NgbDate;
    model: NgbDate;
    toDisplay = true;
    likeCount: number ;
    isLiked = false;
    nbr: number ;

    listReclamation: Reclamation[] ;
    listReclamations: Reclamation[] ;
    likess: ReclamForum[] ;
    form: boolean = false;
    reclam: Reclamation ;
    public loggedInUser: User;
    nbrr : any;
    constructor( private activatedRoute : ActivatedRoute , private modalService: NgbModal, calendar: NgbCalendar ,
                 public router: Router,  private authenticationService: AuthenticationService,
                 private reclamationService : ReclamationService , private notificationService: NotificationService) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    }

    ngOnInit() {
        if (this.authenticationService.isBlocked()) {
            this.router.navigate(["/block"]);}
        else {
        this.reclamationService.getComplaint().subscribe((data: Reclamation[]) => (this.listReclamation = data).forEach(p => { console.log(p) }))
        this.loggedInUser = this.authenticationService.getUserFromLocalStorage();
        this.reclam = new Reclamation()

            this.toggleData() ;
        }
    }


    addReclamation( recl: Reclamation) {

        this.reclamationService.addComplaint(recl).subscribe(
            () => (this.listReclamation.push(recl))
        )
        this.notificationService.notify(NotificationType.INFO, "You are already add complaint !");
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
    toggleData() {
        this.toDisplay = !this.toDisplay;
    }

    private sendErrorNotification(message: string) {
        this.notificationService.notify(NotificationType.ERROR, message ? message : 'An error occurred. Please try again')
    }

    addLike = (id: number) => {
            if(this.isLiked ) { this.likeCount-- ; }
            else {
                this.reclamationService.like(id).subscribe(
                    () => {
                        this.listReclamation.forEach(rec => {
                            if (rec.idComplaint == id) {
                                let rec = Reclamation
                                let i = this.listReclamation.indexOf(this.reclam)
                                this.listReclamation.push()
                            }
                            this.isLiked = !this.isLiked
                        })
                    }

                )
                this.likeCount++;
                this.isLiked = !this.isLiked
            }
        }





    seen(id: number) {
        this.reclamationService.see(id).subscribe (
            () => (this.listReclamation.indexOf(this.reclam)))
    }

    nbrrlike(idlike: number) {
        this.reclamationService.nbrLike(idlike).subscribe (
            () => (this.listReclamation.indexOf(this.reclam)))

        return this.likeCount ;

    }


}
