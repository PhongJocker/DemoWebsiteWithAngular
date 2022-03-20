import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public leftdata = [
    {
      title: "Thiết lập chung",
      child: [
        {
          ic: '<i class="bi bi-file-text"></i>',
          name: "Thông tin công ty",
          color: '#159FB9'
        },
        {
          ic: '<i class="bi bi-currency-dollar"></i>',
          name: "Tình trạng hợp đồng",
          color: 'red'
        }
      ]
    },
    {
      title: "Quản trị hệ thống",
      child: [
        {
          ic: '<i class="bi bi-person-fill"></i>',
          name: "Nhân sự",
          color: 'green'
        },
        {
          ic: '<i class="bi bi-people-fill"></i>',
          name: "Vai trò",
          color: '#FBC211'
        }
      ]
    },
    {
      title: "Thiết lập dữ liệu bắt buộc",
      child: [
        {
          ic: '<i class="bi bi-diagram-3-fill"></i>',
          name: "Cơ cấu tổ chức",
          color: '#159FB9'
        },
        {
          ic: '<i class="bi bi-geo-fill"></i>',
          name: "Cơ cấu chức danh",
          color: '#27A341'
        }
      ]
    },
    {
      title: "Thiết lập cho hệ thống cơ cấu tổ chức",
      child: [
        {
          ic: '<i class="bi bi-file-earmark-text"></i>',
          name: "Biểu mẫu bảng MTCV",
          color: '#159FB9'
        }
      ]
    },
    {
      title: "Thiết lập cho hệ thống đánh giá N.Lực",
      child: [
        {
          ic: '<i class="bi bi-gear-wide-connected"></i>',
          name: "Cấu hình công ty",
          color: '#159FB9'
        },
        {
          ic: '<i class="bi bi-envelope-fill"></i>',
          name: "Biểu mẫu Email",
          color: '#159FB9'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
