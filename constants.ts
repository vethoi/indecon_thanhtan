
import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  vi: {
    nav: {
      home: "Trang Chủ",
      location: "Vị Trí",
      fdi: "Thu Hút FDI",
      infrastructure: "Hạ Tầng & Giá",
      services: "Dịch Vụ",
      contact: "Liên Hệ",
      industrialCluster: "CỤM CÔNG NGHIỆP"
    },
    hero: {
      title: "Cụm Công Nghiệp Thanh Tân",
      subtitle: "Điểm đến FDI hoàn hảo",
      developer: "Phát triển bởi Indecon Group",
      area: "Diện tích: 65,47 ha",
      lease: "Thời hạn: Đến năm 2075",
      cta: "Đăng Ký Tư Vấn Ngay",
      totalAreaLabel: "Tổng Diện Tích",
      leaseTermLabel: "Thời Hạn Thuê",
      masterPlanLabel: "Quy Hoạch Tổng Thể",
      masterPlanDesc: "Bố trí chiến lược tối ưu hóa hoạt động công nghiệp."
    },
    stats: {
      fdiTitle: "Kết nối hương vị biển Thái Bình",
      fdiDesc: "Tự hào là địa phương 02 năm liên tiếp (2023 & 2024) thu hút vốn FDI đạt trên 4 tỷ USD. Năm 2025 phấn đấu mục tiêu trên 1,2 tỷ USD.",
      fdiValue: "> 4 Tỷ USD",
      targetValue: "1.2 Tỷ USD",
      ranking: "Top 5 Thu hút đầu tư FDI",
      companiesTitle: "Các Nhà Đầu Tư Tiêu Biểu",
      companies: ["NLG", "Tokyo Gas", "Pegavision", "Greenworks", "Compal", "Geely Auto", "Chery Auto"],
      badges: {
        location: "Vị trí vàng kết nối",
        incentives: "Nhiều chính sách ưu đãi",
        labor: "Nguồn lao động dồi dào",
        global: "Tinh thần hội nhập quốc tế"
      },
      growthEngine: "Động Lực Tăng Trưởng",
      fdiLabel: "FDI 2023-2024",
      targetLabel: "Mục Tiêu 2025",
      annualGrowth: "Tăng Trưởng Trung Bình Năm",
      fdiCapital: "Vốn FDI",
      vsPrevious: "tốc độ tăng trưởng",
      growthRate: "+40%",
      currencyUnit: "Tỷ USD"
    },
    map: {
      title: "Vị Trí Chiến Lược",
      subtitle: "Kết nối giao thông huyết mạch vùng kinh tế trọng điểm Bắc Bộ",
      mapImage: "map_vn.png", 
      googleMapUrl: "https://maps.app.goo.gl/nDFcyEZ8qY7SS3qRA",
      btnLabel: "Xem bản đồ Google Maps",
      distAirport: "Sân bay Quốc tế (Cát Bi / Nội Bài)",
      distSeaport: "Cảng biển Quốc tế (Lạch Huyện / Hải Phòng)",
      distCity: "Trung tâm TP (Thái Bình / Hà Nội)",
      legend: {
        highway: "Cao tốc kết nối",
        airport: "Sân bay",
        seaport: "Cảng biển"
      },
      locationStrategy: "Chiến Lược Vị Trí",
      masterPlanBtn: "Quy Hoạch",
      googleMapBtn: "Google Maps",
      keyAccessRoutes: "Tuyến Giao Thông Chính",
      connectsTo: "Kết nối với CT.08 (Thái Bình - Hải Phòng)",
      highwayUpgraded: "Quốc lộ 39A nâng cấp"
    },
    overview: {
      title: "Tổng quan Khu kinh tế Thái Bình",
      desc: "Nằm trong vùng kinh tế trọng điểm Bắc Bộ, kết nối thuận tiện.",
      locationTitle: "Vị trí vàng",
      locationDesc: "Kết nối dễ dàng với cảng Hải Phòng, cửa khẩu Hữu Nghị, sân bay Nội Bài và Cát Bi thông qua hệ thống cao tốc CT08, CT16, CT05B.",
      infraTitle: "Hạ tầng hiện đại",
      infraDesc: "Đạt tiêu chuẩn quốc tế, đã hoàn thiện và sẵn sàng chào đón dự án."
    },
    labor: {
      title: "Nguồn lao động",
      desc: "Vùng Thái Bình có khoảng 2 triệu người. 60% dưới 35 tuổi. Lao động chất lượng cao chiếm 75%.",
      region: "Vùng 4",
      wage: "Lương tối thiểu: 3.450.000 VND",
      effective: "Áp dụng 01/07/2024"
    },
    pricing: {
      title: "Giá & Thuế Đất",
      landPrice: "Giá thuê đất: Từ 85 USD/m²",
      landTax: "Thuế đất hàng năm: 7.200 VND/m² (ổn định 5 năm)",
      taxIncentive1: "Miễn 100% thuế TNDN (2 năm đầu)",
      taxIncentive2: "Giảm 50% thuế TNDN (4 năm tiếp theo)"
    },
    infra: {
      label: "Hạ Tầng",
      landLeasePriceLabel: "Giá Thuê Đất",
      annualTaxLabel: "Thuế Đất Hàng Năm",
      citIncentivesLabel: "Ưu Đãi Thuế TNDN",
      citIncentivesDesc: "Lợi ích thuế chiến lược cho đầu tư mới.",
      years2: "2 Năm",
      years4: "4 Năm",
      landUsageLabel: "Cơ Cấu Sử Dụng Đất",
      totalLabel: "Tổng Cộng",
      industrialLandLabel: "Đất Công Nghiệp",
      greenWaterLabel: "Cây Xanh & Mặt Nước",
      trafficTechLabel: "Giao Thông & Kỹ Thuật"
    },
    utilities: {
      title: "Điện & Nước",
      electricity: "Điện lưới 22kV",
      electricityDesc: "Theo giá điện EVN. Ưu đãi điện mặt trời mái nhà (Solar Rooftop).",
      water: "Cấp nước sạch",
      waterPrice: "0,45 USD/m³ (3.000 m³/ngày đêm)",
      waste: "Xử lý nước thải",
      wastePrice: "0,3 USD/m³ (1.200 m³/ngày đêm)",
      security: "Phí quản lý hạ tầng",
      securityPrice: "0,25 USD/m²/năm",
      solar: "Ưu đãi Solar Rooftop ESG"
    },
    services: {
      title: "Dịch Vụ Khách Hàng",
      subtitle: "Hỗ trợ FDI toàn diện",
      list: [
        "Nhà xưởng, nhà kho xây sẵn cho thuê",
        "Xây nhà xưởng theo yêu cầu (BTS)",
        "Tư vấn miễn phí thủ tục đầu tư, môi trường, PCCC"
      ],
      steps: {
        investCert: "Giấy chứng nhận đầu tư (Từ 30 ngày)",
        envPermit: "Giấy phép môi trường",
        firePermit: "Giấy phép PCCC",
        constructPermit: "Giấy phép xây dựng (Từ 60 ngày)"
      },
      supportLabel: "Hỗ Trợ",
      fastTrack: "Nhanh Chóng",
      days: "Ngày"
    },
    contact: {
      title: "Liên Hệ",
      phone: "+84 989 646 577",
      email: "indecon.vn@gmail.com",
      address: "Thái Bình, Việt Nam",
      formName: "Họ và tên",
      formEmail: "Email doanh nghiệp",
      formMessage: "Nội dung cần tư vấn",
      formSubmit: "Gửi Yêu Cầu",
      footerQuote: "Bạn có thể đặt bất kỳ câu hỏi nào liên quan đến vấn đề đầu tư."
    }
  },
  en: {
    nav: {
      home: "Home",
      location: "Location",
      fdi: "FDI Stats",
      infrastructure: "Infra & Price",
      services: "Services",
      contact: "Contact",
      industrialCluster: "INDUSTRIAL CLUSTER"
    },
    hero: {
      title: "Thanh Tan Industrial Cluster",
      subtitle: "The Perfect FDI Destination",
      developer: "Developed by Indecon Group",
      area: "Area: 65.47 ha",
      lease: "Lease Term: Until 2075",
      cta: "Get Consultation Now",
      totalAreaLabel: "Total Area",
      leaseTermLabel: "Lease Term",
      masterPlanLabel: "Master Plan",
      masterPlanDesc: "Strategic layout designed for optimal industrial operations."
    },
    stats: {
      fdiTitle: "Connecting the Essence of the Sea",
      fdiDesc: "Attracted over USD 4 billion in FDI for two consecutive years (2023 & 2024). Targeting over USD 1.2 billion in 2025.",
      fdiValue: "> 4 Billion USD",
      targetValue: "1.2 Billion USD",
      ranking: "Top 5 FDI Capital Attraction",
      companiesTitle: "Strategic Investors",
      companies: ["NLG", "Tokyo Gas", "Pegavision", "Greenworks", "Compal", "Geely Auto", "Chery Auto"],
      badges: {
        location: "Strategic Location",
        incentives: "Attractive Incentives",
        labor: "Abundant Labor Force",
        global: "Global Integration Spirit"
      },
      growthEngine: "Growth Engine",
      fdiLabel: "FDI 2023-2024",
      targetLabel: "Target 2025",
      annualGrowth: "Average Annual Growth",
      fdiCapital: "FDI Capital",
      vsPrevious: "growth rate",
      growthRate: "+40%",
      currencyUnit: "B USD"
    },
    map: {
      title: "Strategic Location",
      subtitle: "Vital traffic connection of Northern Key Economic Region",
      mapImage: "map_en.png", 
      googleMapUrl: "https://maps.app.goo.gl/nDFcyEZ8qY7SS3qRA",
      btnLabel: "View on Google Maps",
      distAirport: "Int'l Airports (Cat Bi / Noi Bai)",
      distSeaport: "Int'l Seaports (Lach Huyen / Hai Phong)",
      distCity: "City Centers (Thai Binh / Hanoi)",
      legend: {
        highway: "Expressways",
        airport: "Airports",
        seaport: "Seaports"
      },
      locationStrategy: "Location Strategy",
      masterPlanBtn: "Master Plan",
      googleMapBtn: "Google Maps",
      keyAccessRoutes: "Key Access Routes",
      connectsTo: "Connects to CT.08 (Thai Binh - Hai Phong)",
      highwayUpgraded: "National Highway 39A upgraded"
    },
    overview: {
      title: "Overview Thai Binh Economic Zone",
      desc: "Located in Northern Key Economic Region with seamless connectivity.",
      locationTitle: "Prime Location",
      locationDesc: "Easy access to Hai Phong Port, Huu Nghi Border Gate, Airports via CT08, CT16, CT05B expressways.",
      infraTitle: "Modern Infrastructure",
      infraDesc: "International-standard infrastructure, fully completed and ready for projects."
    },
    labor: {
      title: "Labor Force",
      desc: "Population approx 2 million. 60% under 35. 75% skilled workforce.",
      region: "Region 4",
      wage: "Min Wage: 3,450,000 VND",
      effective: "Effective from July 1, 2024"
    },
    pricing: {
      title: "Land Price & Tax",
      landPrice: "Land Price: From 85 USD/m²",
      landTax: "Annual Land Tax: 7,200 VND/m² (Fixed for 5 years)",
      taxIncentive1: "100% CIT Exemption (First 2 years)",
      taxIncentive2: "50% CIT Reduction (Next 4 years)"
    },
    infra: {
      label: "Infrastructure",
      landLeasePriceLabel: "Land Lease Price",
      annualTaxLabel: "Annual Land Tax",
      citIncentivesLabel: "CIT Incentives",
      citIncentivesDesc: "Strategic tax benefits for new investments.",
      years2: "2 Years",
      years4: "4 Years",
      landUsageLabel: "Land Usage",
      totalLabel: "Total",
      industrialLandLabel: "Industrial Land",
      greenWaterLabel: "Green & Water",
      trafficTechLabel: "Traffic & Tech"
    },
    utilities: {
      title: "Power & Water",
      electricity: "22kV Grid Power",
      electricityDesc: "EVN Tariff. Solar Rooftop incentives available.",
      water: "Clean Water Supply",
      waterPrice: "0.45 USD/m³ (3,000 m³/day)",
      waste: "Wastewater Treatment",
      wastePrice: "0.3 USD/m³ (1,200 m³/day)",
      security: "Infrastructure Management Fee",
      securityPrice: "0.25 USD/m²/year",
      solar: "ESG Solar Incentives"
    },
    services: {
      title: "Customer Services",
      subtitle: "Comprehensive FDI Support",
      list: [
        "Ready-built factories/warehouses for lease",
        "Build-to-suit solutions",
        "Free consultation on permits (Investment, Fire, Environment)"
      ],
      steps: {
        investCert: "Investment Cert (From 30 days)",
        envPermit: "Environmental Permit",
        firePermit: "Fire Prevention (PCCC)",
        constructPermit: "Construction Permit (From 60 days)"
      },
      supportLabel: "Support",
      fastTrack: "Fast Track",
      days: "Days"
    },
    contact: {
      title: "Contact Us",
      phone: "+84 989 646 577",
      email: "indecon.vn@gmail.com",
      address: "Thai Binh, Vietnam",
      formName: "Full Name",
      formEmail: "Business Email",
      formMessage: "Message",
      formSubmit: "Submit Request",
      footerQuote: "Feel free to ask any questions regarding investment."
    }
  },
  zh: {
    nav: {
      home: "主页",
      location: "位置",
      fdi: "FDI 统计",
      infrastructure: "基建与价格",
      services: "服务",
      contact: "联系我们",
      industrialCluster: "工业集群"
    },
    hero: {
      title: "清新工业园 (Thanh Tan)",
      subtitle: "FDI 投资理想目的地",
      developer: "开发商: Indecon Group",
      area: "面积: 65.47 公顷",
      lease: "租期: 至 2075 年",
      cta: "立即咨询",
      totalAreaLabel: "总面积",
      leaseTermLabel: "租赁期限",
      masterPlanLabel: "总体规划",
      masterPlanDesc: "为优化工业运营而设计的战略布局。"
    },
    stats: {
      fdiTitle: "连接海洋之韵 - 太平省",
      fdiDesc: "连续两年（2023 & 2024）吸引 FDI 超 40 亿美元。2025 年目标超 12 亿美元。",
      fdiValue: "> 40 亿美元",
      targetValue: "12 亿美元",
      ranking: "前 5 名 FDI 吸引力",
      companiesTitle: "典型投资者",
      companies: ["NLG", "Tokyo Gas", "Pegavision", "Greenworks", "Compal", "吉利汽车", "奇瑞汽车"],
      badges: {
        location: "黄金连接位置",
        incentives: "多项投资优惠政策",
        labor: "充足劳动力",
        global: "国际化精神"
      },
      growthEngine: "增长引擎",
      fdiLabel: "FDI 2023-2024",
      targetLabel: "2025 目标",
      annualGrowth: "年平均增长率",
      fdiCapital: "FDI 资本",
      vsPrevious: "增长率",
      growthRate: "+40%",
      currencyUnit: "十亿美元"
    },
    map: {
      title: "战略位置",
      subtitle: "北部重点经济区的交通大动脉",
      mapImage: "map_zh.png",
      googleMapUrl: "https://maps.app.goo.gl/nDFcyEZ8qY7SS3qRA",
      btnLabel: "在 Google 地图上查看",
      distAirport: "国际机场 (吉碑 / 内排)",
      distSeaport: "国际海港 (勒县 / 海防)",
      distCity: "市中心 (太平 / 河内)",
      legend: {
        highway: "连接高速公路",
        airport: "机场",
        seaport: "海港"
      },
      locationStrategy: "位置战略",
      masterPlanBtn: "总体规划",
      googleMapBtn: "谷歌地图",
      keyAccessRoutes: "主要通道",
      connectsTo: "连接 CT.08 (太平 - 海防)",
      highwayUpgraded: "39A 国道升级"
    },
    overview: {
      title: "太平经济区概览",
      desc: "位于北部重点经济区，连接便利。",
      locationTitle: "黄金位置",
      locationDesc: "通过 CT08, CT16, CT05B 高速公路轻松连接海防港、友谊关口岸及机场。",
      infraTitle: "现代化基础设施",
      infraDesc: "符合国际标准，基础设施已完备，随时迎接您的项目。"
    },
    labor: {
      title: "劳动力资源",
      desc: "人口约 200 万。60% 为 35 岁以下。75% 经过职业培训。",
      region: "第 4 区",
      wage: "最低工资: 3,450,000 越南盾",
      effective: "2024年7月1日起生效"
    },
    pricing: {
      title: "土地价格与税收",
      landPrice: "土地价格: 85 美元/m² 起",
      landTax: "年土地税: 7,200 越南盾/m² (每5年调整)",
      taxIncentive1: "企业所得税 100% 免税 (前 2 年)",
      taxIncentive2: "企业所得税减免 50% (后 4 年)"
    },
    infra: {
      label: "基础设施",
      landLeasePriceLabel: "土地租赁价格",
      annualTaxLabel: "年度土地税",
      citIncentivesLabel: "企业所得税优惠",
      citIncentivesDesc: "新投资的战略税收优惠。",
      years2: "2 年",
      years4: "4 年",
      landUsageLabel: "土地使用结构",
      totalLabel: "总计",
      industrialLandLabel: "工业用地",
      greenWaterLabel: "绿地与水域",
      trafficTechLabel: "交通与技术"
    },
    utilities: {
      title: "电力与用水",
      electricity: "22kV 电网",
      electricityDesc: "EVN 标准电价。屋顶太阳能优惠。",
      water: "清洁供水",
      waterPrice: "0.45 美元/m³ (3,000 m³/昼夜)",
      waste: "污水处理",
      wastePrice: "0.3 美元/m³ (1,200 m³/昼夜)",
      security: "基础设施管理费",
      securityPrice: "0.25 美元/m²/年",
      solar: "ESG 绿色能源认证"
    },
    services: {
      title: "客户服务",
      subtitle: "全面 FDI 支持",
      list: [
        "现成厂房、仓库出租",
        "按需定制建设 (BTS)",
        "免费咨询投资证书、消防、环保手续"
      ],
      steps: {
        investCert: "投资证书 (30天起)",
        envPermit: "环保许可",
        firePermit: "消防证书 (PCCC)",
        constructPermit: "施工许可 (60天起)"
      },
      supportLabel: "支持",
      fastTrack: "快速通道",
      days: "天"
    },
    contact: {
      title: "联系我们",
      phone: "+84 989 646 577",
      email: "indecon.vn@gmail.com",
      address: "越南, 太平省",
      formName: "姓名",
      formEmail: "企业邮箱",
      formMessage: "咨询内容",
      formSubmit: "提交请求",
      footerQuote: "您可提出任何问题，涉及投资、厂房建设等。"
    }
  }
};
