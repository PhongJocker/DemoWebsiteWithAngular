import { Injectable } from '@angular/core';

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

interface listObject {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  addRoot: boolean = false;
  edit: boolean = false;
  localData = localStorage.getItem('PhongDemoData') == null ? null : localStorage.getItem('PhongDemoData');

  showAddForm: boolean = false;
  showRemoveConfirm: boolean = false;
  onSelected: boolean = false;
  
  index: number;
  counter: number = 9;
  selectedID: number;
  selectedName: string;
  parentID: number;
  radio: string = 'bophan';

  temp: parentObject[];
  listData: listObject[] = [];
  
  parent: parentObject[] = this.localData != null? JSON.parse(this.localData): [
    {
      id: 0,
      name: "Hệ thống tư vấn quản lý trực tuyến OOC",
      code: "Mã",
      radio: "chinhanh",
      note: '',
      serial: "0",
      description: "Mô tả chức năng - nhiệm vụ",
      child: [
        {
          id: 1,
          name: "Giám đốc",
          code: "BGD-1",
          radio: "bophan",
          note: '',
          serial: "1",
          description: "Điều hành hoạt động doanh nghiệp. Trực tiếp phụ trách doanh nghiệp",
          child: [
            {
              id: 2,
              name: "Phó giám đốc phụ trách kinh doanh",
              code: "BGD-2",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Điều hành khối kinh doanh",
              child: [
                {
                  id: 3,
                  name: "Phòng phát triển thị trường",
                  code: "PTTT",
                  radio: "bophan",
                  note: '',
                  serial: "1",
                  description: "Marketing, chính sách giá cước, xúc tiền thương mại, quảng cáo, quản lý thương mại",
                  child: []
                },

                {
                  id: 4,
                  name: "Phòng kinh doanh",
                  code: "KD",
                  radio: "bophan",
                  note: '',
                  serial: "1",
                  description: "Mô tả chung...",
                  child: []
                }
              ]
            },
  
            {
              id: 5,
              name: "Phòng tài chính kế toán",
              code: "TCKT",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Quản trị tài chính DN & đầu tư tài chính công tác kế toán",
              child: []
            },
  
            {
              id: 6,
              name: "Phòng quản trị nguồn nhân lực",
              code: "QTNNL",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Xây dựng hệ thống & các chính sách nhân sự thực hiện",
              child: []
            },
  
            {
              id: 7,
              name: "Phòng R&D",
              code: "RD",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              id: 8,
              name: "Phòng hành chính tổng hợp",
              code: "HC",
              radio: "bophan",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              id: 9,
              name: "Phòng kỹ thuật",
              code: "BGD-1-7",
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

  constructor() { }
}
