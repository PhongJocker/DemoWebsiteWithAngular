import { DataService } from './../data.service';
import { TreeViewComponent } from '../tree-view/tree-view.component';
import { Component, OnInit } from '@angular/core';

interface parentObject {
  id: number;
  code: string;
  name: string;
  note: string;
  radio: string;
  serial: string;
  description: string;
  child: parentObject[];
}

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

  refreshData () {
    this.dataService.listData.splice(0, this.dataService.listData.length);
    if (localStorage.key(0) == 'PhongDemoData') {
      localStorage.removeItem('PhongDemoData');
    }
    localStorage.setItem('PhongDemoData', JSON.stringify(this.dataService.parent));
  }

  onSelected(event: any) {
    this.dataService.selectedID = event.target.value;
    this.dataService.onSelected = true;
  }
  
  save(code: string, name: string, description: string, note: string, serial: string, radio: string) {
    if (code == '' || name == '' || description == '' || radio == '') {
      alert('Vui lòng không bỏ trống !');
      return;
    } else {
      this.dataService.showAddForm = false;
      this.treeView.rightdata = this.dataService.temp;
      
      if (this.dataService.edit) {
        this.treeView.edit({id: this.dataService.temp[this.dataService.index].id ,code: code, name: name, radio: radio, description: description, note: note, serial: serial, child: []})
        this.dataService.edit = false;
      } else {
        this.dataService.counter += 1;
        this.treeView.add({id: this.dataService.counter ,code: code, name: name, radio: radio, description: description, note: note, serial: serial, child: []});
      }
    }
    this.refreshData();
  }
  
  remove () {
    this.dataService.showRemoveConfirm = false;
    this.treeView.rightdata = this.dataService.temp;
    this.treeView.remove(this.dataService.index);
    this.refreshData();
  }

}
