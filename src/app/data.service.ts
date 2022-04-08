import { Injectable } from '@angular/core';

interface parentObject {
  id: string;
  name: string;
  note: string;
  radio: string;
  serial: string;
  description: string;
  child: parentObject[];
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  addRoot: boolean = false;
  edit: boolean = false;
  localData = localStorage.getItem('data') == null ? null : localStorage.getItem('data');

  showAddForm: boolean = false;
  showRemoveConfirm: boolean = false;
  onSelected: boolean = false;
  
  index: number;
  selectedName: string;
  parentName: string;
  radio: string = 'bophan';

  temp: parentObject[];
  parent: parentObject[] = this.localData != null? JSON.parse(this.localData): [
    {
      name: "Hệ thống tư vấn quản lý trực tuyến OOC",
      id: "Mã",
      radio: "chinhanh",
      note: '',
      serial: "0",
      description: "Mô tả chức năng - nhiệm vụ",
      child: [
        {
          name: "Giám đốc",
          id: "BGD-1",
          radio: "bophan",
          note: '',
          serial: "1",
          description: "Điều hành hoạt động doanh nghiệp. Trực tiếp phụ trách doanh nghiệp",
          child: [
            {
              name: "Phó giám đốc phụ trách kinh doanh",
              id: "BGD-2",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Điều hành khối kinh doanh",
              child: [
                {
                  name: "Phòng phát triển thị trường",
                  id: "PTTT",
                  radio: "bophan",
                  note: '',
                  serial: "1",
                  description: "Marketing, chính sách giá cước, xúc tiền thương mại, quảng cáo, quản lý thương mại",
                  child: []
                },
                
                {
                  name: "Phòng kinh doanh",
                  id: "KD",
                  radio: "bophan",
                  note: '',
                  serial: "1",
                  description: "Mô tả chung...",
                  child: []
                }
              ]
            },
  
            {
              name: "Phòng tài chính kế toán",
              id: "TCKT",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Quản trị tài chính DN & đầu tư tài chính công tác kế toán",
              child: []
            },
  
            {
              name: "Phòng quản trị nguồn nhân lực",
              id: "QTNNL",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Xây dựng hệ thống & các chính sách nhân sự thực hiện",
              child: []
            },
  
            {
              name: "Phòng R&D",
              id: "RD",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              name: "Phòng hành chính tổng hợp",
              id: "HC",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              name: "Phòng kỹ thuật",
              id: "BGD-1-7",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            }
          ]
        }
      ]
    }];

  listData: string[] = [];

  constructor() { }
}
