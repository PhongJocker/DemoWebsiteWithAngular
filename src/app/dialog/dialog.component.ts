import { DataService } from './../data.service';
import { TreeViewComponent } from '../tree-view/tree-view.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public treeView = new TreeViewComponent(this.dataService);
  constructor(public dataService: DataService) { }
  
  ngOnInit(): void {
  }

  save(id: string, name: string, description: string, note: string, serial: string) {
    this.dataService.showAddForm = false;
    this.treeView.rightdata = this.dataService.temp;
    
    if (this.dataService.edit) {
      this.treeView.edit({id: id, name: name, description: description, note: note, serial: serial, child: []})
      this.dataService.edit = false;
    } else {
      this.treeView.add({id: id, name: name, description: description, note: note, serial: serial, child: []});
    }
  }
  
  remove(){
    this.dataService.showRemoveConfirm = false;
    this.treeView.rightdata = this.dataService.temp;
    this.treeView.remove(this.dataService.index);
  }

}
