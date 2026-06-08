import type { ProjectRecord } from "./contentTypes";
import diagramSignalFlow from "../assets/projects/chaos-interface/diagram-signal-flow.svg";
import diagramRouteModel from "../assets/projects/chaos-interface/diagram-route-model.svg";
import plateClosedFieldP3 from "../assets/projects/chaos-interface/plate-closed-field-p3.webp";
import plateOpenQueueP3 from "../assets/projects/chaos-interface/plate-open-queue-p3.webp";
import plateDetailRecord from "../assets/projects/chaos-interface/plate-detail-record.webp";
import ccsArchitecture from "../assets/projects/ccs/ccs-architecture.svg";
import energyClarityState from "../assets/projects/energy-sense/energy-clarity-state.webp";
import energyDrainState from "../assets/projects/energy-sense/energy-drain-state.webp";
import energyRecoveryState from "../assets/projects/energy-sense/energy-recovery-state.webp";
import tendStateMachine from "../assets/projects/tend/tend-state-machine.svg";
import tendSystemLayers from "../assets/projects/tend/tend-system-layers.svg";

export const projects: ProjectRecord[] = [
  {
    id: "C03",
    slug: "chaos-interface",
    title: {
      en: "Zayn Archive Interface",
      zh: "混沌接口",
    },
    status: "routed",
    statusLabel: {
      en: "routed",
      zh: "已路由",
    },
    type: "personal archive system",
    typeLabel: {
      en: "personal archive system",
      zh: "个人档案系统",
    },
    route: "ROOT / LIVE",
    meta: "005 / routed archive interface",
    code: "z+02",
    format: "portfolio archive site / WebGL interface / bilingual content system",
    formatLabel: {
      en: "portfolio archive site / WebGL interface / bilingual content system",
      zh: "作品集档案站点 / WebGL 界面 / 双语内容系统",
    },
    plateCaption: {
      en: "The archive begins as a quiet projected field.",
      zh: "档案以一个安静的投影场域开始。",
    },
    summary: {
      en: "The archive you are currently inside — built to prove that a portfolio can be a running system rather than a static display surface. The interface, content model, and bilingual routing are all part of the evidence.",
      zh: "你现在正在其中的这个档案——被构建来证明：一个作品集可以是一个正在运行的系统，而不只是一个静态展示页面。界面本身、内容模型，和双语路由——都是证明的一部分。",
    },
    evidence: [
      {
        en: "System architecture proof: URL-backed routing, typed project records, bilingual content model — built to hold future work without redesign.",
        zh: "系统架构证明：URL 状态路由、类型化项目记录、双语内容模型——构建时就能承载未来记录，不需要每次重新设计。",
      },
      {
        en: "Visual judgment proof: every element — tesseract, signal queue, record templates — emerged from concept, not from a template kit.",
        zh: "视觉判断证明：每个元素——Tesseract、信号队列、记录模板——都从概念中生长出来，不是从模板库选的。",
      },
      {
        en: "Identity routing proof: this portfolio routes through Zayn, not through the studio name. That distinction is a design decision.",
        zh: "身份路由证明：这个作品集通过 Zayn 来路由，而不是通过工作室名称。这个区别是一个设计决策。",
      },
    ],
    template: "slab",
    metadata: [
      { label: { en: "year", zh: "年份" }, value: { en: "2026", zh: "2026" } },
      {
        label: { en: "role", zh: "角色" },
        value: {
          en: "concept / art direction / interaction design / frontend prototyping / system design / content architecture",
          zh: "概念 / 艺术方向 / 交互设计 / 前端原型 / 系统设计 / 内容架构",
        },
      },
      {
        label: { en: "medium", zh: "媒介" },
        value: {
          en: "WebGL interface / archive site / bilingual content model",
          zh: "WebGL 界面 / 档案站点 / 双语内容模型",
        },
      },
      { label: { en: "status", zh: "状态" }, value: { en: "routed archive system", zh: "已路由的档案系统" } },
      {
        label: { en: "stack", zh: "技术" },
        value: { en: "Vite / React / TypeScript / Three.js", zh: "Vite / React / TypeScript / Three.js" },
      },
      {
        label: { en: "system", zh: "系统" },
        value: {
          en: "closed field / open queue / project record / info pages",
          zh: "关闭场域 / 开放队列 / 项目记录 / 信息页",
        },
      },
    ],
    sections: [
      {
        id: "premise",
        title: { en: "Archive Machine", zh: "档案机器" },
        body: [
          {
            en: "This project began with a refusal of the default portfolio format. The goal was not to make a polished display surface, but to build a running archive for active systems, unfinished signals, and project records.",
            zh: "这个项目一开始就拒绝了默认的作品集格式。我不想做一个精致的展示页面，也不是做 Chaostudio 主站——而是建立一个正在运行的档案系统，用来容纳活跃系统、未完成的信号与项目记录。",
          },
          {
            en: "The core proposition is: chaos is not disorder; it is the state before everything begins. In the interface, that idea becomes a field. Projects enter as compressed signals, pass through focus states, and only later become readable records.",
            zh: "核心命题是：混沌不是失序，而是一切生长之前的状态。在界面里，这个想法变成了一个场域。项目先以压缩信号进入，穿过聚焦状态，然后才成为可读的记录。",
          },
        ],
        mediaIds: ["plate-closed-field-p3"],
      },
      {
        id: "interface-iteration",
        title: { en: "Interface Iteration Trail", zh: "界面迭代轨迹" },
        body: [
          {
            en: "Early directions tested minimal portfolio layouts, text-heavy references, and a Namespace-like archive structure. Those versions clarified what the site should not become: a reference-site remix with Chaostudio copy placed on top.",
            zh: "早期我测试过极简作品集排版、文字密集的参考版本，以及接近 Namespace 的档案结构。这些版本帮助确认了这个站不应该变成什么：不是把 Chaostudio 的文案套在参考站结构上，也不是 Chaostudio 的公司主页。",
          },
          {
            en: "The direction shifted through roughly 16 named skeleton iterations before locking. Each pass resolved a specific tension: v3 moved from light to dark; v4 introduced the field/system split; v4.6 locked the grid and type scale; v4.16 stabilized the signal queue and plate system. The trail is the proof — each version made the next one possible.",
            zh: "方向经过大约 16 个命名的 skeleton 迭代才锁定。每一轮解决一个具体的张力：v3 从浅色转向深色；v4 引入了场域与系统的分离；v4.6 锁定了网格和字体尺度；v4.16 稳定了信号队列和图版系统。这条迭代轨迹本身就是证明——每个版本让下一个版本成为可能。",
          },
        ],
      },
      {
        id: "tesseract-field",
        title: { en: "Tesseract Field", zh: "Tesseract 场域" },
        body: [
          {
            en: "The tesseract is the site's central visual anchor. It comes from the idea of a high-dimensional structure projected into a lower-dimensional interface. It should not read as decoration. It acts as entry point, processing object, field engine, and compressed system marker.",
            zh: "Tesseract 是这个站的核心视觉锚点。它来自「高维结构投影到低维界面」这个想法。它不是装饰——它是入口、处理对象、场域引擎与压缩的系统标记。",
          },
          {
            en: "The visual-anchor line explored scale, line weight, reverse type, idle pulse, and open-state handoff. The accepted direction places the visitor inside a projected field rather than outside a complete 3D object.",
            zh: "视觉锚点的迭代里，我测试了尺度、线重、反白文字、idle pulse，以及打开状态的 handoff。最终方向不是让访客站在外部观看一个 3D 物体，而是进入一个被投影出来的场域。",
          },
        ],
      },
      {
        id: "signal-queue",
        title: { en: "Signal Queue", zh: "信号队列" },
        body: [
          {
            en: "The open archive state is built around a vertical signal queue. Projects do not appear as cards. They behave like signal slices moving through a scanner: latent records above, an active signal in the scan plane, and processed records below.",
            zh: "开放档案状态围绕一个纵向信号队列建立。项目不以卡片出现，而像穿过扫描器的信号切片：上方是潜伏记录，中段是扫描平面中的当前信号，下方是已处理记录。",
          },
          {
            en: "The interaction model syncs the active signal with accession metadata and project register state. Click, wheel, and keyboard movement shift the focus without turning the archive into a normal carousel.",
            zh: "交互模型同步当前信号、接入元数据与项目登记状态。点击、滚轮、键盘都可以切换焦点——但它不应该读成普通 carousel，而应该像档案扫描。",
          },
        ],
        mediaIds: ["plate-open-queue-p3", "diagram-signal-flow"],
      },
      {
        id: "project-records",
        title: { en: "Project Records", zh: "项目记录" },
        body: [
          {
            en: "Project detail pages are deeper archive records, not marketing case studies. The tesseract leaves the detail page so the project evidence can become the visual focus.",
            zh: "项目详情页是更深一层的档案记录，而不是营销式 case study。进入详情页后，Tesseract 会退场，让项目自身的证据材料成为视觉焦点。",
          },
          {
            en: "The system keeps two templates: slab for long-form records with a readable document flow, and case for rawer dossier-style layouts. ZAI uses slab — the horizontal header surfaces title, thesis, evidence, and metadata together at entry, then yields to the section trail below.",
            zh: "系统保留两套模板：slab 用于具有可读文档流的长文本记录，case 用于更原始的档案式布局。ZAI 使用 slab——水平 header 在入口处同时呈现标题、论点、证据与元数据，然后让位于下方展开的 section 轨迹。",
          },
        ],
        mediaIds: ["plate-detail-record"],
      },
      {
        id: "identity-routing",
        title: { en: "Identity Routing", zh: "身份路由" },
        body: [
          {
            en: "The archive runs at zayn.chaostudio.org. But the subject of this portfolio is Zayn, not Chaostudio. That distinction required an explicit routing decision built into the design.",
            zh: "这个档案运行在 zayn.chaostudio.org。但这个作品集的主体是 Zayn，不是 Chaostudio。这个区别需要在设计中做出明确的路由决定。",
          },
          {
            en: "Chaostudio serves as the field language — the wider studio context from which these projects emerge. Zayn is the authorial center: the records are Zayn's work, the brand mark reads \"zayn archive interface\", and the About text speaks in Zayn's voice. The portfolio routes through the person, not the studio. This is a design decision, not just a naming convention.",
            zh: "Chaostudio 作为场域语言——这些项目诞生的工作室语境。Zayn 是主体中心：记录是 Zayn 的工作，品牌标识读作「zayn archive interface」，About 文本以 Zayn 的声音说话。作品集通过人来路由，而不是通过工作室。这是一个设计决策，不只是命名约定。",
          },
        ],
        mediaIds: ["diagram-route-model"],
      },
      {
        id: "production-bridge",
        title: { en: "Production Bridge", zh: "生产桥接" },
        body: [
          {
            en: "After v4.16 locked the structure, the project moved into Phase 3 production build-out. The prototype became a Vite + React + TypeScript site with URL-backed states, bilingual-ready project records, and a content-intake workflow for real project material.",
            zh: "v4.16 锁定结构后，我把原型迁移为 Vite + React + TypeScript 站点，并建立了 URL 状态、双语项目记录，以及用于收集真实项目材料的 content-intake 工作流。",
          },
          {
            en: "The production bridge matters because the visual system is no longer only a standalone prototype. It now has a content model that can hold future records without redesigning the layout every time a project changes.",
            zh: "这一步之所以重要：视觉系统不再只是一个独立原型。它现在有了可以继续承载未来项目记录的内容模型，不需要每次有新项目就重新设计布局。",
          },
        ],
      },
    ],
    media: [
      {
        id: "plate-closed-field-p3",
        kind: "image",
        src: plateClosedFieldP3,
        role: "hero",
        alt: {
          en: "Zayn Archive Interface in closed field state — tesseract projection and reverse-type title.",
          zh: "关闭场域状态下的 Zayn Archive Interface——Tesseract 投影与反白标题。",
        },
        caption: {
          en: "The archive begins as a quiet projected field.",
          zh: "档案以一个安静的投影场域开始。",
        },
      },
      {
        id: "plate-detail-record",
        kind: "image",
        src: plateDetailRecord,
        role: "plate",
        alt: {
          en: "Zayn Archive Interface detail record — archive record structure with section index, metadata, and evidence plates.",
          zh: "Zayn Archive Interface 详情记录——带有 section 索引、元数据与证据图版的档案记录结构。",
        },
        caption: {
          en: "Projects become archive records. The record is the evidence.",
          zh: "项目成为档案记录。记录本身就是证据。",
        },
      },
      {
        id: "plate-open-queue-p3",
        kind: "image",
        src: plateOpenQueueP3,
        role: "plate",
        alt: {
          en: "Open archive state with vertical signal queue and Zayn Archive Interface as active signal.",
          zh: "开放档案状态，带有纵向信号队列，Zayn Archive Interface 为当前信号。",
        },
        caption: {
          en: "Projects enter the system as signals, not cards.",
          zh: "项目以信号进入系统，而不是以卡片出现。",
        },
      },
      {
        id: "diagram-route-model",
        kind: "image",
        src: diagramRouteModel,
        role: "diagram",
        alt: {
          en: "Route model diagram: field → archive → project records → about/contact states.",
          zh: "路由模型图：场域 → 档案 → 项目记录 → 关于/联系状态。",
        },
        caption: {
          en: "The route model — every path through the archive, and where identity enters the system.",
          zh: "路由模型——档案中的每条路径，以及身份在何处进入系统。",
        },
      },
      {
        id: "diagram-signal-flow",
        kind: "image",
        src: diagramSignalFlow,
        role: "plate",
        alt: {
          en: "Signal flow diagram: latent, queued, active, output states.",
          zh: "信号流图：潜伏、排队、当前、输出状态。",
        },
        caption: {
          en: "The queue structure compresses project browsing into signal states.",
          zh: "队列结构把项目浏览压缩成信号状态。",
        },
      },
    ],
  },
  {
    id: "D04",
    slug: "tend",
    liveUrl: "https://tend.chaostudio.org",
    title: {
      en: "Tend",
    },
    status: "demo complete",
    statusLabel: {
      en: "demo complete",
      zh: "演示版完成",
    },
    type: "booking automation system",
    typeLabel: {
      en: "booking automation system",
      zh: "预约自动化系统",
    },
    route: "AI OPS / DEMO",
    meta: "004 / booking automation / demo complete",
    code: "z-04",
    format: "system design / Next.js / state machine",
    formatLabel: {
      en: "system design / Next.js / state machine",
      zh: "系统设计 / Next.js / 状态机",
    },
    summary: {
      en: "Tend is a booking automation system for independent wellness practitioners, built around a deterministic state machine. The core design problem: how do you automate discretionary decisions without erasing practitioner judgment?",
      zh: "Tend 是为独立 wellness 从业者构建的预约自动化系统，以确定性状态机为核心。核心设计问题：如何在不抹去从业者判断的前提下，自动化那些需要权衡的决策？",
    },
    evidence: [
      {
        en: "3–5 hrs/week lost to booking coordination per independent practitioner",
        zh: "每位独立从业者每周因预约协调损失 3–5 小时",
      },
      {
        en: "Deterministic state machine — all transitions explicit, no hidden mutations",
        zh: "确定性状态机——所有跳转显式，没有隐式状态变更",
      },
      {
        en: "Policy layer: auto · draft · manual — practitioner controls automation level",
        zh: "策略层：自动 · 草稿 · 手动——从业者掌控自动化程度",
      },
    ],
    template: "slab",
    metadata: [
      { label: { en: "year", zh: "年份" }, value: { en: "2026" } },
      { label: { en: "role", zh: "角色" }, value: { en: "system design / product", zh: "系统设计 / 产品" } },
      { label: { en: "medium", zh: "媒介" }, value: { en: "Next.js / state machine / Docker", zh: "Next.js / 状态机 / Docker" } },
      { label: { en: "status", zh: "状态" }, value: { en: "demo complete", zh: "演示版完成" } },
      { label: { en: "ICP", zh: "目标用户" }, value: { en: "independent wellness practitioners", zh: "独立 wellness 从业者" } },
      { label: { en: "demo", zh: "演示" }, value: { en: "tend.chaostudio.org", zh: "tend.chaostudio.org" } },
    ],
    sections: [
      {
        id: "booking-tax",
        title: { en: "The coordination problem", zh: "协调成本" },
        body: [
          {
            en: "Independent practitioners spend 3–5 hours per week on booking admin: answering inquiries, chasing intake forms, confirming availability, sending reminders. Existing tools either require complex setup (MindBody, Momence) or offer scheduling without automation (Acuity, Time2Book). Tend targets the gap: powerful automation that works without configuration.",
            zh: "独立从业者每周花 3–5 小时在预约管理上：回复询问、追问填表、确认档期、发送提醒。现有工具要么配置复杂（MindBody、Momence），要么只提供日程安排而没有自动化（Acuity、Time2Book）。Tend 瞄准的正是这个空白：无需配置、开箱即用的强大自动化。",
          },
        ],
      },
      {
        id: "harness",
        title: { en: "Harness: the execution engine", zh: "Harness：执行引擎" },
        body: [
          {
            en: "The core of Tend is the Harness — a deterministic execution engine that processes events, validates state, enforces policy, and applies transitions. No external system mutates booking state directly. Every action is logged. The booking lifecycle is a state machine with six defined states: new lead → intake pending → fit review → fit confirmed → awaiting confirmation → booked.",
            zh: "Tend 的核心是 Harness——一个确定性执行引擎，处理事件、验证状态、执行策略、应用跳转。没有外部系统直接修改预约状态。每个动作都被记录。预约生命周期是一个有六个明确状态的状态机：新询盘 → 等待填表 → 适配评审 → 适配确认 → 等待确认 → 已预约。",
          },
        ],
        mediaIds: ["tend-state-machine"],
      },
      {
        id: "policy-layer",
        title: { en: "Policy layer: controlled automation", zh: "策略层：受控自动化" },
        body: [
          {
            en: "Automation without control creates anxiety. Tend's policy layer lets practitioners set each action to auto (execute immediately), draft (queue for approval), or manual (practitioner triggers). A practitioner who wants to review every intake email before it sends can do that. One who wants the entire flow automated can do that too. The system adapts to trust level, not the other way around.",
            zh: "没有控制的自动化会制造焦虑。Tend 的策略层让从业者为每个动作设置模式：自动（立即执行）、草稿（排队等待审核）、手动（由从业者触发）。想在每封接诊邮件发出前先审查的从业者可以这样做。想完全自动化整个流程的也可以。系统适应信任程度，而不是反过来。",
          },
        ],
        mediaIds: ["tend-system-layers"],
      },
      {
        id: "build",
        title: { en: "Build and deployment", zh: "构建与部署" },
        body: [
          {
            en: "Tend is built on Next.js with the Harness running as a server-side service, deployed via Docker on a VPS. The demo at tend.chaostudio.org runs the full booking flow end-to-end: inquiry form, intake email, fit review, slot proposal, and booking confirmation — all through the state machine.",
            zh: "Tend 基于 Next.js 构建，Harness 作为服务端服务运行，通过 Docker 部署在 VPS 上。tend.chaostudio.org 的演示运行完整的预约流程：询盘表单、接诊邮件、适配评审、档期提案、预约确认——全部经由状态机处理。",
          },
        ],
        mediaIds: ["tend-demo-video"],
      },
    ],
    media: [
      {
        id: "tend-state-machine",
        kind: "image",
        src: tendStateMachine,
        role: "diagram",
        alt: {
          en: "Booking state machine: six states from new lead to booked.",
          zh: "预约状态机：从新询盘到已预约的六个状态。",
        },
        caption: {
          en: "State is the single source of truth. All transitions are explicit.",
          zh: "状态是唯一的事实来源。所有跳转都是显式的。",
        },
      },
      {
        id: "tend-system-layers",
        kind: "image",
        src: tendSystemLayers,
        role: "diagram",
        alt: {
          en: "System architecture: events enter, Harness processes, actions execute.",
          zh: "系统架构：事件进入，Harness 处理，动作执行。",
        },
        caption: {
          en: "Events in. Harness decides. Actions out. Policy controls the middle.",
          zh: "事件进入。Harness 决策。动作输出。策略控制中间层。",
        },
      },
      {
        id: "tend-demo-video",
        kind: "embed",
        src: "https://www.youtube.com/embed/dcH8HoswkHs",
        role: "diagram",
        alt: {
          en: "Tend demo: full booking flow end-to-end through the state machine.",
          zh: "Tend 演示：完整预约流程端到端经由状态机处理。",
        },
        caption: {
          en: "Full booking flow: inquiry → intake → fit review → slot selection → confirmed.",
          zh: "完整预约流程：询盘 → 接诊 → 适配评审 → 档期选择 → 确认。",
        },
      },
    ],
  },
  {
    id: "A01",
    slug: "ccs",
    title: {
      en: "CCS",
      zh: "认知连续系统",
    },
    status: "specification complete",
    statusLabel: {
      en: "specification complete",
      zh: "规格完成",
    },
    type: "AI operating system / personal infrastructure",
    typeLabel: {
      en: "AI operating system / personal infrastructure",
      zh: "AI 操作系统 / 个人基础设施",
    },
    route: "CONTEXT / SPEC",
    meta: "001 / cognitive continuity / specification complete",
    code: "z-01",
    format: "AI agent spec / system design",
    formatLabel: {
      en: "AI agent spec / system design",
      zh: "AI 代理规格 / 系统设计",
    },
    plateCaption: {
      en: "Three-layer architecture: Passive Capture → AI Processing → Output Modules.",
      zh: "三层架构：被动捕捉 → AI 处理 → 输出模块。",
    },
    summary: {
      en: "CCS is a specification for a personal AI operating system that removes the act of remembering from the cognitive stack — through passive capture and AI-structured recall. The artifact is the architecture: v0.1 is live, v0.2 is designed and waiting.",
      zh: "CCS 是一个个人 AI 操作系统的完整规格——通过被动捕捉与 AI 结构化回溯，把「记住去记」从认知负担中移除。这份记录的核心是架构本身：v0.1 手动版本运行中，v0.2 已设计完成，等待构建。",
    },
    evidence: [
      {
        en: "Passive capture removes the act of remembering from the cognitive stack — context is structured by the system, not reconstructed by the person.",
        zh: "被动捕捉将「记忆」这个动作从认知负担中移除——上下文由系统结构化，而不是由人来重建。",
      },
      {
        en: "Three-layer architecture: capture runs always-on, AI structures the record, output delivers on demand.",
        zh: "三层架构：捕捉持续开启，AI 结构化记录，输出按需交付。",
      },
      {
        en: "v0.1 is live on Notion. v0.2 replaces manual snapshots with always-on infrastructure.",
        zh: "v0.1 在 Notion 上运行。v0.2 用持续运行的基础设施取代手动快照。",
      },
    ],
    template: "slab",
    metadata: [
      { label: { en: "year", zh: "年份" }, value: { en: "2025–2026", zh: "2025–2026" } },
      { label: { en: "role", zh: "角色" }, value: { en: "concept / design / system architecture", zh: "概念 / 设计 / 系统架构" } },
      { label: { en: "medium", zh: "媒介" }, value: { en: "AI agent spec / product documentation / system design", zh: "AI 代理规格 / 产品文档 / 系统设计" } },
      { label: { en: "status", zh: "状态" }, value: { en: "specification complete", zh: "规格完成" } },
      { label: { en: "context", zh: "背景" }, value: { en: "personal research", zh: "个人研究" } },
      { label: { en: "v0.1", zh: "v0.1" }, value: { en: "manual snapshots / live", zh: "手动快照 / 运行中" } },
      { label: { en: "v0.2", zh: "v0.2" }, value: { en: "passive sensing / design complete", zh: "被动感知 / 设计完成" } },
    ],
    sections: [
      {
        id: "gap",
        title: { en: "The Gap Between Action and Record", zh: "行动与记录之间的空白" },
        body: [
          {
            en: "Every day, we operate in a continuous stream of cognitive state: what we were working on, what decision we were mid-way through, what context made a particular choice make sense. These states generate, shift, and dissolve faster than we can capture them.",
            zh: "每一天，我们都在持续的认知状态流中运作：做到哪里了，哪个决定还悬着，是什么上下文让某个选择在当时显得合理。这些状态生成、变化、消散的速度，比我们能记下来的速度还要快。",
          },
          {
            en: "When we return to a task after interruption — after a meeting, after sleep, after a week — we spend time and energy reconstructing the state we were in. That reconstruction is imperfect. The original context is partly gone.",
            zh: "当我们在中断后回到一项任务——一次会议之后，睡眠之后，一周之后——需要花时间重建当时的状态。这种重建从来不完整。原始的上下文已经部分消失了。",
          },
          {
            en: "CCS begins from a single premise: the gap between doing and recording should not exist. If the system watches continuously, you never have to remember to remember.",
            zh: "CCS 从一个前提出发：做与记录之间的空白不应该存在。如果系统持续地看着你，你就永远不需要记得去记住。",
          },
        ],
        mediaIds: ["ccs-architecture"],
      },
      {
        id: "architecture",
        title: { en: "Three-Layer Architecture", zh: "三层架构" },
        body: [
          {
            en: "The system is designed in three layers. Layer 1 is Passive Capture: the environment continuously records — screenshots, wearable camera, ambient audio — without requiring any intentional act from the user. Layer 2 is AI Processing: raw capture is parsed and structured by AI into meaningful snapshots, state records, and decision contexts. Layer 3 is Output: structured context becomes usable — morning briefings, auto-generated snapshots, task agent handoffs, context pools for future recall, and message agents that surface relevant prior state.",
            zh: "系统分为三层。第一层是被动捕捉：环境持续记录——截图、可穿戴摄像头、环境音频——无需任何主动行为。第二层是 AI 处理：原始捕捉被解析并结构化为快照、状态记录和决策上下文。第三层是输出：结构化的上下文变得可用——早晨简报、自动生成的快照、任务代理交接、供未来回溯的上下文池，以及主动呈现历史状态的消息代理。",
          },
          {
            en: "The key design principle across all three layers is removal of friction. The user does not decide when to capture. The user does not structure the record. The system handles both. The user only encounters the output — when they need it.",
            zh: "贯穿三层的核心设计原则是消除摩擦。不需要决定何时捕捉，不需要整理记录——系统处理这一切。只有在需要时，输出才会出现。",
          },
        ],
      },
      {
        id: "versioning",
        title: { en: "From Spec to Living System", zh: "从规格到运行系统" },
        body: [
          {
            en: "v0.1 runs today. It is a manual practice: periodic state snapshots, captured in structured Notion documents, recording what I am working on, what decisions are open, and what context the next session will need. It is imperfect — it requires intention — but it has confirmed the value of the underlying model.",
            zh: "v0.1 今天仍在运行。它是一种手动实践：定期的状态快照，记录在结构化的 Notion 文档里——我在做什么、哪些决定还悬着、下次会话需要什么上下文。不完美，需要主动意图。但它已经验证了底层模型的价值。",
          },
          {
            en: "v0.2 is fully designed but not yet built. The passive sensing core replaces intention with infrastructure: always-on capture, AI-structured output, ambient delivery. The spec is complete: architecture, data flow, privacy constraints, and output module behavior are all documented.",
            zh: "v0.2 已经完整设计，但尚未构建。被动感知核心用基础设施替代了意图：持续开启的捕捉，AI 结构化的输出，环境式的传递。规格已经完成——架构、数据流、隐私约束、输出模块行为，都已有文档记录。",
          },
          {
            en: "The gap between v0.1 and v0.2 is the gap between a manual practice and an operating system. CCS is currently in that gap — and the design work in that gap is the artifact.",
            zh: "v0.1 和 v0.2 之间的距离，是手动实践与操作系统之间的距离。CCS 目前在那个距离中——而那个距离中的设计工作，就是这个档案记录的。",
          },
        ],
      },
    ],
    media: [
      {
        id: "ccs-architecture",
        kind: "image",
        src: ccsArchitecture,
        role: "plate",
        alt: {
          en: "Three-layer system architecture diagram: Passive Capture, AI Processing, and Output Modules.",
          zh: "三层系统架构图：被动捕捉、AI 处理与输出模块。",
        },
        caption: {
          en: "Three-layer system: Passive Capture → AI Processing → Output Modules.",
          zh: "三层系统：被动捕捉 → AI 处理 → 输出模块。",
        },
      },
    ],
  },
  {
    id: "B02",
    slug: "energy-sense",
    liveUrl: "https://energy.chaostudio.org",
    title: {
      en: "Energy Sense",
      zh: "能量感知",
    },
    status: "prototype complete",
    statusLabel: {
      en: "prototype complete",
      zh: "原型完成",
    },
    type: "speculative sensing interface",
    typeLabel: {
      en: "speculative sensing interface",
      zh: "推测性感知界面",
    },
    route: "SENSE / PROTO",
    meta: "003 / live sensing record",
    code: "z-02",
    format: "speculative sensing interface / WebGL / ambient field system",
    formatLabel: {
      en: "speculative sensing interface / WebGL / ambient field system",
      zh: "推测性感知界面 / WebGL / 环境场域",
    },
    plateCaption: {
      en: "The landscape opens into directional flow. You are entering a focus window.",
      zh: "场域向有方向的流动打开。你正在进入一个专注窗口。",
    },
    summary: {
      en: "Energy Sense translates invisible internal states — cognitive clarity, social drain, recovery pressure — into a living visual landscape. The design problem was restraint: a companion that notices, not a system that judges.",
      zh: "Energy Sense 将认知清晰度、社交耗能与恢复压力这些不可见的内在状态，转译为一片持续变化的视觉场域。核心设计问题是克制：一个会注意到的陪伴，而不是一个做判断的系统。",
    },
    evidence: [
      { en: "The design problem is translation, not measurement.", zh: "设计问题是转译，不是测量。" },
      {
        en: "Three states — Drain, Recovery, Clarity — shape a living visual landscape without numbers or alerts.",
        zh: "三种状态——耗竭、恢复、清醒——在没有数字和警报的情况下，塑造一片活着的视觉场域。",
      },
      { en: "The system surfaces awareness. The person decides.", zh: "系统呈现觉察。人来决定。" },
    ],
    template: "case",
    metadata: [
      { label: { en: "year", zh: "年份" }, value: { en: "2026" } },
      { label: { en: "role", zh: "角色" }, value: { en: "concept / design / prototype", zh: "概念 / 设计 / 原型" } },
      {
        label: { en: "medium", zh: "媒介" },
        value: {
          en: "speculative sensing interface / WebGL / ambient field",
          zh: "推测性感知界面 / WebGL / 环境场域",
        },
      },
      { label: { en: "status", zh: "状态" }, value: { en: "prototype complete", zh: "原型完成" } },
      { label: { en: "context", zh: "背景" }, value: { en: "FigBuild 2026", zh: "FigBuild 2026" } },
      { label: { en: "stack", zh: "技术" }, value: { en: "Gemini / WebGL / Figma Make", zh: "Gemini / WebGL / Figma Make" } },
    ],
    sections: [
      {
        id: "missing-sense",
        title: { en: "A Sense You Were Missing", zh: "一种缺失的感知" },
        body: [
          {
            en: "Throughout the day, something shifts inside — a moment of unusual clarity, a slow drain after a long conversation, a quiet pressure building toward rest. These states happen before we consciously notice them. By the time we do, we have already pushed through the wrong moment.",
            zh: "一天里，身体在持续变化——某个异常清醒的时刻，漫长社交之后缓慢累积的耗竭，深夜里悄然浮出的恢复需求。这些状态在我们察觉到之前就已经发生。而当我们终于意识到时，往往已经做了错误的选择。",
          },
          {
            en: "We can feel temperature. We can hear silence. But we cannot perceive our own cognitive clarity, our social drain, or our body's need for recovery. Energy Sense begins with a single question: what if we could?",
            zh: "我们能感受到温度，能听见寂静。但我们无法感知自己的认知清晰度、社交耗能，或身体对恢复的需求。能量感知从一个问题出发：如果我们能感知到这些呢？",
          },
        ],
        mediaIds: ["energy-drain-state"],
      },
      {
        id: "energy-landscape",
        title: { en: "Energy Landscape", zh: "能量场域" },
        body: [
          {
            en: "The system detects three signals — Cognitive Clarity, Social Drain, Recovery Pressure — and translates them into a single living environment. Not numbers. Not alerts. A visual field that shifts the way light shifts with weather: gradually, honestly, without alarm.",
            zh: "系统感知三种信号——认知清晰度、社交耗能与恢复压力——并将其转译为一片持续变化的视觉环境。不是数字，不是警报，而是一个视觉场域，像光随天气变化一样：缓慢、诚实、不带惊扰。",
          },
          {
            en: "Three states shape the landscape. Drain: the field grows dense and slow. Recovery: structure begins to reappear. Clarity: the landscape opens into directional flow. In each case, the system does not decide. It makes the invisible perceivable, and returns the choice to the person.",
            zh: "三种状态塑造这片场域。Drain：场域变得沉重而迟缓。Recovery：结构开始重新浮现。Clarity：场域向有方向的流动打开。无论哪种状态，系统都不做决定——它让不可见的变得可感，然后把选择权还给人本身。",
          },
        ],
        mediaIds: ["energy-recovery-state", "energy-clarity-state"],
      },
      {
        id: "translation-not-measurement",
        title: { en: "Translation, Not Measurement", zh: "转译，而非测量" },
        body: [
          {
            en: "The hardest design challenge was restraint. Early versions of the landscape were visually expressive but emotionally illegible — texture without meaning. It took several iterations to find a visual language where Drain, Recovery, and Clarity felt genuinely distinct while still belonging to the same continuous environment.",
            zh: "最难的设计挑战是克制。早期的场域版本视觉上很丰富，但情感上难以辨认——有纹理，没有意义。经过多次迭代，我才找到一种语言，让 Drain、Recovery、Clarity 彼此清晰可辨，同时仍属于同一个连续的环境。",
          },
          {
            en: "The second challenge was tone. A system that monitors internal states can easily feel surveillance-like — clinical, anxious, prescriptive. Every design decision pulled back toward something quieter: a companion that notices, not a system that judges. Every word in the interface was chosen to reflect that difference.",
            zh: "第二个挑战是语气。一个感知内在状态的系统很容易变成监控——临床、焦虑、带有评判。每一个设计决策，我都在把它往更安静的方向拉：一个会注意到的陪伴，而不是一个做判断的系统。界面里的每个词，都是为这个差异而选的。",
          },
          {
            en: "We learned that sensing does not require precision to be meaningful. The design problem is translation, not measurement.",
            zh: "感知不需要精确，才能有意义。设计问题是转译，不是测量。",
          },
        ],
      },
    ],
    media: [
      {
        id: "energy-drain-state",
        kind: "image",
        src: energyDrainState,
        role: "plate",
        alt: {
          en: "Energy Sense DRAIN state with a dense and slow visual field.",
          zh: "Energy Sense 的 DRAIN 状态，视觉场域沉重而迟缓。",
        },
        caption: {
          en: "The field grows dense and slow. Signal overloaded.",
          zh: "场域变得沉重而迟缓。信号过载。",
        },
      },
      {
        id: "energy-recovery-state",
        kind: "image",
        src: energyRecoveryState,
        role: "plate",
        alt: {
          en: "Energy Sense RECOVERY state with structure beginning to reappear.",
          zh: "Energy Sense 的 RECOVERY 状态，结构开始重新浮现。",
        },
        caption: {
          en: "Structure begins to reappear. The system is asking for recovery.",
          zh: "结构开始重新浮现。系统正在请求恢复。",
        },
      },
      {
        id: "energy-clarity-state",
        kind: "image",
        src: energyClarityState,
        role: "hero",
        alt: {
          en: "Energy Sense CLARITY state with directional flow opening through the landscape.",
          zh: "Energy Sense 的 CLARITY 状态，场域向有方向的流动打开。",
        },
        caption: {
          en: "The landscape opens into directional flow. You are entering a focus window.",
          zh: "场域向有方向的流动打开。你正在进入一个专注窗口。",
        },
      },
    ],
  },
];
