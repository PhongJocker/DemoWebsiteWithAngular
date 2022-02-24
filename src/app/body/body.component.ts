import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public rightdata = [
  {
    name: "Hệ thống tư vấn quản lý trực tuyến OOC",
    id: "Mã",
    description: "Mô tả chức năng - nhiệm vụ",
    child: [
      {
        name: "Giám đốc",
        id: "BGD-1",
        description: "Điều hành hoạt động doanh nghiệp. Trực tiếp phụ trách doanh nghiệp",
        child: [
          {
            name: "Phó giám đốc phụ trách kinh doanh",
            id: "BGD-2",
            description: "Điều hành khối kinh doanh",
            child: [
              {
                name: "Phòng phát triển thị trường",
                id: "PTTT",
                description: "Marketing, chính sách giá cước, xúc tiền thương mại, quảng cáo, quản lý thương mại",
                child: []
              },
              
              {
                name: "Phòng kinh doanh",
                id: "KD",
                description: "Mô tả chung...",
                child: []
              }
            ]
          },

          {
            name: "Phòng tài chính kế toán",
            id: "TCKT",
            description: "Quản trị tài chính DN & đầu tư tài chính công tác kế toán",
            child: []
          },

          {
            name: "Phòng quản trị nguồn nhân lực",
            id: "QTNNL",
            description: "Xây dựng hệ thống & các chính sách nhân sự thực hiện",
            child: []
          },

          {
            name: "Phòng R&D",
            id: "RD",
            description: "Mô tả chung...",
            child: []
          },

          {
            name: "Phòng hành chính tổng hợp",
            id: "HC",
            description: "Mô tả chung...",
            child: []
          },

          {
            name: "Phòng kỹ thuật",
            id: "BGD-1-7",
            description: "Mô tả chung...",
            child: []
          }
        ]
      }
    ]
  }]

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
