import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {AdminreclamationService} from '../../../services/adminreclamation.service';
import {Reclamation} from '../../../model/reclamation';
import {Block} from '../../../model/block';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    blockList: Block[] ;
    blocklist : Block[] ;
    blocks : Block ;
    listReclamation : Reclamation[] ;
    reclamation : Reclamation ;

constructor(private aService: AdminreclamationService) {
}
    ngOnInit() {
        this.aService.getBlockUsers().subscribe((data:Block[]) =>(this.blockList = data))
    }


    unBlock(email: string) {
        this.aService.unBlockUser(email).subscribe (
            () => (this.blocklist.indexOf(this.blocks)))
    }
}
