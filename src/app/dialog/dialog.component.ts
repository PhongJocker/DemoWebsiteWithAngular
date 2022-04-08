import { DataService } from './../data.service';
import { TreeViewComponent } from '../tree-view/tree-view.component';
import { Component, OnInit } from '@angular/core';

interface parentObject {
  id: string;
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
    if (localStorage.key(0) == 'data') {
      localStorage.removeItem('data');
    }
    localStorage.setItem('data', JSON.stringify(this.dataService.parent));
  }

  onSelected(event: any) {
    this.dataService.selectedName = event.target.value;
    this.dataService.onSelected = true;
  }
  
  save(id: string, name: string, description: string, note: string, serial: string, radio: string) {
    if (id == '' || name == '' || description == '' || radio == '') {
      alert('Vui lòng không bỏ trống !');
      return;
    } else if (this.dataService.listData.includes(name) && this.dataService.edit == false) {
      alert('Tên này đã tồn tại !');
      return;
    } else {
      var data: parentObject = {id: id, name: name, radio: radio, description: description, note: note, serial: serial, child: []};
      
      this.dataService.showAddForm = false;
      this.treeView.rightdata = this.dataService.temp;
      
      if (this.dataService.edit) {
        this.treeView.edit(data)
        this.dataService.edit = false;
      } else {
        this.treeView.add(data);
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
