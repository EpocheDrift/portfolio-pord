import type { ProjectRecord } from "./contentTypes";
import diagramSignalFlow from "../assets/projects/chaos-interface/diagram-signal-flow.svg";
import plateClosedFieldP3 from "../assets/projects/chaos-interface/plate-closed-field-p3.png";
import plateOpenQueueP3 from "../assets/projects/chaos-interface/plate-open-queue-p3.png";
import plateDetailRecord from "../assets/projects/chaos-interface/plate-detail-record.png";
import ccsArchitecture from "../assets/projects/ccs/ccs-architecture.svg";
import energyClarityState from "../assets/projects/energy-sense/energy-clarity-state.png";
import energyDrainState from "../assets/projects/energy-sense/energy-drain-state.png";
import energyRecoveryState from "../assets/projects/energy-sense/energy-recovery-state.png";

export const projects: ProjectRecord[] = [
  {
    id: "B02",
    slug: "energy-sense",
    liveUrl: "https://energy.chaostudio.org",
    title: {
      en: "Energy Sense",
      zh: "内景",
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
    route: "SENSE / LIVE",
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
      en: "A speculative sensing interface that translates invisible internal energy states — cognitive clarity, social drain, recovery pressure — into a living visual landscape.",
      zh: "一个推测性感知界面，将认知清晰度、社交耗能与恢复压力这三种不可见的内在状态，转译为一片持续变化的视觉场域。",
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
            zh: "一天当中，身体内部在不断变化——某个异常清醒的时刻，一段长时间社交之后缓缓累积的耗竭，深夜里悄声发出的恢复信号。这些状态在我们意识到之前就已经发生。而当我们终于察觉到时，往往已经做了错误的决定。",
          },
          {
            en: "We can feel temperature. We can hear silence. But we cannot perceive our own cognitive clarity, our social drain, or our body's need for recovery. Energy Sense begins with a single question: what if we could?",
            zh: "我们能感受到温度，能听见寂静。但我们无法感知自己的认知清晰度、社交耗能，或身体对恢复的需求。内景从一个问题出发：如果我们能感知到这些呢？",
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
            zh: "三种状态塑造这片场域。Drain：场域变得沉重而迟缓。Recovery：结构开始重新浮现。Clarity：场域向有方向的流动打开。在每一种情况下，系统不做决定。它让不可见的变得可感，然后把选择权还给人本身。",
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
            zh: "最难的设计挑战是克制。早期版本的场域视觉上富有表现力，但情感上难以辨认——只有纹理，没有意义。经过多次迭代，才找到一种语言，让 Drain、Recovery、Clarity 彼此清晰可辨，同时仍属于同一个连续的环境。",
          },
          {
            en: "The second challenge was tone. A system that monitors internal states can easily feel surveillance-like — clinical, anxious, prescriptive. Every design decision pulled back toward something quieter: a companion that notices, not a system that judges. Every word in the interface was chosen to reflect that difference.",
            zh: "第二个挑战是语气。一个感知内在状态的系统很容易变得像监控系统一样——临床、焦虑、带有评判。每一个设计决策都在将它拉回更安静的方向：一个会注意到的陪伴者，而不是一个做判断的系统。界面里的每一个词，都是为了体现这种差异而选择的。",
          },
          {
            en: "We learned that sensing does not require precision to be meaningful. The design problem is translation, not measurement.",
            zh: "我们学到：感知不需要精确，才能有意义。设计问题是转译，不是测量。",
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
  {
    id: "A01",
    slug: "ccs",
    title: {
      en: "CCS",
      zh: "意识档案",
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
    route: "FIELD / ACTIVE",
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
      en: "A personal AI operating system that passively captures cognitive context as you work — so the record of what you were doing, thinking, and deciding is never lost.",
      zh: "一个个人 AI 操作系统，在你工作时被动捕捉认知上下文——让你决策的过程、当时的状态与思考的脉络，永远不会丢失。",
    },
    evidence: [
      {
        en: "The system continuously watches. You only need to decide.",
        zh: "系统持续看着你。你只需要做决定。",
      },
      {
        en: "Passive capture removes the act of remembering from the cognitive stack.",
        zh: "被动捕捉将\"记忆\"这个动作从认知负担中移除。",
      },
      {
        en: "v0.1 runs on Notion. v0.2 is designed and waiting.",
        zh: "v0.1 在 Notion 上运行。v0.2 已设计完成，等待实现。",
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
            zh: "每一天，我们都在持续的认知状态流中运作：我们在做什么，哪个决定做到一半，是什么上下文让某个选择在当时显得合理。这些状态生成、变化、消散的速度，比我们能捕捉它们的速度还要快。",
          },
          {
            en: "When we return to a task after interruption — after a meeting, after sleep, after a week — we spend time and energy reconstructing the state we were in. That reconstruction is imperfect. The original context is partly gone.",
            zh: "当我们在中断之后回到一项任务——一次会议之后，睡眠之后，一周之后——我们会花费时间和精力重建当时的状态。这种重建是不完整的。原始的上下文已经部分消失。",
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
            zh: "系统设计为三层结构。第一层是被动捕捉：环境持续记录——截图、可穿戴摄像头、环境音频——不需要用户做出任何主动的行为。第二层是 AI 处理：原始捕捉被 AI 解析并结构化为有意义的快照、状态记录和决策上下文。第三层是输出：结构化的上下文变得可用——早晨简报、自动生成的快照、任务代理交接、用于未来回溯的上下文池，以及呈现相关历史状态的消息代理。",
          },
          {
            en: "The key design principle across all three layers is removal of friction. The user does not decide when to capture. The user does not structure the record. The system handles both. The user only encounters the output — when they need it.",
            zh: "贯穿三层的核心设计原则是消除摩擦。用户不决定何时捕捉。用户不整理记录。系统处理这两件事。用户只会在需要时遇到输出。",
          },
        ],
      },
      {
        id: "versioning",
        title: { en: "From Spec to Living System", zh: "从规格到运行系统" },
        body: [
          {
            en: "v0.1 runs today. It is a manual practice: periodic state snapshots, captured in structured Notion documents, recording what I am working on, what decisions are open, and what context the next session will need. It is imperfect — it requires intention — but it has confirmed the value of the underlying model.",
            zh: "v0.1 今天在运行。它是一种手动实践：定期的状态快照，记录在结构化的 Notion 文档中，记下我在做什么、哪些决定尚未完成、下一次会话需要什么上下文。它并不完美——需要主动意图——但它已经验证了底层模型的价值。",
          },
          {
            en: "v0.2 is fully designed but not yet built. The passive sensing core replaces intention with infrastructure: always-on capture, AI-structured output, ambient delivery. The spec is complete: architecture, data flow, privacy constraints, and output module behavior are all documented.",
            zh: "v0.2 已经完整设计，但尚未构建。被动感知核心用基础设施替代了意图：持续开启的捕捉，AI 结构化的输出，环境式的传递。规格已经完成：架构、数据流、隐私约束和输出模块行为都已有文档记录。",
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
    id: "B04",
    slug: "pour-decisions",
    detailDisabled: true,
    title: {
      en: "Pour Decisions",
    },
    status: "draft record",
    statusLabel: {
      en: "draft record",
      zh: "记录草稿",
    },
    type: "object study",
    typeLabel: {
      en: "object study",
      zh: "物件研究",
    },
    route: "OBJECT / DRAFT",
    meta: "004 / object ritual draft",
    code: "z+01",
    format: "object study",
    formatLabel: {
      en: "object study",
      zh: "物件研究",
    },
    plateCaption: {
      en: "Object study plate for ritual, preference, and repeated choice.",
      zh: "围绕仪式、偏好与重复选择的物件研究图版。",
    },
    summary: {
      en: "Object interaction study held as a draft record: ritual, preference, and decision traces in repeated physical gestures.",
      zh: "一个仍处于记录草稿状态的物件交互研究：仪式、偏好，以及重复身体动作中留下的选择痕迹。",
    },
    evidence: [
      { en: "Choice is framed as residue left by repeated gestures.", zh: "选择被视为重复动作留下的残余。" },
      { en: "The object record stores preference without becoming a survey.", zh: "物件记录保存偏好，但不变成问卷。" },
      { en: "Final object and gesture media still need to be selected.", zh: "最终物件与动作媒体仍需选择。" },
    ],
    template: "slab",
    metadata: [
      { label: { en: "year", zh: "年份" }, value: { en: "2025" } },
      { label: { en: "role", zh: "角色" }, value: { en: "interaction study", zh: "交互研究" } },
      { label: { en: "medium", zh: "媒介" }, value: { en: "object ritual", zh: "物件仪式" } },
      { label: { en: "status", zh: "状态" }, value: { en: "draft record", zh: "记录草稿" } },
    ],
    sections: [
      {
        id: "premise",
        title: { en: "Premise" },
        body: [
          {
            en: "Pour Decisions is held as an object-interaction record about choosing, pouring, and repeating preference.",
          },
        ],
      },
      {
        id: "evidence",
        title: { en: "Evidence" },
        body: [
          {
            en: "The next pass should replace this note with object photographs, gesture sequences, and decision-state diagrams.",
          },
        ],
      },
    ],
    media: [
      {
        id: "pour-decisions-primary-plate",
        kind: "placeholder",
        role: "plate",
        alt: {
          en: "Archive plate reserved for Pour Decisions object study media.",
        },
        caption: {
          en: "Object and gesture media awaiting final selection.",
        },
      },
    ],
  },
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
    route: "ROOT / ROUTED",
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
      en: "Zayn's personal archive interface turns portfolio content into signals, routes, and project records inside a tesseract-led field system.",
      zh: "Zayn 的个人档案界面，将作品内容转化为信号、路径与项目记录，并放入由 Tesseract 引导的场域系统中。",
    },
    evidence: [
      {
        en: "The portfolio is not a display surface. It is a running archive machine.",
        zh: "这不是一个展示表面。它是一台运行中的档案机器。",
      },
      {
        en: "Projects enter as compressed signals. The archive routes them — it does not display them.",
        zh: "项目以压缩信号进入。档案路由它们——而不是展示它们。",
      },
      {
        en: "The tesseract is not decoration. It is the entry point, processing object, and field engine.",
        zh: "Tesseract 不是装饰。它是入口、处理对象与场域引擎。",
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
            zh: "这个项目一开始就拒绝了默认的作品集格式。目标不是做一个精致的展示页面，也不是做 Chaostudio 主站，而是为 Zayn 建立一个正在运行的档案系统，用来容纳活跃系统、未完成信号与项目记录。",
          },
          {
            en: "The core proposition is: chaos is not disorder; it is the state before everything begins. In the interface, that idea becomes a field. Projects enter as compressed signals, pass through focus states, and only later become readable records.",
            zh: "核心命题是：混沌不是失序，而是一切生长之前的状态。在界面中，这句话变成了一个场域。项目先以压缩信号进入，穿过聚焦状态，然后才成为可读的记录。",
          },
        ],
        mediaIds: ["plate-closed-field-p3"],
      },
      {
        id: "pivot",
        title: { en: "From Reference Remix To Field System", zh: "从参考拼贴到场域系统" },
        body: [
          {
            en: "Early directions tested minimal portfolio layouts, text-heavy references, and a Namespace-like archive structure. Those versions clarified what the site should not become: a reference-site remix with Chaostudio copy placed on top.",
            zh: "早期方向测试过极简作品集、文字密集参考，以及接近 Namespace 的档案结构。这些版本帮助确认了这个站不应该变成什么：不是把 Chaostudio 的文案贴在参考站结构上的 remix，也不是 Chaostudio 的公司主页。",
          },
          {
            en: "The direction shifted toward a darker, more personal field/system. Chaostudio stayed as the field language, but Zayn remained the subject of the portfolio. The archive index became secondary to the visual field. The tesseract stopped acting like a logo and became the pressure source that opens the system.",
            zh: "方向随后转向更暗、更个人化的场域系统。Chaostudio 保留为场域语言，但作品集的主体仍然是 Zayn。档案索引退到第二层，视觉场域成为入口。Tesseract 也不再像一个 logo，而成为打开系统的压力源。",
          },
        ],
      },
      {
        id: "tesseract-field",
        title: { en: "Tesseract Field", zh: "Tesseract 场域" },
        body: [
          {
            en: "The tesseract is the site's central visual anchor. It comes from the idea of a high-dimensional structure projected into a lower-dimensional interface. It should not read as decoration. It acts as entry point, processing object, field engine, and compressed system marker.",
            zh: "Tesseract 是这个站的核心视觉锚点。它来自「高维结构在低维界面中的投影」这个想法。它不应该读成装饰，而是入口、处理对象、场域引擎与压缩的系统标记。",
          },
          {
            en: "The visual-anchor line explored scale, line weight, reverse type, idle pulse, and open-state handoff. The accepted direction places the visitor inside a projected field rather than outside a complete 3D object.",
            zh: "视觉锚点的迭代线测试了尺度、线重、反白文字、idle pulse，以及打开状态的 handoff。最终方向不是让访客站在外部观看一个完整的 3D 物体，而是让人进入一个被投影出来的场域。",
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
            zh: "交互模型会同步当前信号、接入元数据与项目登记状态。点击、滚轮和键盘切换焦点，但它不应该读成普通 carousel，而应该像档案扫描行为。",
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
            en: "The system keeps two templates: slab for maintainable long-form records, and case for rawer asymmetric dossiers. This project belongs in case, because its strongest material is an uneven trail of concept, visual research, prototype states, and production bridge decisions.",
            zh: "系统保留两套模板：slab 用于更稳定、长文本的记录；case 用于更原始、不对称的档案页面。这个项目适合 case，因为它最强的材料是一条不均匀但有力的轨迹：概念、视觉研究、原型状态与生产桥接决策。",
          },
        ],
        mediaIds: ["plate-detail-record"],
      },
      {
        id: "production-bridge",
        title: { en: "Production Bridge", zh: "生产桥接" },
        body: [
          {
            en: "After v4.16 locked the structure, the project moved into Phase 3 production build-out. The prototype became a Vite + React + TypeScript site with URL-backed states, bilingual-ready project records, and a content-intake workflow for real project material.",
            zh: "v4.16 锁定结构后，项目进入 Phase 3 的生产化建设。原型被迁移为 Vite + React + TypeScript 站点，并建立了 URL 状态、双语项目记录，以及用于收集真实项目材料的 content-intake 工作流。",
          },
          {
            en: "The production bridge matters because the visual system is no longer only a standalone prototype. It now has a content model that can hold future records without redesigning the layout every time a project changes.",
            zh: "这个生产桥接重要，因为视觉系统不再只是一个独立原型。它已经有了可以继续承载未来项目记录的内容模型，而不需要每次项目变化都重新设计布局。",
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
];
