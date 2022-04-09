import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})

export class TreeViewComponent implements OnInit {
  @Input() rightdata: parentObject[] = this.dataService.parent;
  @Input() parentID: number;
    
 
    constructor(public dataService: DataService) { }
    
    ngOnInit(): void {
    }
    
    getListData (data: parentObject[]) {
      for (let i of data) {
        this.dataService.listData.push({id: i.id, name: i.name});
      }
        
      if (this.dataService.listData.map((x) => x.id).includes(this.dataService.parentID) == false) {
        for (let i of data) {
          this.getListData(i.child);
        }
        
      } else {
        for (let i of data) {
          for (let j of i.child) {
            this.dataService.listData.push({id: j.id, name: j.name});
          }
        }
      }
    }
    
    updateData (data: parentObject[], selected: number, insertData: parentObject) {
      for (let i of data) {
        if (i.id == selected) {
          if (this.dataService.edit) {
            this.remove(this.dataService.index);
          }
          i.child.push(insertData);
          return;
        } else {
          if (i.child.length > 0) {
            this.updateData(i.child, selected, insertData);
          }
        }
      }
    }
    
    showAddForm(edit: boolean, addForm: boolean) {
      this.dataService.showAddForm = addForm;
      this.dataService.edit = edit;
      this.dataService.listData.splice(0, this.dataService.listData.length);
      
      if (this.dataService.addRoot) {
        this.dataService.selectedID = this.dataService.parent[0].id;
      }
      this.getListData(this.dataService.parent);
    }

    select(index: number, edit: boolean, addForm: boolean) {
      this.dataService.index = index;
      this.dataService.selectedID = this.rightdata[index].id;
      this.dataService.selectedName = this.rightdata[index].name;
      this.dataService.radio = this.rightdata[index].radio;

      this.dataService.temp = this.rightdata;
      this.dataService.addRoot = false;
      this.dataService.onSelected = false;

      this.dataService.parentID = this.parentID;
      this.showAddForm(edit, addForm);
    }
    
    add(data: parentObject) {
      if (this.dataService.onSelected) {
        this.updateData(this.dataService.parent, this.dataService.selectedID, data);
      } else {
        if (this.dataService.addRoot) {
          this.dataService.parent[0].child.push(data);
        } else {
          this.rightdata[this.dataService.index].child.push(data); 
        }
      }
    }
    
    edit(data: parentObject) {
      for (let key in data) {
        let value = data[key as keyof object];
        
        if (value != '') {
          this.rightdata[this.dataService.index][key as keyof parentObject] = value;
        }
      }
      
      this.dataService.listData = [];
      
      if (this.dataService.selectedID != this.dataService.parentID) {
        this.updateData(this.dataService.parent, this.dataService.selectedID, this.rightdata[this.dataService.index]);
      }
    }
    
    remove(index: number) {
      this.dataService.showRemoveConfirm = false;
      this.rightdata.splice(index, 1);
      this.dataService.listData.splice(0, this.dataService.listData.length);
    }
  }
  