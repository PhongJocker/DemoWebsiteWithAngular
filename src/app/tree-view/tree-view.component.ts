import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';

interface parentObject {
  id: string;
  name: string;
  note: string;
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
  @Input() 
  rightdata: parentObject[] = this.dataService.parent;

    constructor(public dataService: DataService) { }
    
    ngOnInit(): void {
    }

    select(index: number) {
      this.dataService.index = index;
      this.dataService.temp = this.rightdata;
      this.dataService.addRoot = false;
    }

    add(data: parentObject) {
      const child: parentObject[] = [];
      if (!this.dataService.addRoot) {
        this.rightdata[this.dataService.index].child.push(data);
      }
      else {
        this.rightdata[0].child.push(data)
      }
    }

    edit(data: parentObject) {
      for (let key in data) {
        let value = data[key as keyof object];
        if (value != '') {
          this.rightdata[this.dataService.index][key as keyof parentObject] = value;
        }
      }
    }
    
    remove(index: number) {
      this.dataService.showRemoveConfirm = false;
      this.rightdata.splice(index, 1);
    }
  }
  