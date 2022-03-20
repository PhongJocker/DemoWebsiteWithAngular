import { Injectable } from '@angular/core';

interface parentObject {
  id: string;
  name: string;
  note: string;
  serial: string;
  description: string;
  child: parentObject[];
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  index: number;
  parent: parentObject[] = [
    {
      name: "Hệ thống tư vấn quản lý trực tuyến OOC",
      id: "Mã",
      note: '',
      serial: "0",
      description: "Mô tả chức năng - nhiệm vụ",
      child: [
        {
          name: "Giám đốc",
          id: "BGD-1",
          note: '',
          serial: "1",
          description: "Điều hành hoạt động doanh nghiệp. Trực tiếp phụ trách doanh nghiệp",
          child: [
            {
              name: "Phó giám đốc phụ trách kinh doanh",
              id: "BGD-2",
              note: '',
              serial: "1",
              description: "Điều hành khối kinh doanh",
              child: [
                {
                  name: "Phòng phát triển thị trường",
                  id: "PTTT",
                  note: '',
                  serial: "1",
                  description: "Marketing, chính sách giá cước, xúc tiền thương mại, quảng cáo, quản lý thương mại",
                  child: []
                },
                
                {
                  name: "Phòng kinh doanh",
                  id: "KD",
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
              note: '',
              serial: "1",
              description: "Quản trị tài chính DN & đầu tư tài chính công tác kế toán",
              child: []
            },
  
            {
              name: "Phòng quản trị nguồn nhân lực",
              id: "QTNNL",
              note: '',
              serial: "1",
              description: "Xây dựng hệ thống & các chính sách nhân sự thực hiện",
              child: []
            },
  
            {
              name: "Phòng R&D",
              id: "RD",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              name: "Phòng hành chính tổng hợp",
              id: "HC",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            },
  
            {
              name: "Phòng kỹ thuật",
              id: "BGD-1-7",
              note: '',
              serial: "1",
              description: "Mô tả chung...",
              child: []
            }
          ]
        }
      ]
    }];
  addRoot: boolean = false;
  showAddForm: boolean = false;
  showRemoveConfirm: boolean = false;
  temp: parentObject[];
  edit = false;
  constructor() { }
}
