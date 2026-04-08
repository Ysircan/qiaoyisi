(function () {
  const STORAGE_KEY = "qiaoyisi-language";

  const titles = {
    index: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Home",
    },
    about: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | About",
    },
    japan: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Japan Skills Internship",
    },
    caregiver: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Caregiver Placement",
    },
    australia: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Australia & New Zealand Migration",
    },
    cert: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Qualifications & Honors",
    },
    contact: {
      zh: "成都巧一思境外就业服务有限公司 | Chengdu Choice Overseas Employment Service",
      en: "Chengdu Choice Overseas Employment Service | Contact",
    },
  };

  const copy = {
    shared: [
      {
        selector: ".top-bar > div:first-child",
        html: {
          zh: '成都总部 · 金牛区二环路北一段241号 · <a href="tel:+862887686055">028-8768 6055</a>',
          en: 'Chengdu HQ · No. 241, North 1st Section, 2nd Ring Road, Jinniu District · <a href="tel:+862887686055">028-8768 6055</a>',
        },
      },
      {
        selector: ".top-bar span",
        text: {
          zh: "周一至周五 9:00–18:00",
          en: "Monday to Friday 9:00-18:00",
        },
      },
      {
        selector: ".logo-cn",
        texts: {
          zh: ["巧一思境外就业", "巧一思境外就业"],
          en: ["Choice Overseas", "Choice Overseas"],
        },
      },
      {
        selector: '.nav-links > li > a[data-page="home"]',
        text: { zh: "首页", en: "Home" },
      },
      {
        selector: '.nav-links > li > a[data-page="about"]',
        text: { zh: "关于我们", en: "About" },
      },
      {
        selector: '.nav-links > li > a[data-page="services"]',
        text: { zh: "服务项目 ▾", en: "Services ▾" },
      },
      {
        selector: '.nav-links > li > a[data-page="cert"]',
        text: { zh: "资质荣誉", en: "Qualifications" },
      },
      {
        selector: '.nav-links > li > a[data-page="contact"]',
        text: { zh: "联系我们", en: "Contact" },
      },
      {
        selector: ".dropdown a",
        texts: {
          zh: ["赴日技能实习", "介护人才派遣", "澳新移民服务"],
          en: [
            "Japan Skills Internship",
            "Caregiver Placement",
            "Australia & NZ Migration",
          ],
        },
      },
      {
        selector: ".nav-cta",
        text: { zh: "免费咨询", en: "Free Consultation" },
      },
      {
        selector: "footer .footer-brand p",
        text: {
          zh: "成都巧一思境外就业服务有限公司，国家商务部批准对外劳务合作资质企业，隶属中国希望集团。",
          en: "Chengdu Choice Overseas Employment Service Co., Ltd. is an enterprise approved by China's Ministry of Commerce for overseas labor cooperation and is part of China Hope Group.",
        },
      },
      {
        selector: ".footer-badges .f-badge",
        texts: {
          zh: ["商务部资质", "ISO 9001", "MARA"],
          en: ["MOFCOM License", "ISO 9001", "MARA"],
        },
      },
      {
        selector: "footer .footer-col h4",
        texts: {
          zh: ["服务", "公司", "联系总部"],
          en: ["Services", "Company", "Head Office"],
        },
      },
      {
        selector: "footer .footer-col:nth-child(2) a",
        texts: {
          zh: ["赴日技能实习", "介护人才派遣", "澳新移民签证"],
          en: [
            "Japan Skills Internship",
            "Caregiver Placement",
            "Australia & NZ Visas",
          ],
        },
      },
      {
        selector: "footer .footer-col:nth-child(3) a",
        texts: {
          zh: ["关于我们", "资质荣誉", "联系方式"],
          en: ["About", "Qualifications", "Contact Details"],
        },
      },
      {
        selector: "footer .footer-col:nth-child(4) a:first-of-type",
        html: {
          zh: "四川省成都市金牛区<br>二环路北一段241号",
          en: "Jinniu District, Chengdu, Sichuan<br>No. 241, North 1st Section, 2nd Ring Road",
        },
      },
      {
        selector: ".footer-bottom span",
        texts: {
          zh: [
            "© 2006–2026 成都巧一思境外就业服务有限公司",
            "商合批[2009]193号 · MARA 2217976 · IAA 202300371",
          ],
          en: [
            "© 2006-2026 Chengdu Choice Overseas Employment Service Co., Ltd.",
            "MOFCOM Approval [2009] No.193 · MARA 2217976 · IAA 202300371",
          ],
        },
      },
    ],
    pages: {
      index: [
        {
          selector: ".hero-badge",
          text: {
            zh: "商务部批准 · 对外劳务合作资质企业",
            en: "Approved by MOFCOM · Qualified Overseas Labor Cooperation Enterprise",
          },
        },
        {
          selector: ".hero h1",
          html: {
            zh: "专业<span>境外就业</span>服务<br>连接中国与世界",
            en: "Professional <span>Overseas Employment</span> Services<br>Connecting China and the World",
          },
        },
        {
          selector: ".hero-desc",
          text: {
            zh: "成都巧一思境外就业服务有限公司创建于2006年，隶属中国希望集团，是获得国家商务部批准的对外劳务合作资质企业。业务覆盖日本、澳大利亚、新西兰、新加坡等国。",
            en: "Founded in 2006, Chengdu Choice Overseas Employment Service Co., Ltd. is part of China Hope Group and is approved by China's Ministry of Commerce for overseas labor cooperation. Our services cover Japan, Australia, New Zealand, Singapore, and more.",
          },
        },
        {
          selector: ".hero-btns a",
          texts: {
            zh: ["预约免费咨询", "了解更多"],
            en: ["Book a Free Consultation", "Learn More"],
          },
        },
        {
          selector: ".h-stat-label",
          texts: {
            zh: ["年行业经验", "签证通过率", "成功派遣"],
            en: ["Years of Experience", "Visa Approval Rate", "Successful Placements"],
          },
        },
        {
          selector: ".h-stat-num",
          texts: {
            zh: ["18+", "98%", "数千"],
            en: ["18+", "98%", "Thousands"],
          },
        },
        {
          selector: ".trust-item",
          afterFirstChildTexts: {
            zh: [
              "商务部对外劳务合作资质",
              "ISO 9001质量管理认证",
              "MARA注册移民代理",
              "新西兰持牌移民顾问",
            ],
            en: [
              "MOFCOM Overseas Labor Cooperation Qualification",
              "ISO 9001 Quality Management Certification",
              "MARA Registered Migration Agent",
              "Licensed New Zealand Immigration Adviser",
            ],
          },
        },
        {
          selector: ".lawyer-section .section-label",
          text: { zh: "首席移民律师", en: "Chief Immigration Counsel" },
        },
        {
          selector: ".lawyer-section .section-title",
          text: {
            zh: "持牌移民代理 · 澳新双重资质",
            en: "Licensed Migration Agent · Dual Australia-New Zealand Credentials",
          },
        },
        {
          selector: ".lawyer-section .section-desc",
          text: {
            zh: "合法持牌，官方可查，为您的移民之路保驾护航。",
            en: "Legally licensed and officially verifiable, safeguarding your migration journey.",
          },
        },
        {
          selector: ".lawyer-info h3",
          text: { zh: "Dezhi Li（Harvey）", en: "Dezhi Li (Harvey)" },
        },
        {
          selector: ".lawyer-title",
          text: {
            zh: "澳新双持牌执业移民专家 / Licensed Immigration Adviser",
            en: "Dual-Licensed Australia-New Zealand Immigration Specialist / Licensed Immigration Adviser",
          },
        },
        {
          selector: ".lawyer-info p",
          text: {
            zh: "Dezhi Li（Harvey）先生是行业内少数拥有澳大利亚与新西兰政府移民局官方双重认证的高级移民法务持牌人。他不仅持有澳大利亚移民代理注册局（MARA）的正式执照，同时获颁新西兰移民顾问管理局（IAA）的全牌照（Full Licence），具备在两国法律框架下直接代表客户处理各类复杂签证与移民事务的法定必备资质。",
            en: "Mr. Dezhi Li (Harvey) is one of the few senior licensed immigration professionals in the industry to hold official recognition from both the Australian and New Zealand immigration authorities. He holds formal registration with Australia's Migration Agents Registration Authority (MARA) and a Full Licence from New Zealand's Immigration Advisers Authority (IAA), giving him the legally required credentials to directly represent clients in complex visa and migration matters under both legal systems.",
          },
        },
        {
          selector: ".l-badge-text",
          htmls: {
            zh: [
              "MARA #2217976<span>澳大利亚注册移民代理 · Registered</span>",
              "IAA #202300371<span>新西兰持牌移民顾问 · Full Licence · Current</span>",
            ],
            en: [
              "MARA #2217976<span>Australia Registered Migration Agent · Registered</span>",
              "IAA #202300371<span>New Zealand Licensed Immigration Adviser · Full Licence · Current</span>",
            ],
          },
        },
        {
          selector: ".lawyer-verify h4",
          text: { zh: "官方资质查询入口", en: "Official Credential Verification" },
        },
        {
          selector: ".verify-link",
          afterFirstChildTexts: {
            zh: [
              "澳大利亚MARA官网查询 — portal.mara.gov.au",
              "新西兰IAA官网查询 — app.mbieregisters.govt.nz",
            ],
            en: [
              "Australia MARA Register — portal.mara.gov.au",
              "New Zealand IAA Register — app.mbieregisters.govt.nz",
            ],
          },
        },
        {
          selector: ".svc-section .section-label",
          text: { zh: "核心服务", en: "Core Services" },
        },
        {
          selector: ".svc-section .section-title",
          text: {
            zh: "覆盖多国的一站式境外就业与移民服务",
            en: "One-Stop Overseas Employment and Migration Services Across Multiple Countries",
          },
        },
        {
          selector: ".svc-section .section-desc",
          text: {
            zh: "从赴日技能实习、介护人才培养到澳新移民签证，为您提供全链条专业方案。",
            en: "From Japan skills internships and caregiver training to Australia and New Zealand migration visas, we provide complete professional solutions.",
          },
        },
        {
          selector: ".svc-body h3",
          texts: {
            zh: ["赴日技能实习", "介护人才派遣", "澳新移民签证"],
            en: [
              "Japan Skills Internship",
              "Caregiver Placement",
              "Australia & NZ Migration Visas",
            ],
          },
        },
        {
          selector: ".svc-body p",
          texts: {
            zh: [
              "与日本监理组合深度合作，涵盖制造业、农业、建筑业等多工种，提供出国前培训、在日管理、生活指导全流程服务。",
              "专业培养介护（养老护理）人才赴日就业，配备西南地区最大实技训练中心，日语教育与技能培训双轨并行。",
              "澳大利亚MARA注册移民代理及新西兰持牌移民顾问，提供雇主担保、技术移民、商业投资移民等签证服务。",
            ],
            en: [
              "Working closely with Japanese supervising organizations across manufacturing, agriculture, construction, and more, with full support from pre-departure training to on-site management and daily guidance in Japan.",
              "Professional caregiver training for employment in Japan, supported by Southwest China's largest practical training center and a dual-track system for Japanese language and skills development.",
              "Led by an Australia MARA registered migration agent and a New Zealand licensed immigration adviser, covering employer-sponsored, skilled, business, and investment visas.",
            ],
          },
        },
        {
          selector: ".svc-link",
          texts: {
            zh: ["了解详情 →", "了解详情 →", "了解详情 →"],
            en: ["View Details →", "View Details →", "View Details →"],
          },
        },
        {
          selector: ".why-text .section-label",
          text: { zh: "为什么选择巧一思", en: "Why Choose Choice" },
        },
        {
          selector: ".why-text h2",
          html: {
            zh: "中国希望集团旗下企业<br>实力与信赖的保障",
            en: "A China Hope Group Company<br>Backed by Strength and Trust",
          },
        },
        {
          selector: ".why-text p",
          text: {
            zh: "巧一思是中国希望集团子公司，集团拥有子公司2000余家、员工逾12万人，经营网络遍及中国大陆及东南亚多国。",
            en: "Choice is a subsidiary of China Hope Group, which has more than 2,000 subsidiaries, over 120,000 employees, and an operating network across mainland China and multiple Southeast Asian countries.",
          },
        },
        {
          selector: ".why-list li",
          afterFirstChildTexts: {
            zh: [
              "国家商务部批准对外劳务合作资质，合法合规",
              "18年日本劳务派遣经验，签证通过率98%",
              "日本五大驻在所全程管理（九州·中四国·关西·北陆·关东）",
              "澳大利亚MARA注册移民代理 + 新西兰持牌顾问双重资质",
            ],
            en: [
              "Approved by China's Ministry of Commerce for overseas labor cooperation, fully legal and compliant",
              "18 years of Japan labor dispatch experience with a 98% visa approval rate",
              "Full-process management through five Japan resident offices: Kyushu, Chugoku-Shikoku, Kansai, Hokuriku, and Kanto",
              "Dual credentials: Australia MARA registered migration agent and New Zealand licensed adviser",
            ],
          },
        },
        {
          selector: ".sc-num",
          htmls: {
            zh: [
              "2006",
              "100<span class=\"sc-unit\">%</span>",
              "5<span class=\"sc-unit\">国</span>",
              "12<span class=\"sc-unit\">万+</span>",
            ],
            en: [
              "2006",
              "100<span class=\"sc-unit\">%</span>",
              "5<span class=\"sc-unit\"> Countries</span>",
              "120<span class=\"sc-unit\">K+</span>",
            ],
          },
        },
        {
          selector: ".sc-label",
          texts: {
            zh: ["公司成立", "签证通过率", "业务覆盖国家", "集团员工规模"],
            en: [
              "Company Founded",
              "Visa Approval Rate",
              "Countries Served",
              "Group Workforce",
            ],
          },
        },
        {
          selector: ".cta-section .section-label",
          afterFirstChildTexts: {
            zh: ["立即行动"],
            en: ["Act Now"],
          },
        },
        {
          selector: ".cta-section h2",
          html: {
            zh: "有境外就业或移民需求？<br>立即预约免费咨询",
            en: "Planning Overseas Work or Migration?<br>Book a Free Consultation Today",
          },
        },
        {
          selector: ".cta-section p",
          text: {
            zh: "无论是赴日工作、介护人才培养，还是澳洲新西兰移民规划，我们的专业团队为您量身定制方案。",
            en: "Whether you are planning work in Japan, caregiver training, or migration to Australia or New Zealand, our professional team will tailor a solution for you.",
          },
        },
        {
          selector: ".cta-section .cta-btns a",
          texts: {
            zh: ["联系我们", "了解公司"],
            en: ["Contact Us", "About the Company"],
          },
        },
      ],
      about: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "企业简介", en: "Company Profile" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "关于巧一思", en: "About Choice" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "创建于2006年，中国希望集团旗下专业境外就业服务企业",
            en: "Founded in 2006, a professional overseas employment service company under China Hope Group",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 关于我们',
            en: '<a href="index.html">Home</a> / About',
          },
        },
        {
          selector: ".highlight-box p",
          text: {
            zh: "成都巧一思境外就业服务有限公司（Chengdu Choice Overseas Employment Service Co., Ltd）是获得国家商务部批准具有外派劳务资格的企业，并通过ISO9001质量管理体系认证。",
            en: "Chengdu Choice Overseas Employment Service Co., Ltd. is an enterprise approved by China's Ministry of Commerce for overseas labor dispatch and is certified under the ISO 9001 quality management system.",
          },
        },
        {
          selector: ".detail-body h2",
          texts: {
            zh: ["公司概况", "集团背景", "全球布局"],
            en: ["Company Overview", "Group Background", "Global Footprint"],
          },
        },
        {
          selector: ".detail-body > p",
          texts: {
            zh: [
              "公司创建于2006年，总部位于四川省成都市金牛区，是中国希望集团的子公司。主要从事境内境外劳务派遣、培训及经济信息咨询、再就业服务等业务，派遣目的地覆盖日本、澳大利亚、新西兰、新加坡、阿拉伯等多个国家和地区。",
              '公司秉承"开发和培养有国际视野的人才，客户的满意是我们的不懈追求"的经营方针和"专业、高效、严谨、诚信、关爱"的服务原则，与海内外各类企业建立了良好的合作关系。自成立以来已成功派送数千名人员出国就业，赴日签证取得率98%。',
              "母公司中国希望集团是中国大陆大型综合性企业集团，在中国大陆、越南、菲律宾、孟加拉国、印度尼西亚、柬埔寨、新加坡等国均设有工厂，集团子公司超过2000家，员工总数逾12万人。",
            ],
            en: [
              "Founded in 2006 and headquartered in Jinniu District, Chengdu, Sichuan, the company is a subsidiary of China Hope Group. Its main businesses include domestic and overseas labor dispatch, training, economic information consulting, and re-employment services, with destinations covering Japan, Australia, New Zealand, Singapore, Arab countries, and more.",
              'The company follows the business philosophy of "developing and cultivating talent with an international outlook, and pursuing customer satisfaction without compromise," together with service principles of professionalism, efficiency, rigor, integrity, and care. Since its establishment, it has successfully sent thousands of people overseas for employment, with a 98% visa approval rate for Japan.',
              "Its parent company, China Hope Group, is a major diversified enterprise group in mainland China, with factories in mainland China, Vietnam, the Philippines, Bangladesh, Indonesia, Cambodia, Singapore, and beyond. The group has more than 2,000 subsidiaries and over 120,000 employees.",
            ],
          },
        },
        {
          selector: ".info-card h4",
          texts: {
            zh: [
              "中国成都（总部）",
              "日本（五大驻在所）",
              "澳大利亚悉尼",
              "新西兰",
              "越南河内",
              "柬埔寨金边",
            ],
            en: [
              "Chengdu, China (Head Office)",
              "Japan (Five Resident Offices)",
              "Sydney, Australia",
              "New Zealand",
              "Hanoi, Vietnam",
              "Phnom Penh, Cambodia",
            ],
          },
        },
        {
          selector: ".info-card p",
          texts: {
            zh: [
              "公司总部及培训基地，负责招募、面试、出国前培训等全流程管理",
              "九州、中·四国、关西、北陆、关东均设驻在所，提供在日全程支持",
              "MARA注册移民代理，提供澳洲签证与移民专业服务",
              "持牌移民顾问，提供新西兰移民签证申请及咨询",
              "VINACOM越南国际投资株式会社，东南亚人才派遣",
              "DREAM MANPOWER (CAMBODIA) Co., Ltd",
            ],
            en: [
              "Company headquarters and training base, handling recruitment, interviews, pre-departure training, and full-process management",
              "Resident offices in Kyushu, Chugoku-Shikoku, Kansai, Hokuriku, and Kanto provide full support in Japan",
              "MARA registered migration agent providing professional Australian visa and migration services",
              "Licensed immigration adviser providing New Zealand visa applications and advisory services",
              "VINACOM Vietnam International Investment Joint Stock Company, handling Southeast Asian talent dispatch",
              "DREAM MANPOWER (CAMBODIA) Co., Ltd",
            ],
          },
        },
        {
          selector: ".timeline-section .section-label",
          text: { zh: "发展历程", en: "Development Timeline" },
        },
        {
          selector: ".timeline-section .section-title",
          text: { zh: "十八年稳步前行", en: "Eighteen Years of Steady Growth" },
        },
        {
          selector: ".tl-year",
          texts: {
            zh: [
              "2006年",
              "2007年",
              "2009年",
              "2010–2011年",
              "2017–2019年",
              "2023年",
              "2024–至今",
            ],
            en: [
              "2006",
              "2007",
              "2009",
              "2010-2011",
              "2017-2019",
              "2023",
              "2024-Present",
            ],
          },
        },
        {
          selector: ".tl-desc",
          texts: {
            zh: [
              "公司成立，取得劳动部《境外就业机构经营许可证》，首批实习生派遣出国",
              "向日本山口县、广岛县派送实习生，成立专门实习训练基地",
              "广岛成立驻日事务所；取得ISO9001认证；获商务部《对外劳务合作经营资格证书》",
              "业务拓展至日本冈山、大阪、兵库、石川等地区",
              "大规模开展介护人才培养与派遣项目，成功输送百余名介护士赴日",
              "取得新西兰移民顾问牌照，澳新移民业务正式启动",
              "对外劳务合作经营资格续期至2030年，持续拓展多国业务版图",
            ],
            en: [
              "The company was founded, obtained the Ministry of Labour Overseas Employment Agency License, and sent its first batch of trainees overseas.",
              "Trainees were dispatched to Yamaguchi and Hiroshima in Japan, and a dedicated internship training base was established.",
              "A Japan office was established in Hiroshima; ISO 9001 certification was obtained; and the Ministry of Commerce issued the Overseas Labor Cooperation Qualification Certificate.",
              "Business expanded to Okayama, Osaka, Hyogo, Ishikawa, and other regions in Japan.",
              "Large-scale caregiver training and dispatch programs were launched, successfully sending more than 100 caregivers to Japan.",
              "A New Zealand immigration adviser licence was obtained, officially launching Australia and New Zealand migration services.",
              "The overseas labor cooperation qualification was renewed through 2030, with continued expansion into multiple countries.",
            ],
          },
        },
        {
          selector: ".cta-section h2",
          text: { zh: "想了解更多？", en: "Want to Learn More?" },
        },
        {
          selector: ".cta-section p",
          text: {
            zh: "欢迎来电或到访我们的成都办公室。",
            en: "You are welcome to call or visit our Chengdu office.",
          },
        },
        {
          selector: ".cta-section .btn-gold",
          text: { zh: "联系我们", en: "Contact Us" },
        },
      ],
      japan: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "服务项目", en: "Services" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "赴日技能实习", en: "Japan Skills Internship" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "18年日本劳务派遣经验，签证通过率98%",
            en: "18 years of Japan labor dispatch experience with a 98% visa approval rate",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 服务项目 / 赴日技能实习',
            en: '<a href="index.html">Home</a> / Services / Japan Skills Internship',
          },
        },
        {
          selector: ".highlight-box p",
          text: {
            zh: '日本政府为缓解老龄化带来的劳动力不足，于1990年创立"研修制度"。巧一思自2006年起深耕此领域，累计成功派送数千名实习生。',
            en: 'To address labor shortages caused by population aging, the Japanese government established the "training system" in 1990. Choice has been deeply engaged in this field since 2006 and has successfully sent thousands of trainees to Japan.',
          },
        },
        {
          selector: ".detail-body h2",
          texts: {
            zh: ["可派遣工种", "实习待遇", "选拔要求", "服务流程"],
            en: [
              "Available Job Categories",
              "Internship Benefits",
              "Selection Requirements",
              "Service Process",
            ],
          },
        },
        {
          selector: ".detail-body > p",
          texts: {
            zh: [
              "制造加工（机械、电子、金属）、食品加工、农业（蔬菜种植、畜牧养殖）、建筑业、木材加工、纺织服装、水产加工等。",
              "在日实习时限一般为三年，法定工作时间为每周平均40小时。从第2个月起进入技能实习期，根据工种不同每月可获11万日元以上收入。在日期间享有日本法律规定的各项保险保障。",
            ],
            en: [
              "Manufacturing and processing (machinery, electronics, metal), food processing, agriculture (vegetable growing, livestock farming), construction, timber processing, textiles and garments, seafood processing, and more.",
              "Internships in Japan usually last three years, with a legal average working time of 40 hours per week. From the second month onward, trainees enter the skills internship stage and can earn more than JPY 110,000 per month depending on the job category, while receiving all insurance protections required under Japanese law.",
            ],
          },
        },
        {
          selector: ".detail-body ul li",
          texts: {
            zh: [
              "年龄18–35岁，性别不限，身体健康",
              "初中及以上文化程度",
              "矫正视力1.0以上",
              "无犯罪前科，无传染病，能吃苦耐劳",
            ],
            en: [
              "Aged 18-35, any gender, in good health",
              "Junior high school education or above",
              "Corrected vision of 1.0 or above",
              "No criminal record, no infectious disease, and able to work hard",
            ],
          },
        },
        {
          selector: ".info-card h4",
          texts: {
            zh: [
              "1. 报名咨询",
              "2. 面试选拔",
              "3. 出国前培训",
              "4. 签证办理",
              "5. 赴日入职",
              "6. 在日管理",
            ],
            en: [
              "1. Application & Consultation",
              "2. Interview Selection",
              "3. Pre-Departure Training",
              "4. Visa Processing",
              "5. Arrival & Placement in Japan",
              "6. On-Site Management in Japan",
            ],
          },
        },
        {
          selector: ".info-card p",
          texts: {
            zh: [
              "了解项目信息，提交个人资料，进行初步筛选",
              "日方企业来华面试或视频面试",
              "3个月以上日语教育、技能训练",
              "公司统一办理在留资格及签证",
              "抵日集中讲习后分配至企业",
              "驻日办事处全程跟进指导",
            ],
            en: [
              "Learn about the program, submit personal information, and complete initial screening",
              "Interview with Japanese employers in person or by video",
              "More than three months of Japanese language education and skills training",
              "The company handles residence eligibility and visa procedures centrally",
              "After arrival training in Japan, candidates are assigned to employers",
              "Full follow-up support from the Japan office",
            ],
          },
        },
        {
          selector: ".cta-section h2",
          text: { zh: "想了解赴日实习项目？", en: "Interested in a Japan Internship Program?" },
        },
        {
          selector: ".cta-section p",
          text: {
            zh: "联系我们获取最新招聘信息。",
            en: "Contact us for the latest recruitment information.",
          },
        },
        {
          selector: ".cta-section .btn-gold",
          text: { zh: "立即咨询", en: "Consult Now" },
        },
      ],
      caregiver: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "服务项目", en: "Services" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "介护人才派遣", en: "Caregiver Placement" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "西南地区最大介护实技训练中心",
            en: "Southwest China's largest caregiver practical training center",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 服务项目 / 介护人才派遣',
            en: '<a href="index.html">Home</a> / Services / Caregiver Placement',
          },
        },
        {
          selector: ".highlight-box p",
          text: {
            zh: "日本已进入深度老龄化社会，介护人才缺口巨大。巧一思自2017年起专项开展介护人才培养与赴日派遣业务。",
            en: "Japan has entered a deeply aging society, creating a major shortage of caregiver talent. Since 2017, Choice has operated dedicated caregiver training and dispatch programs to Japan.",
          },
        },
        {
          selector: ".detail-body h2",
          texts: {
            zh: ["项目优势", "培养体系"],
            en: ["Program Advantages", "Training System"],
          },
        },
        {
          selector: ".detail-body ul li",
          texts: {
            zh: [
              "西南地区最大护理实技训练中心",
              "日语教育与介护技能培训双轨并行",
              "与日本广岛、滋贺、静冈、富山等多县合作",
              "赴日后由公司驻在所持续支持",
            ],
            en: [
              "Southwest China's largest caregiver practical training center",
              "Dual-track Japanese language education and caregiver skills training",
              "Partnerships across multiple Japanese prefectures including Hiroshima, Shiga, Shizuoka, and Toyama",
              "Ongoing support from the company's resident offices after arrival in Japan",
            ],
          },
        },
        {
          selector: ".info-card h4",
          texts: {
            zh: ["日语教育", "实技训练", "文化教育", "资格取得"],
            en: [
              "Japanese Language Training",
              "Practical Skills Training",
              "Cultural Education",
              "Qualification Support",
            ],
          },
        },
        {
          selector: ".info-card p",
          texts: {
            zh: [
              "出国前目标达到N4–N3水平",
              "专业实训中心护理技能实操",
              "日本职场文化与礼仪规范",
              "协助考取相关资格认证",
            ],
            en: [
              "Targeting N4-N3 proficiency before departure",
              "Hands-on caregiver skills practice at a professional training center",
              "Japanese workplace culture and etiquette standards",
              "Support in obtaining relevant qualifications and certifications",
            ],
          },
        },
        {
          selector: ".cta-section h2",
          text: { zh: "想成为赴日介护士？", en: "Want to Become a Caregiver in Japan?" },
        },
        {
          selector: ".cta-section p",
          text: {
            zh: "了解最新招募计划。",
            en: "Learn about the latest recruitment plans.",
          },
        },
        {
          selector: ".cta-section .btn-gold",
          text: { zh: "立即咨询", en: "Consult Now" },
        },
      ],
      australia: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "服务项目", en: "Services" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "澳新移民签证服务", en: "Australia & New Zealand Migration Services" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "MARA注册移民代理 + 新西兰持牌移民顾问",
            en: "MARA Registered Migration Agent + New Zealand Licensed Immigration Adviser",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 服务项目 / 澳新移民服务',
            en: '<a href="index.html">Home</a> / Services / Australia & New Zealand Migration',
          },
        },
        {
          selector: ".highlight-box p",
          text: {
            zh: "巧一思澳新业务由 Dezhi Li（Harvey）主理，同时持有MARA注册资格（#2217976）和新西兰IAA全牌照（#202300371）。",
            en: "Choice's Australia and New Zealand practice is led by Dezhi Li (Harvey), who holds both MARA registration (#2217976) and a New Zealand IAA Full Licence (#202300371).",
          },
        },
        {
          selector: ".detail-body h2",
          texts: {
            zh: ["澳大利亚签证服务", "新西兰签证服务", "持牌代理信息"],
            en: [
              "Australia Visa Services",
              "New Zealand Visa Services",
              "Licensed Adviser Information",
            ],
          },
        },
        {
          selector: ".detail-body .info-card h4",
          texts: {
            zh: [
              "雇主担保签证",
              "技术移民",
              "商业投资移民",
              "其他签证",
              "澳大利亚MARA",
              "新西兰IAA",
            ],
            en: [
              "Employer-Sponsored Visas",
              "Skilled Migration",
              "Business & Investment Migration",
              "Other Visas",
              "Australia MARA",
              "New Zealand IAA",
            ],
          },
        },
        {
          selector: ".detail-body .info-card p",
          htmls: {
            zh: [
              "482/494/186签证",
              "189/190/491签证",
              "188系列/888签证",
              "学生/毕业生/伴侣/父母签证",
              "代理人：Dezhi Li<br>注册号：2217976<br>状态：Registered",
              "顾问：Dezhi Li (Harvey)<br>牌照号：202300371<br>类型：Full Licence · Current",
            ],
            en: [
              "482 / 494 / 186 visas",
              "189 / 190 / 491 visas",
              "188 series / 888 visas",
              "Student / graduate / partner / parent visas",
              "Adviser: Dezhi Li<br>Registration No.: 2217976<br>Status: Registered",
              "Adviser: Dezhi Li (Harvey)<br>Licence No.: 202300371<br>Type: Full Licence · Current",
            ],
          },
        },
        {
          selector: ".detail-body > p",
          text: {
            zh: "提供新西兰技术移民、工作签证、投资移民、家庭团聚签证等各类签证申请及咨询服务。",
            en: "Providing application and advisory services for New Zealand skilled migration, work visas, investment migration, family reunion visas, and more.",
          },
        },
        {
          selector: ".cta-section h2",
          text: { zh: "有澳洲或新西兰移民计划？", en: "Planning Migration to Australia or New Zealand?" },
        },
        {
          selector: ".cta-section p",
          text: {
            zh: "预约持牌代理免费评估。",
            en: "Book a free assessment with a licensed adviser.",
          },
        },
        {
          selector: ".cta-section .btn-gold",
          text: { zh: "预约评估", en: "Book Assessment" },
        },
      ],
      cert: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "资质荣誉", en: "Qualifications & Honors" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "企业资质与认证", en: "Corporate Qualifications & Certifications" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "多重权威资质认证，合法合规保障",
            en: "Multiple authoritative certifications ensuring legal compliance",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 资质荣誉',
            en: '<a href="index.html">Home</a> / Qualifications',
          },
        },
        {
          selector: ".cert-card h3",
          texts: {
            zh: ["营业执照", "对外劳务合作经营资格证书", "澳大利亚MARA移民代理", "新西兰持牌移民顾问"],
            en: [
              "Business License",
              "Foreign Labor Cooperation Qualification Certificate",
              "Australia MARA Migration Agent",
              "New Zealand Licensed Immigration Adviser",
            ],
          },
        },
        {
          selector: ".cert-card p",
          htmls: {
            zh: [
              "统一社会信用代码：91510106790039774<br>成立日期：2006年07月26日<br>注册资本：陆佰万元整<br>法定代表人：马睿",
              "批准文号：商合批[2009]193号<br>有效期：2024年06月12日 – 2030年06月12日<br>发证机关：四川省商务厅",
              "代理人：Dezhi Li<br>注册号：2217976<br>注册日期：2025年12月12日",
              "顾问：Dezhi Li (Harvey)<br>牌照号：202300371<br>牌照类型：Full Licence · Current",
            ],
            en: [
              "Unified Social Credit Code: 91510106790039774<br>Date of Establishment: July 26, 2006<br>Registered Capital: RMB 6 million<br>Legal Representative: Ma Rui",
              "Approval No.: Shang He Pi [2009] No.193<br>Validity: June 12, 2024 - June 12, 2030<br>Issuing Authority: Sichuan Provincial Department of Commerce",
              "Adviser: Dezhi Li<br>Registration No.: 2217976<br>Registration Date: December 12, 2025",
              "Adviser: Dezhi Li (Harvey)<br>Licence No.: 202300371<br>Licence Type: Full Licence · Current",
            ],
          },
        },
        {
          selector: ".cert-tag",
          texts: {
            zh: ["有效", "有效", "Registered", "Current"],
            en: ["Valid", "Valid", "Registered", "Current"],
          },
        },
      ],
      contact: [
        {
          selector: ".sub-hero .section-label",
          text: { zh: "联系方式", en: "Contact" },
        },
        {
          selector: ".sub-hero h1",
          text: { zh: "联系我们", en: "Contact Us" },
        },
        {
          selector: ".sub-hero p",
          text: {
            zh: "多国办事处就近为您服务",
            en: "Serving you through offices in multiple countries",
          },
        },
        {
          selector: ".breadcrumb",
          html: {
            zh: '<a href="index.html">首页</a> / 联系我们',
            en: '<a href="index.html">Home</a> / Contact',
          },
        },
        {
          selector: ".contact-section .section-label",
          text: { zh: "全球办事处", en: "Global Offices" },
        },
        {
          selector: ".contact-section .section-title",
          text: { zh: "选择离您最近的办公室", en: "Choose the Office Closest to You" },
        },
        {
          selector: ".contact-card h3",
          texts: {
            zh: ["中国", "日本", "澳大利亚"],
            en: [
              "China",
              "Japan",
              "Australia",
            ],
          },
        },
        {
          selector: ".contact-card .cc-line",
          htmls: {
            zh: [
              "<strong>地址：</strong>四川省成都市金牛区二环路北一段241号1栋7楼27号",
              "<strong>电话：</strong>028-8768 6055",
              "<strong>邮编：</strong>610036",
              "<strong>工作时间：</strong>周一至周五 9:00–18:00",
              "<strong>职能：</strong>在日实习生工作管理、生活指导、在留资格申请、技能考试协调",
              "<strong>覆盖区域：</strong>九州、中·四国、关西、北陆、关东",
              "<strong>服务时间：</strong>周一至周五 9:00–17:30（日本时间）",
              "<strong>地址：</strong>Level 17/123 Pitt Street, Sydney NSW",
              "<strong>电话：</strong>+61 2 8067 8888",
              "<strong>工作时间：</strong>周一至周五 10:00–17:00",
            ],
            en: [
              "<strong>Address:</strong> Room 27, 7/F, Building 1, No. 241 North 1st Section, 2nd Ring Road, Jinniu District, Chengdu, Sichuan",
              "<strong>Phone:</strong> 028-8768 6055",
              "<strong>Postcode:</strong> 610036",
              "<strong>Hours:</strong> Monday to Friday 9:00-18:00",
              "<strong>Functions:</strong> Work management for trainees in Japan, daily support, residence status applications, and skills test coordination",
              "<strong>Coverage:</strong> Kyushu, Chugoku-Shikoku, Kansai, Hokuriku, Kanto",
              "<strong>Service Hours:</strong> Monday to Friday 9:00-17:30 (Japan Time)",
              "<strong>Address:</strong> Level 17/123 Pitt Street, Sydney NSW",
              "<strong>Phone:</strong> +61 2 8067 8888",
              "<strong>Hours:</strong> Monday to Friday 10:00-17:00",
            ],
          },
        },
        {
          selector: ".process-section .section-label",
          text: { zh: "咨询流程", en: "Consultation Process" },
        },
        {
          selector: ".process-section .section-title",
          text: { zh: "四步开启您的海外之旅", en: "Four Steps to Start Your Overseas Journey" },
        },
        {
          selector: ".p-step h3",
          texts: {
            zh: ["电话 / 在线咨询", "条件评估", "签约办理", "出国就业"],
            en: [
              "Phone / Online Consultation",
              "Eligibility Assessment",
              "Agreement & Processing",
              "Overseas Employment",
            ],
          },
        },
        {
          selector: ".p-step p",
          texts: {
            zh: [
              "初步了解您的需求与目标",
              "专业顾问评估可行方案",
              "签署协议，启动流程",
              "获签出国，持续支持",
            ],
            en: [
              "Initial discussion of your needs and goals",
              "Professional advisers assess feasible options",
              "Sign the agreement and begin the process",
              "Depart after visa approval with continued support",
            ],
          },
        },
        {
          selector: ".cta-section h2",
          text: { zh: "现在就开始", en: "Start Now" },
        },
        {
          selector: ".cta-section p",
          html: {
            zh: '拨打 <strong style="color:var(--gold-light)">028-8768 6055</strong>（成都）或 <strong style="color:var(--gold-light)">+61 2 8067 8888</strong>（悉尼）',
            en: 'Call <strong style="color:var(--gold-light)">028-8768 6055</strong> (Chengdu) or <strong style="color:var(--gold-light)">+61 2 8067 8888</strong> (Sydney)',
          },
        },
      ],
    },
  };

  function detectPage() {
    const fileName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return fileName.replace(/\.html$/, "") || "index";
  }

  function getStoredLanguage() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return value === "en" ? "en" : "zh";
    } catch (error) {
      return "zh";
    }
  }

  function saveLanguage(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}
  }

  function applySingle(node, value, mode) {
    if (!node || value == null) return;
    if (mode === "html") {
      node.innerHTML = value;
      return;
    }
    node.textContent = value;
  }

  function applyAfterFirstChild(node, value) {
    if (!node || value == null) return;
    const first = node.firstElementChild;
    if (!first) {
      node.textContent = value;
      return;
    }
    while (first.nextSibling) {
      node.removeChild(first.nextSibling);
    }
    node.appendChild(document.createTextNode(value));
  }

  function applyOperation(operation, lang) {
    const nodes = Array.from(document.querySelectorAll(operation.selector));
    if (!nodes.length) return;

    if (operation.text) {
      applySingle(nodes[0], operation.text[lang], "text");
      return;
    }

    if (operation.html) {
      applySingle(nodes[0], operation.html[lang], "html");
      return;
    }

    if (operation.texts) {
      const values = operation.texts[lang];
      nodes.forEach(function (node, index) {
        applySingle(node, values[index], "text");
      });
      return;
    }

    if (operation.htmls) {
      const values = operation.htmls[lang];
      nodes.forEach(function (node, index) {
        applySingle(node, values[index], "html");
      });
      return;
    }

    if (operation.afterFirstChildTexts) {
      const values = operation.afterFirstChildTexts[lang];
      nodes.forEach(function (node, index) {
        applyAfterFirstChild(node, values[index]);
      });
    }
  }

  function ensureToggleStyles() {
    if (document.getElementById("lang-toggle-styles")) return;
    const style = document.createElement("style");
    style.id = "lang-toggle-styles";
    style.textContent =
      ".lang-toggle{display:inline-flex;align-items:center;gap:.38rem;background:transparent;border:1px solid var(--border);border-radius:999px;padding:.45rem .72rem;color:var(--navy);font:inherit;font-size:.78rem;font-weight:600;line-height:1;cursor:pointer;transition:all .3s}.lang-toggle:hover{border-color:var(--gold);color:var(--gold)}.lang-toggle-icon{font-size:.92rem;line-height:1}.lang-toggle-label{min-width:1.1rem;text-align:center}@media(max-width:768px){.lang-toggle{padding:.38rem .62rem;font-size:.74rem}.nav-right{gap:.65rem}}";
    document.head.appendChild(style);
  }

  function ensureToggle() {
    ensureToggleStyles();
    const navRight = document.querySelector(".nav-right");
    if (!navRight) return null;

    let button = document.querySelector(".lang-toggle");
    if (button) return button;

    button = document.createElement("button");
    button.type = "button";
    button.className = "lang-toggle";
    button.innerHTML =
      '<span class="lang-toggle-icon" aria-hidden="true">🌐</span><span class="lang-toggle-label">EN</span>';

    button.addEventListener("click", function () {
      const next = document.documentElement.lang === "en" ? "zh" : "en";
      applyLanguage(next);
      saveLanguage(next);
    });

    const mobileToggle = navRight.querySelector(".mobile-toggle");
    if (mobileToggle) {
      navRight.insertBefore(button, mobileToggle);
    } else {
      navRight.appendChild(button);
    }
    return button;
  }

  function updateToggleButton(lang) {
    const button = ensureToggle();
    if (!button) return;
    const label = button.querySelector(".lang-toggle-label");
    if (label) {
      label.textContent = lang === "zh" ? "EN" : "中";
    }
    button.setAttribute(
      "aria-label",
      lang === "zh" ? "Switch to English" : "切换到中文"
    );
    button.title = lang === "zh" ? "Switch to English" : "切换到中文";
  }

  function applyLanguage(lang) {
    const page = detectPage();
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

    const titleSet = titles[page] || titles.index;
    document.title = titleSet[lang] || titleSet.zh;

    copy.shared.forEach(function (operation) {
      applyOperation(operation, lang);
    });

    (copy.pages[page] || []).forEach(function (operation) {
      applyOperation(operation, lang);
    });

    updateToggleButton(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureToggle();
    applyLanguage(getStoredLanguage());
  });
})();
