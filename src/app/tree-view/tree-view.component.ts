import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})

export class TreeViewComponent implements OnInit {
  @Input() rightdata: parentObject[] = this.dataService.parent;
  @Input() parentName: string;
    
 
    constructor(public dataService: DataService) { }
    
    ngOnInit(): void {
    }
    
    getListData (data: parentObject[], selected: string[]) {
      for (let i of data) {
        this.dataService.listData.push(i.name);

        if (selected.includes(i.name) == false) {
          if (i.child.length > 0) {
            this.getListData(i.child, selected);
          }
        }
      }
    }
    
    updateData (data: parentObject[], selected: string, insertData: parentObject) {
      for (let i of data) {
        if (i.name == selected) {
          if (this.dataService.edit) {
            this.rightdata.splice(this.dataService.index, 1);
          }
          i.child.push(insertData);
          this.dataService.listData.splice(0, this.dataService.listData.length);
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

      if (this.dataService.addRoot) {
        this.dataService.listData.push(this.dataService.parent[0].name);
        this.dataService.selectedName = this.dataService.parent[0].name;
        this.getListData(this.dataService.parent[0].child, this.dataService.parent.map(item => item.name));
      } else {
        this.getListData(this.dataService.parent, this.rightdata.map(item => item.name));
      }
    }

    select(index: number, edit: boolean, addForm: boolean) {
      this.dataService.index = index;
      this.dataService.selectedName = this.rightdata[index].name;
      this.dataService.radio = this.rightdata[index].radio;

      this.dataService.temp = this.rightdata;
      this.dataService.addRoot = false;

      this.dataService.parentName = this.parentName;
      this.showAddForm(edit, addForm);
    }
    
    add(data: parentObject) {
      if (this.dataService.selectedName != '') {
        this.updateData(this.dataService.parent, this.dataService.selectedName, data);
        
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
      
      if (this.dataService.selectedName != this.dataService.parentName) {
        this.updateData(this.dataService.parent, this.dataService.selectedName, this.rightdata[this.dataService.index]);
      }
    }
    
    remove(index: number) {
      this.dataService.showRemoveConfirm = false;
      this.rightdata.splice(index, 1);
      this.dataService.listData = [];
    }
  }
  