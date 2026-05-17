// @ts-nocheck
import * as THREE from "three";
import { projects } from "../data/projects";
import { siteCopy } from "../data/siteCopy";
import {
  languageToggleLabel,
  nextLanguage,
  persistLanguage,
  readStoredLanguage,
  resolveOptionalText,
  resolveText,
} from "../data/localization";

function buildArchiveSignals(language) {
  const resolveProjectMedia = (media) => media
    ? {
        alt: resolveText(media.alt, language),
        caption: resolveOptionalText(media.caption, language) ?? resolveText(media.alt, language),
        kind: media.kind,
        src: media.src,
      }
    : undefined;

  return projects.map((project) => ({
    id: project.id,
    slug: project.slug,
    detailDisabled: project.detailDisabled === true,
    name: resolveText(project.title, language),
    state: resolveOptionalText(project.statusLabel, language) ?? project.status,
    type: resolveOptionalText(project.typeLabel, language) ?? project.type,
    route: project.route,
    meta: project.meta,
    code: project.code,
    description: resolveText(project.summary, language),
    format: resolveOptionalText(project.formatLabel, language) ?? project.format,
    template: project.template,
    evidence: project.evidence?.map((item) => resolveText(item, language)) ?? [],
    detailMeta: project.metadata.map((item) => [
      resolveText(item.label, language),
      resolveText(item.value, language),
    ]),
    liveUrl: project.liveUrl ?? null,
    plateCaption:
      resolveOptionalText(project.plateCaption, language) ??
      resolveOptionalText(project.media.find((item) => item.role === "plate" || item.role === "hero")?.caption, language) ??
      resolveText(siteCopy.ui.imagePending, language),
    primaryMedia: resolveProjectMedia(
      project.media.find((item) => item.role === "hero" && item.src) ??
        project.media.find((item) => item.role === "plate" && item.src) ??
        project.media.find((item) => item.src),
    ),
    sections: project.sections.map((section) => ({
      title: resolveText(section.title, language),
      body: section.body.map((paragraph) => resolveText(paragraph, language)),
      images: section.mediaIds
        ?.map((mediaId) => project.media.find((item) => item.id === mediaId))
        .filter(Boolean)
        .map(resolveProjectMedia),
    })),
  }));
}

export function mountArchiveExperience(container: HTMLElement) {
  if (container.dataset.archiveMounted === "true") {
    return () => {};
  }
  container.dataset.archiveMounted = "true";
  
        const root = container;
        const cursor = root.querySelector(".cursor");
        const stateValue = root.querySelector(".state-value");
        const signalFlow = root.querySelector(".signal-flow");
        const mobileSignalList = root.querySelector(".mobile-signal-list");
        const fieldReturnHint = root.querySelector(".field-return-hint");
        const signalCards = Array.from(root.querySelectorAll(".signal-card"));
        const signalRows = Array.from(root.querySelectorAll(".signal-row"));
        const utilityButtons = Array.from(root.querySelectorAll("[data-utility]"));
        const infoPage = root.querySelector(".info-page");
        const infoReturn = root.querySelector(".info-return-link");
        const infoKicker = root.querySelector("[data-info-kicker]");
        const infoTitle = root.querySelector("[data-info-title]");
        const infoBody = root.querySelector("[data-info-body]");
        const recordPage = root.querySelector(".record-page");
        const recordActions = Array.from(root.querySelectorAll("[data-record-action]"));
        const projectFields = {
          kicker: root.querySelector("[data-project-kicker]"),
          title: root.querySelector("[data-project-title]"),
          thesis: root.querySelector("[data-project-thesis]"),
          meta: root.querySelector("[data-project-meta]"),
          plateLabel: root.querySelector("[data-project-plate-label]"),
          plateCaption: root.querySelector("[data-project-plate-caption]"),
          plateCode: root.querySelector("[data-project-plate-code]"),
          plateLiveLink: root.querySelector("[data-project-live-link]"),
          plateMark: root.querySelector(".record-plate-mark"),
          sections: root.querySelector("[data-project-sections]"),
          index: root.querySelector("[data-project-index]"),
          indexState: root.querySelector("[data-project-index-state]"),
        };
        const recordFields = {
          name: root.querySelector('[data-record="name"]'),
          state: root.querySelector('[data-record="state"]'),
          type: root.querySelector('[data-record="type"]'),
          route: root.querySelector('[data-record="route"]'),
        };
        const idleDelay = 5000;
        const pulseDuration = 1450;
        const infoKickers = {
          about: "about / zayn archive",
          contact: "contact / open",
        };
        let languageMode = readStoredLanguage();
        persistLanguage(languageMode);
        let signals = projects.length > 0 ? buildArchiveSignals(languageMode) : [
          {
            id: "B02",
            name: "Energy Sense",
            state: "pre-scan",
            type: "sensor record",
            route: "SENSE / INTAKE",
            meta: "003 / pre-scan energy record",
            code: "z-02",
            description: "Ambient sensing prototype that turns motion, light, and energetic drift into a legible signal layer.",
            format: "sensor interface",
            template: "case",
            evidence: [
              "Ambient readings are compressed into calm surface states.",
              "The interface privileges drift, pulse, and threshold over raw charts.",
              "Energy records stay pre-scan until a pattern becomes legible.",
            ],
            detailMeta: [
              ["year", "2025"],
              ["role", "research / interface"],
              ["medium", "sensor system"],
              ["status", "pre-scan"],
            ],
            plateCaption: "Sensor field plate for ambient motion, light, and energetic drift.",
            sections: [
              {
                title: "Premise",
                body: [
                  "Energy Sense turns small environmental shifts into an interface rhythm. The project is less interested in exact measurement than in how a space starts to feel readable.",
                ],
              },
              {
                title: "System",
                body: [
                  "Motion, light, and ambient variation are compressed into threshold states. The display avoids dashboard abundance and instead keeps the signal quiet until the field changes enough to matter.",
                ],
                images: ["ambient plate", "threshold state"],
              },
              {
                title: "Notes",
                body: [
                  "Future content can add sensor diagrams, installation photos, and calibration notes without changing this dossier layout.",
                ],
              },
            ],
          },
          {
            id: "A01",
            name: "CCS",
            state: "scan locked",
            type: "system study",
            route: "FIELD / ACTIVE",
            meta: "001 / scan plane / active signal",
            code: "z-01",
            description: "Computational culture system for chaotic browsing states, indexed through field behavior and signal focus.",
            format: "archive system",
            template: "slab",
            evidence: [
              "Browsing fragments are routed through a signal queue.",
              "The active record is selected by scan-plane focus.",
              "Archive structure emerges from behavior before taxonomy.",
            ],
            detailMeta: [
              ["year", "2026"],
              ["role", "design / research"],
              ["medium", "archive system"],
              ["status", "active record"],
            ],
            plateCaption: "Primary archive plate for signal focus and scan-plane behavior.",
            sections: [
              {
                title: "Overview",
                body: [
                  "CCS is a computational culture system for chaotic browsing states. It treats wandering, collecting, and switching as material behavior that can be indexed without becoming over-explained.",
                ],
              },
              {
                title: "Structure",
                body: [
                  "The archive starts as a field. Projects enter as compressed signals, pass through a scan plane, and become records only after the interface finds a stable focus point.",
                  "The important design move is that taxonomy arrives late. The system first preserves pressure, route, and attention.",
                ],
                images: ["scan plane", "signal focus"],
              },
              {
                title: "Interface",
                body: [
                  "The current prototype uses a restrained brutalist shell: hard type, quiet grids, clipped signal cards, and a detail view that behaves like a dossier rather than a portfolio template.",
                ],
              },
            ],
          },
          {
            id: "B04",
            name: "Pour Decisions",
            detailDisabled: true,
            state: "processed",
            type: "object study",
            route: "OBJECT / DRAFT",
            meta: "004 / processed object",
            code: "z+01",
            description: "Object interaction study around ritual, preference, and decision traces in repeated physical gestures.",
            format: "object study",
            template: "slab",
            evidence: [
              "Choice is framed as residue left by repeated gestures.",
              "The object record stores preference without becoming a survey.",
              "Processed state marks a stable behavioral pattern.",
            ],
            detailMeta: [
              ["year", "2025"],
              ["role", "interaction study"],
              ["medium", "object ritual"],
              ["status", "processed"],
            ],
            plateCaption: "Object study plate for ritual, preference, and repeated choice.",
            sections: [
              {
                title: "Premise",
                body: [
                  "Pour Decisions studies the small ritual around choosing, pouring, and repeating preference. The object becomes a behavioral record rather than a passive product.",
                ],
              },
              {
                title: "Evidence",
                body: [
                  "The archive material should include object photographs, gesture sequences, and decision-state diagrams. The page is built to accept those artifacts as plates.",
                ],
                images: ["gesture plate", "object residue"],
              },
              {
                title: "Reflection",
                body: [
                  "The interesting part is not the choice itself, but how repeated choices leave a legible shape behind.",
                ],
              },
            ],
          },
          {
            id: "C03",
            name: "混沌接口",
            state: "routed",
            type: "interface route",
            route: "ROOT / ROUTED",
            meta: "005 / routed interface",
            code: "z+02",
            description: "Bilingual interface route for chaotic systems, translated states, and archive access patterns.",
            format: "bilingual route",
            template: "case",
            evidence: [
              "Language switching is treated as a route, not a translation layer.",
              "Interface states keep both semantic and spatial memory.",
              "The record tests how chaos can stay navigable across scripts.",
            ],
            detailMeta: [
              ["year", "2026"],
              ["role", "interface route"],
              ["medium", "bilingual system"],
              ["status", "routed"],
            ],
            plateCaption: "Bilingual interface plate for translated states and route memory.",
            sections: [
              {
                title: "Premise",
                body: [
                  "混沌接口 treats bilingual interaction as a spatial routing problem. Language is not a skin on top of the same page; it changes the path through the system.",
                ],
              },
              {
                title: "Route",
                body: [
                  "The project keeps semantic state and visual state in the same record. Switching language should feel like entering a neighboring corridor, not refreshing a label set.",
                ],
                images: ["route memory", "script state"],
              },
              {
                title: "Archive Notes",
                body: [
                  "This page will eventually need real Chinese and English copy pairs, plus screenshots that show how the same archive behaves across scripts.",
                ],
              },
            ],
          },
        ];
        const slots = {
          "-2": { y: "16%", shift: "86px", scale: ".78", alpha: ".18", width: "420px", tone: "latent" },
          "-1": { y: "30%", shift: "74px", scale: ".86", alpha: ".48", width: "430px", tone: "queued" },
          "0": { y: "43%", shift: "24px", scale: "1", alpha: "1", width: "540px", tone: "active" },
          "1": { y: "63%", shift: "72px", scale: ".88", alpha: ".52", width: "420px", tone: "output" },
          "2": { y: "76%", shift: "72px", scale: ".76", alpha: ".3", width: "400px", tone: "output" },
        };
        const routePath = {
          closed: "/",
          open: "/archive",
          about: "/about",
          contact: "/contact",
        };

        function signalSlug(signal) {
          if (signal.slug) {
            return signal.slug;
          }

          return signal.name
            .toLowerCase()
            .trim()
            .replace(/[^\p{L}\p{N}]+/gu, "-")
            .replace(/^-+|-+$/g, "") || signal.id.toLowerCase();
        }

        function getSignalIndexBySlug(slug) {
          return signals.findIndex((signal) => signalSlug(signal) === slug);
        }

        function getSignalIndexById(id) {
          return signals.findIndex((signal) => signal.id === id);
        }

        function canOpenSignal(signal) {
          return Boolean(signal) && signal.detailDisabled !== true;
        }

        function writeRoute(path, options = {}) {
          if (options.history === false || window.location.pathname === path) {
            return;
          }

          window.history.pushState({}, "", path);
        }
  
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.34;
        container.appendChild(renderer.domElement);
  
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050605);
        scene.fog = new THREE.FogExp2(0x050605, 0.045);
  
        const camera = new THREE.PerspectiveCamera(
          42,
          window.innerWidth / window.innerHeight,
          0.1,
          100,
        );
        camera.position.set(0, 0.8, getCameraZ());
  
        const pointer = new THREE.Vector2();
        const pointerTarget = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        const startTime = performance.now();
        let lastFrameTime = startTime;
  
        const keyLight = new THREE.DirectionalLight(0xf4ead8, 1.86);
        keyLight.position.set(2.8, 5, 5);
        scene.add(keyLight);
  
        const rimLight = new THREE.PointLight(0x83bdb8, 5.6, 18, 2);
        rimLight.position.set(-4, 2.5, 3.5);
        scene.add(rimLight);
  
        const amberLight = new THREE.PointLight(0xd7ac61, 5.2, 14, 2);
        amberLight.position.set(3.6, -1.8, 2.8);
        scene.add(amberLight);
  
        const stage = new THREE.Group();
        scene.add(stage);
  
        const monitorGroup = new THREE.Group();
        monitorGroup.position.set(0, -0.15, -0.7);
        monitorGroup.rotation.x = -0.08;
        stage.add(monitorGroup);
        const closedMonitorPosition = new THREE.Vector3(0, -0.15, -0.7);
        const openMonitorPosition = new THREE.Vector3(2.75, 2.35, -0.7);
        const mobileOpenMonitorPosition = new THREE.Vector3(0, 1.5, -0.7);
        const recordMonitorPosition = new THREE.Vector3(1.62, -0.02, -0.7);
  
        const monitor = new THREE.Mesh(
          new THREE.BoxGeometry(14.8, 10.1, 0.18),
          new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0,
            depthWrite: false,
          }),
        );
        monitorGroup.add(monitor);
  
        const grid = new THREE.GridHelper(9, 22, 0x6d604a, 0x202018);
        grid.position.set(0, -2.45, -0.6);
        grid.rotation.x = Math.PI / 2;
        grid.material.transparent = true;
        grid.material.opacity = 0.18;
        stage.add(grid);
  
        const tesseract = createTesseract();
        tesseract.group.position.set(0, 0.03, 0.36);
        tesseract.group.scale.setScalar(getBaseScale());
        monitorGroup.add(tesseract.group);
  
        const particles = createParticles();
        scene.add(particles);
  
        let isHovering = false;
        let isOpen = false;
        let targetScale = getBaseScale();
        let targetThickness = 1;
        let idleTimer = 0;
        let pulseTimer = 0;
        let activeIndex = Math.max(0, getSignalIndexById("A01"));
        let wheelLocked = false;
        let pageMode = "archive";
        let stateMode = "closed";
  
        function cancelFieldPulse() {
          window.clearTimeout(idleTimer);
          window.clearTimeout(pulseTimer);
          root.classList.remove("is-idle-pulse");
        }
  
        function showFieldPulse() {
          if (isOpen) return;
          root.classList.add("is-idle-pulse");
          window.clearTimeout(pulseTimer);
          pulseTimer = window.setTimeout(() => {
            root.classList.remove("is-idle-pulse");
            scheduleFieldPulse();
          }, pulseDuration);
        }
  
        function scheduleFieldPulse() {
          cancelFieldPulse();
          if (!isOpen) {
            idleTimer = window.setTimeout(showFieldPulse, idleDelay);
          }
        }
  
        function isInfoPage() {
          return pageMode === "about" || pageMode === "contact";
        }
  
        function isRecordPage() {
          return pageMode === "record";
        }
  
        function setRecordTemplate(template = "slab") {
          root.classList.toggle("record-template-case", template === "case");
          root.classList.toggle("record-template-slab", template !== "case");
        }
  
        function clearRecordTemplate() {
          root.classList.remove("record-template-case", "record-template-slab");
        }

        function getInfoContent(type) {
          return {
            kicker: infoKickers[type],
            title: resolveText(siteCopy.ui[type], languageMode),
            body: resolveText(siteCopy[type], languageMode),
          };
        }

        function stateLabel(mode) {
          const labels = {
            closed: siteCopy.ui.viewClosed,
            open: siteCopy.ui.viewOpen,
            project: siteCopy.ui.viewProject,
            about: siteCopy.ui.viewAbout,
            contact: siteCopy.ui.viewContact,
          };

          return resolveText(labels[mode] ?? labels.closed, languageMode);
        }

        function setShellState(mode) {
          stateMode = mode;
          stateValue.textContent = stateLabel(mode);
        }

        function updateInfoPageContent(type) {
          const content = getInfoContent(type);
          if (!content) return;

          infoKicker.textContent = content.kicker;
          infoTitle.textContent = content.title;
          infoBody.innerHTML = content.body;
        }

        function applyLocalizedShellCopy() {
          utilityButtons.forEach((button) => {
            if (button.dataset.utility === "about") {
              button.textContent = resolveText(siteCopy.ui.about, languageMode);
            }

            if (button.dataset.utility === "contact") {
              button.textContent = resolveText(siteCopy.ui.contact, languageMode);
            }

            if (button.dataset.utility === "language") {
              button.textContent = languageToggleLabel(languageMode);
            }
          });

          infoReturn.textContent = resolveText(siteCopy.ui.returnArchive, languageMode);
          recordActions.forEach((button) => {
            button.textContent = resolveText(
              button.dataset.recordAction === "archive"
                ? siteCopy.ui.returnArchive
                : siteCopy.ui.returnQueue,
              languageMode,
            );
          });
          setShellState(stateMode);
        }
  
        function renderProjectRecord(signal = signals[activeIndex]) {
          projectFields.kicker.textContent = `${resolveText(siteCopy.ui.projectDossier, languageMode)} / ${signal.code}`;
          projectFields.title.textContent = signal.name;
          projectFields.thesis.textContent = signal.description;
          projectFields.plateLabel.textContent = `${resolveText(siteCopy.ui.evidence, languageMode)} / ${signal.id}`;
          projectFields.plateCaption.textContent = signal.plateCaption;
          projectFields.plateCode.textContent = signal.code;
          if (projectFields.plateLiveLink) {
            if (signal.liveUrl) {
              (projectFields.plateLiveLink as HTMLAnchorElement).href = signal.liveUrl;
              projectFields.plateLiveLink.removeAttribute("hidden");
            } else {
              projectFields.plateLiveLink.setAttribute("hidden", "");
            }
          }
          projectFields.indexState.textContent = signal.state;
          if (signal.primaryMedia?.src) {
            projectFields.plateMark.classList.add("has-media");
            projectFields.plateMark.innerHTML = `
              <img
                class="record-plate-image"
                src="${signal.primaryMedia.src}"
                alt="${signal.primaryMedia.alt ?? ""}"
              />
            `;
            projectFields.plateMark.removeAttribute("aria-hidden");
          } else {
            projectFields.plateMark.classList.remove("has-media");
            projectFields.plateMark.innerHTML = "";
            projectFields.plateMark.setAttribute("aria-hidden", "true");
          }
          projectFields.meta.innerHTML = signal.detailMeta
            .map(([label, value]) => `
              <div class="record-row-detail">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `)
            .join("");
          projectFields.sections.innerHTML = signal.sections
            .map((section, index) => {
              const sectionId = `record-section-${index + 1}`;
              const body = section.body
                .map((paragraph) => `<p>${paragraph}</p>`)
                .join("");
              const images = section.images
                ? `
                  <div class="record-image-row">
                    ${section.images
                      .map((image) => `
                        <figure
                          class="record-image-card ${image.src ? "has-media" : ""}"
                        >
                          ${image.src
                            ? `<img class="record-image" src="${image.src}" alt="${image.alt}" />`
                            : `<div class="record-image-placeholder" aria-label="${image.alt}"></div>`}
                          <figcaption class="record-image-caption">${image.caption}</figcaption>
                        </figure>
                      `)
                      .join("")}
                  </div>
                `
                : "";
  
              return `
                <section class="record-section" id="${sectionId}">
                  <div class="record-section-kicker">${String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h2>${section.title}</h2>
                    ${body}
                    ${images}
                  </div>
                </section>
              `;
            })
            .join("");
          projectFields.index.innerHTML = [
            ["record-overview", `00 / ${resolveText(siteCopy.ui.evidence, languageMode)}`],
            ...signal.sections.map((section, index) => [
              `record-section-${index + 1}`,
              `${String(index + 1).padStart(2, "0")} / ${section.title}`,
            ]),
          ]
            .map(([target, label], index) => `
              <button type="button" class="${index === 0 ? "is-active" : ""}" data-scroll-target="${target}">
                ${label}
              </button>
            `)
            .join("");
        }
  
        function openProjectRecord(index = activeIndex, options = {}) {
          cancelFieldPulse();
          const nextIndex = clampIndex(index);
          const signal = signals[nextIndex];
          if (!canOpenSignal(signal)) {
            return;
          }

          activeIndex = nextIndex;
          renderSignals();
          renderProjectRecord(signal);
          setRecordTemplate(signal.template);
          pageMode = "record";
          isOpen = false;
          root.classList.remove("is-open", "is-info-page", "page-about", "page-contact");
          root.classList.add("is-record-page");
          signalFlow.setAttribute("aria-hidden", "true");
          infoPage.setAttribute("aria-hidden", "true");
          recordPage.setAttribute("aria-hidden", "false");
          mobileSignalList?.setAttribute("aria-hidden", "true");
          signalCards.forEach((card) => {
            card.tabIndex = -1;
          });
          utilityButtons.forEach((button) => {
            button.classList.remove("is-active");
          });
          targetScale = getBaseScale();
          targetThickness = 0;
          setShellState("project");
          writeRoute(`/projects/${signalSlug(signal)}`, options);
        }
  
        function closeRecordToQueue() {
          root.classList.remove("is-record-page");
          clearRecordTemplate();
          recordPage.setAttribute("aria-hidden", "true");
          openFlow();
        }
  
        function closeRecordToArchive() {
          root.classList.remove("is-record-page");
          clearRecordTemplate();
          recordPage.setAttribute("aria-hidden", "true");
          closeFlow();
        }
  
        function closeInfoPage(options = {}) {
          pageMode = "archive";
          root.classList.remove("is-info-page", "is-record-page", "page-about", "page-contact");
          clearRecordTemplate();
          infoPage.setAttribute("aria-hidden", "true");
          recordPage.setAttribute("aria-hidden", "true");
          targetScale = isOpen ? getOpenScale() : getBaseScale();
          targetThickness = isOpen ? 0.34 : 1;
          setShellState(isOpen ? "open" : "closed");
          utilityButtons.forEach((button) => {
            button.classList.remove("is-active");
          });
          if (!isOpen) scheduleFieldPulse();
          writeRoute(isOpen ? routePath.open : routePath.closed, options);
        }
  
        function openInfoPage(type, options = {}) {
          const content = getInfoContent(type);
          if (!content) return;
  
          if (pageMode === type) {
            closeInfoPage(options);
            return;
          }
  
          cancelFieldPulse();
          isOpen = false;
          pageMode = type;
          root.classList.remove("is-open", "is-record-page");
          clearRecordTemplate();
          root.classList.toggle("page-about", type === "about");
          root.classList.toggle("page-contact", type === "contact");
          root.classList.add("is-info-page");
          signalFlow.setAttribute("aria-hidden", "true");
          infoPage.setAttribute("aria-hidden", "false");
          recordPage.setAttribute("aria-hidden", "true");
          signalCards.forEach((card) => {
            card.tabIndex = -1;
          });
  
          targetScale = getInfoScale();
          targetThickness = 0.78;
          setShellState(type);
          updateInfoPageContent(type);
  
          utilityButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.utility === type);
          });
          writeRoute(type === "contact" ? routePath.contact : routePath.about, options);
        }
  
        function handleUtility(type) {
          if (type === "language") {
            languageMode = nextLanguage(languageMode);
            persistLanguage(languageMode);
            signals = projects.length > 0 ? buildArchiveSignals(languageMode) : signals;
            renderSignals();
            if (isInfoPage()) {
              updateInfoPageContent(pageMode);
            }
            if (isRecordPage()) {
              renderProjectRecord(signals[activeIndex]);
            }
            applyLocalizedShellCopy();
            const languageButton = utilityButtons.find((button) => button.dataset.utility === "language");
            languageButton?.classList.add("is-active");
            window.setTimeout(() => {
              languageButton?.classList.remove("is-active");
            }, 520);
            return;
          }
  
          openInfoPage(type);
        }
  
        function clampIndex(index) {
          return Math.max(0, Math.min(signals.length - 1, index));
        }
  
        function openFlow(options = {}) {
          cancelFieldPulse();
          pageMode = "archive";
          isOpen = true;
          targetScale = getOpenScale();
          targetThickness = 0.34;
          root.classList.remove("is-info-page", "is-record-page", "page-about", "page-contact");
          clearRecordTemplate();
          root.classList.add("is-open");
          signalFlow.setAttribute("aria-hidden", "false");
          infoPage.setAttribute("aria-hidden", "true");
          recordPage.setAttribute("aria-hidden", "true");
          mobileSignalList?.setAttribute("aria-hidden", "false");
          signalCards.forEach((card) => {
            card.tabIndex = 0;
          });
          utilityButtons.forEach((button) => {
            button.classList.remove("is-active");
          });
          setShellState("open");
          renderSignals();
          writeRoute(routePath.open, options);
        }

        function closeFlow(options = {}) {
          pageMode = "archive";
          isOpen = false;
          targetScale = getBaseScale();
          targetThickness = 1;
          root.classList.remove("is-open", "is-info-page", "is-record-page", "page-about", "page-contact");
          clearRecordTemplate();
          signalFlow.setAttribute("aria-hidden", "true");
          infoPage.setAttribute("aria-hidden", "true");
          recordPage.setAttribute("aria-hidden", "true");
          mobileSignalList?.setAttribute("aria-hidden", "true");
          signalCards.forEach((card) => {
            card.tabIndex = -1;
          });
          utilityButtons.forEach((button) => {
            button.classList.remove("is-active");
          });
          setShellState("closed");
          scheduleFieldPulse();
          writeRoute(routePath.closed, options);
        }
  
        function renderCard(card, signal, index) {
          if (!signal) {
            card.className = "signal-card latent strip is-hidden";
            card.innerHTML = "";
            card.tabIndex = -1;
            return;
          }

          const delta = index - activeIndex;
          const slot = slots[String(delta)];
          const isActive = delta === 0;
          const isVisible = Boolean(slot);
  
          card.dataset.signalIndex = String(index);
          card.className = [
            "signal-card",
            isVisible ? slot.tone : "latent",
            isActive ? "active" : "strip",
            isVisible ? "" : "is-hidden",
            signal.detailDisabled ? "is-disabled" : "",
          ].filter(Boolean).join(" ");
  
          card.style.setProperty("--y", isVisible ? slot.y : delta < 0 ? "-8%" : "94%");
          card.style.setProperty("--shift", isVisible ? slot.shift : "0px");
          card.style.setProperty("--scale", isVisible ? slot.scale : ".68");
          card.style.setProperty("--alpha", isVisible ? slot.alpha : "0");
          card.style.setProperty("--w", isVisible ? slot.width : "360px");
          card.style.setProperty("--bite", isActive ? "54px" : "30px");
          card.style.zIndex = String(isActive ? 12 : 7 - Math.abs(delta));
  
          card.innerHTML = `
            <small>${signal.meta}</small>
            <strong>${signal.name}</strong>
            <p>${signal.description}</p>
            <span class="route-code">${signal.code}</span>
          `;
        }
  
        function renderAccession(signal) {
          recordFields.name.textContent = signal.name;
          recordFields.state.textContent = signal.state;
          recordFields.type.textContent = signal.type;
          recordFields.route.textContent = signal.route;
  
          signalRows.forEach((row, index) => {
            const item = signals[index];
            if (!item) {
              row.classList.add("is-hidden");
              row.innerHTML = "";
              return;
            }

            const isActive = index === activeIndex;
            const isFiled = item.route === "ROOT / ROUTED" || item.route === "FIELD / ACTIVE";
            row.dataset.registerIndex = String(index);
            row.classList.remove("is-hidden");
            row.classList.toggle("active-row", isActive);
            row.classList.toggle("filed-row", isFiled);
            row.classList.toggle("is-disabled", item.detailDisabled === true);
            row.innerHTML = `
              <span>${item.id}</span>
              <strong class="${isActive ? "active" : ""}">${item.name}</strong>
              <span>${isActive ? resolveText(siteCopy.ui.active, languageMode) : item.state}</span>
            `;
          });
        }
  
        function renderMobileSignalList() {
          if (!mobileSignalList) return;
          mobileSignalList.innerHTML = signals.map((signal, index) => {
            const isActive = index === activeIndex;
            return `<button class="mobile-signal-item${isActive ? " is-active" : ""}${signal.detailDisabled ? " is-disabled" : ""}" data-mobile-index="${index}" type="button">
              <span class="mobile-signal-id">${signal.id}</span>
              <span class="mobile-signal-name">${signal.name}</span>
              <span class="mobile-signal-state">${signal.state}</span>
            </button>`;
          }).join("");
          mobileSignalList.querySelectorAll("[data-mobile-index]").forEach((btn) => {
            btn.addEventListener("click", () => {
              const index = parseInt(btn.dataset.mobileIndex);
              if (canOpenSignal(signals[index])) openProjectRecord(index);
            });
          });
        }

        function renderSignals() {
          const signal = signals[activeIndex];
          signalCards.forEach((card, index) => {
            renderCard(card, signals[index], index);
          });
          renderAccession(signal);
          renderMobileSignalList();
        }
  
        function setActive(index, options = {}) {
          activeIndex = clampIndex(index);
          if (options.open !== false && !isOpen) openFlow();
          renderSignals();
        }
  
        function stepActive(direction) {
          setActive(activeIndex + direction);
        }
  
        window.addEventListener("pointermove", (event) => {
          pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
          pointerTarget.y = -(event.clientY / window.innerHeight) * 2 + 1;
          cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate3d(-50%, -50%, 0)`;
        });
  
        window.addEventListener("pointerdown", (event) => {
          if (event.target.closest(".signal-card, .signal-row, .accession-panel, .utility-strip, .info-page, .record-action, .mobile-signal-list, .record-page, .field-return-hint")) return;
          if (event.pointerType !== "touch" && !isHovering) return;
          if (isRecordPage()) {
            closeRecordToQueue();
            return;
          }
          if (isInfoPage()) {
            closeInfoPage();
            return;
          }
          if (isOpen) {
            closeFlow();
          } else {
            openFlow();
          }
        });

        signalCards.forEach((card, index) => {
          card.addEventListener("click", (event) => {
            event.stopPropagation();
            if (isOpen && index === activeIndex) {
              openProjectRecord(index);
              return;
            }
            setActive(index);
          });
          card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              if (isOpen && index === activeIndex) {
                openProjectRecord(index);
                return;
              }
              setActive(index);
            }
          });
        });
  
        signalRows.forEach((row, index) => {
          row.addEventListener("click", (event) => {
            event.stopPropagation();
            if (isOpen && index === activeIndex) {
              openProjectRecord(index);
              return;
            }
            setActive(index);
          });
        });
  
        utilityButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            event.stopPropagation();
            handleUtility(button.dataset.utility);
          });
        });
  
        infoReturn.addEventListener("click", (event) => {
          event.stopPropagation();
          closeInfoPage();
        });

        fieldReturnHint?.addEventListener("click", (event) => {
          event.stopPropagation();
          if (isOpen) closeFlow();
        });
  
        recordActions.forEach((button) => {
          button.addEventListener("click", (event) => {
            event.stopPropagation();
            if (button.dataset.recordAction === "archive") {
              closeRecordToArchive();
            } else {
              closeRecordToQueue();
            }
          });
        });
  
        projectFields.index.addEventListener("click", (event) => {
          const button = event.target.closest("[data-scroll-target]");
          if (!button) return;
  
          event.stopPropagation();
          const target = root.querySelector(`#${button.dataset.scrollTarget}`);
          if (!target) return;
  
          projectFields.index.querySelectorAll("button").forEach((item) => {
            item.classList.toggle("is-active", item === button);
          });
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
  
        window.addEventListener("wheel", (event) => {
          if (isInfoPage() || isRecordPage()) return;
          if (!window.matchMedia("(min-width: 861px)").matches) return;
          if (Math.abs(event.deltaY) < 8) return;
  
          event.preventDefault();
  
          if (!isOpen) {
            openFlow();
            return;
          }
  
          if (wheelLocked) return;
          wheelLocked = true;
          stepActive(event.deltaY > 0 ? 1 : -1);
          window.setTimeout(() => {
            wheelLocked = false;
          }, 360);
        }, { passive: false });
  
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            if (isRecordPage()) {
              closeRecordToQueue();
              return;
            }
            if (isInfoPage()) {
              closeInfoPage();
              return;
            }
            if (isOpen) closeFlow();
            return;
          }
  
          if (event.key === "ArrowDown") {
            if (isInfoPage() || isRecordPage()) return;
            event.preventDefault();
            if (!isOpen) openFlow();
            stepActive(1);
          }
  
          if (event.key === "ArrowUp") {
            if (isInfoPage() || isRecordPage()) return;
            event.preventDefault();
            if (!isOpen) openFlow();
            stepActive(-1);
          }
        });
  
        function isSmallViewport() {
          return window.innerWidth < 720;
        }
  
        function getBaseScale() {
          return isSmallViewport() ? 4.55 : 10.35;
        }
  
        function getOpenScale() {
          return isSmallViewport() ? 1.2 : 1.02;
        }
  
        function getInfoScale() {
          return isSmallViewport() ? 1.42 : 2.1;
        }
  
        function getRecordScale() {
          return isSmallViewport() ? 1.18 : 1.46;
        }
  
        function getCameraZ() {
          return isSmallViewport() ? 10.8 : 9.4;
        }
  
        function createTesseract() {
          const vertices4D = [];
          for (let i = 0; i < 16; i++) {
            vertices4D.push({
              x: i & 1 ? -1 : 1,
              y: i & 2 ? -1 : 1,
              z: i & 4 ? -1 : 1,
              w: i & 8 ? -1 : 1,
            });
          }
  
          const primaryEdges = [];
          const secondaryEdges = [];
          for (let a = 0; a < 16; a++) {
            for (let b = a + 1; b < 16; b++) {
              const diff = a ^ b;
              if (diff === 1 || diff === 2 || diff === 4 || diff === 8) {
                if (diff === 8) {
                  secondaryEdges.push([a, b]);
                } else {
                  primaryEdges.push([a, b]);
                }
              }
            }
          }
  
          const group = new THREE.Group();
          group.userData.thickness = 1;
          group.userData.motionBlend = 1;
          group.userData.motionTime = 0;
          group.userData.baseScale = getBaseScale();
  
          const primaryEdgeMaterial = new THREE.MeshBasicMaterial({
            color: 0xf0eadb,
            transparent: true,
            opacity: 0.88,
            depthWrite: false,
          });
  
          const secondaryEdgeMaterial = new THREE.MeshBasicMaterial({
            color: 0x9da39a,
            transparent: true,
            opacity: 0.32,
            depthWrite: false,
          });
  
          const nodeMaterial = new THREE.MeshBasicMaterial({
            color: 0xd7ac61,
            transparent: true,
            opacity: 0.16,
            depthWrite: false,
          });
  
          const primaryEdgeMesh = new THREE.InstancedMesh(
            new THREE.BoxGeometry(0.018, 0.018, 1),
            primaryEdgeMaterial,
            primaryEdges.length,
          );
          primaryEdgeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  
          const secondaryEdgeMesh = new THREE.InstancedMesh(
            new THREE.BoxGeometry(0.01, 0.01, 1),
            secondaryEdgeMaterial,
            secondaryEdges.length,
          );
          secondaryEdgeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  
          const nodeMesh = new THREE.InstancedMesh(
            new THREE.BoxGeometry(0.026, 0.026, 0.026),
            nodeMaterial,
            vertices4D.length,
          );
          nodeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  
          group.add(secondaryEdgeMesh, primaryEdgeMesh, nodeMesh);
  
          return {
            group,
            vertices4D,
            primaryEdges,
            secondaryEdges,
            primaryEdgeMesh,
            secondaryEdgeMesh,
            nodeMesh,
            projected: vertices4D.map(() => new THREE.Vector3()),
            dummy: new THREE.Object3D(),
          };
        }
  
        function createParticles() {
          const count = 58;
          const positions = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
            positions[i * 3 + 2] = -Math.random() * 9 + 3;
          }
  
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  
          return new THREE.Points(
            geometry,
            new THREE.PointsMaterial({
              color: 0x83bdb8,
              size: 0.012,
              transparent: true,
              opacity: 0.08,
              depthWrite: false,
            }),
          );
        }
  
        function rotateAndProject4D(point, elapsed, target, driftAmount = 0) {
          let x = point.x;
          let y = point.y;
          let z = point.z;
          let w = point.w;
  
          const driftPulse =
            Math.sin(elapsed * 0.73) * 0.26 +
            Math.sin(elapsed * 0.19 + 1.8) * 0.22 +
            Math.sin(elapsed * 1.37 + Math.sin(elapsed * 0.11)) * 0.045;
  
          const angleXY = elapsed * 0.16 + driftAmount * driftPulse;
          let tx = x * Math.cos(angleXY) - y * Math.sin(angleXY);
          let ty = x * Math.sin(angleXY) + y * Math.cos(angleXY);
          x = tx;
          y = ty;
  
          const foldDrift =
            Math.sin(elapsed * 0.31 + 0.6) * 0.22 +
            Math.sin(elapsed * 0.07 + 2.4) * 0.34;
          const phaseClock =
            elapsed * 0.29 +
            driftAmount * Math.sin(elapsed * 0.41) * 0.35 +
            driftAmount * foldDrift;
          const step = Math.floor(phaseClock);
          const phase = phaseClock - step;
          const eased =
            phase < 0.5
              ? 4 * phase * phase * phase
              : 1 - Math.pow(-2 * phase + 2, 3) / 2;
  
          const angleZW =
            (step + eased) * (Math.PI / 4) +
            driftAmount * Math.sin(elapsed * 0.83 + 1.5) * 0.16;
          const angleXW =
            (step + eased) * (Math.PI / 2) +
            driftAmount * Math.sin(elapsed * 0.27 + 0.3) * 0.22;
  
          let tz = z * Math.cos(angleZW) - w * Math.sin(angleZW);
          let tw = z * Math.sin(angleZW) + w * Math.cos(angleZW);
          z = tz;
          w = tw;
  
          tx = x * Math.cos(angleXW) - w * Math.sin(angleXW);
          tw = x * Math.sin(angleXW) + w * Math.cos(angleXW);
          x = tx;
          w = tw;
  
          const perspective = 1 / (3.2 - w);
          target.set(x * perspective, y * perspective, z * perspective);
          return target;
        }
  
        function updateTesseract(t, delta) {
          const thickness = THREE.MathUtils.lerp(
            tesseract.group.userData.thickness,
            targetThickness,
            1 - Math.pow(0.001, delta),
          );
          tesseract.group.userData.thickness = thickness;
  
          tesseract.group.visible = thickness > 0.012;
  
          const closedWeight = THREE.MathUtils.clamp((thickness - 0.34) / 0.66, 0, 1);
          const motionTarget = isInfoPage() ? 0.42 : isRecordPage() ? 0.22 : isOpen ? 0 : 1;
          const motionBlend = THREE.MathUtils.lerp(
            tesseract.group.userData.motionBlend,
            motionTarget,
            1 - Math.pow(0.025, delta),
          );
          tesseract.group.userData.motionBlend = motionBlend;
  
          const motionPulse =
            Math.sin(t * 0.17 + 0.7) * 0.018 +
            Math.sin(t * 0.047 + 2.2) * 0.012;
          const motionSpeed = (0.5 + motionBlend * 0.09) * (1 + motionBlend * motionPulse);
          tesseract.group.userData.motionTime += delta * motionSpeed;
          const localTime = tesseract.group.userData.motionTime + 1.7;
  
          tesseract.vertices4D.forEach((point, index) => {
            rotateAndProject4D(point, localTime, tesseract.projected[index], motionBlend);
          });
  
          const openWeight = isOpen ? 1 : 0;
          const infoWeight = isInfoPage() ? 1 : 0;
          const materialPulse = Math.sin(localTime * 0.43) * 0.028;
          tesseract.primaryEdgeMesh.material.opacity =
            0.74 + closedWeight * 0.08 + openWeight * 0.18 + infoWeight * 0.18 + materialPulse;
          tesseract.secondaryEdgeMesh.material.opacity =
            0.16 + closedWeight * 0.1 + openWeight * 0.16 + infoWeight * 0.16 - materialPulse * 0.45;
          tesseract.nodeMesh.material.opacity =
            0.035 + closedWeight * 0.045 + openWeight * 0.055 + infoWeight * 0.06;
          amberLight.intensity = 5.2;
  
          const closeLineFactor = THREE.MathUtils.lerp(1, 0.66, closedWeight);
          const closeSecondaryFactor = THREE.MathUtils.lerp(0.72, 0.56, closedWeight);
          const closeNodeFactor = THREE.MathUtils.lerp(0.48, 0.31, closedWeight);
          const stateLineFactor = closeLineFactor + openWeight * 0.48 + infoWeight * 0.42;
          const stateSecondaryFactor = closeSecondaryFactor + openWeight * 0.27 + infoWeight * 0.24;
          const stateNodeFactor = closeNodeFactor + openWeight * 0.12 + infoWeight * 0.12;
          const nodeScale = Math.max(thickness * stateNodeFactor, 0.001);
          const lineScale = Math.max(thickness * stateLineFactor, 0.001);
          for (let i = 0; i < tesseract.projected.length; i++) {
            tesseract.dummy.position.copy(tesseract.projected[i]);
            tesseract.dummy.rotation.set(0, 0, 0);
            tesseract.dummy.scale.setScalar(nodeScale);
            tesseract.dummy.updateMatrix();
            tesseract.nodeMesh.setMatrixAt(i, tesseract.dummy.matrix);
          }
          tesseract.nodeMesh.instanceMatrix.needsUpdate = true;
  
          const mobileLineBoost = isSmallViewport() && isOpen ? 1.45 : 1.0;
          updateEdgeInstances(tesseract.primaryEdgeMesh, tesseract.primaryEdges, lineScale * mobileLineBoost);
          updateEdgeInstances(tesseract.secondaryEdgeMesh, tesseract.secondaryEdges, lineScale * stateSecondaryFactor * mobileLineBoost);
  
          const closedYaw =
            -0.42 +
            localTime * 0.038 +
            Math.sin(localTime * 0.23 + Math.sin(localTime * 0.09) * 1.7) * 0.22 +
            Math.sin(localTime * 0.61 + 0.8) * 0.055;
          const closedPitch =
            -0.18 +
            Math.sin(localTime * 0.29 + 1.2) * 0.16 +
            Math.sin(localTime * 0.071 + 0.4) * 0.075;
          const closedRoll =
            0.13 +
            Math.sin(localTime * 0.17 + 2.1) * 0.085;
          const openYaw = localTime * 0.078;
          const openPitch = localTime * 0.04;
  
          tesseract.group.rotation.y =
            THREE.MathUtils.lerp(openYaw, closedYaw, motionBlend) + pointer.x * 0.055;
          tesseract.group.rotation.x =
            THREE.MathUtils.lerp(openPitch, closedPitch, motionBlend) - pointer.y * 0.035;
          tesseract.group.rotation.z = closedRoll * motionBlend;
  
          const baseScale = THREE.MathUtils.lerp(
            tesseract.group.userData.baseScale,
            targetScale,
            1 - Math.pow(0.0008, delta),
          );
          tesseract.group.userData.baseScale = baseScale;
          const openHeightFactor = 1 + openWeight * 0.16;
          tesseract.group.scale.set(
            baseScale * (1 + closedWeight * 0.18),
            baseScale * (1 - closedWeight * 0.02) * openHeightFactor,
            baseScale * (1 - closedWeight * 0.02),
          );
        }
  
        function updateEdgeInstances(mesh, edges, lineScale) {
          for (let i = 0; i < edges.length; i++) {
            const [a, b] = edges[i];
            const start = tesseract.projected[a];
            const end = tesseract.projected[b];
            const length = start.distanceTo(end);
            const middle = start.clone().lerp(end, 0.5);
  
            tesseract.dummy.position.copy(middle);
            tesseract.dummy.lookAt(end);
            tesseract.dummy.scale.set(lineScale, lineScale, length);
            tesseract.dummy.updateMatrix();
            mesh.setMatrixAt(i, tesseract.dummy.matrix);
          }
          mesh.instanceMatrix.needsUpdate = true;
        }
  
        function animate() {
          const frameTime = performance.now();
          const delta = Math.min((frameTime - lastFrameTime) / 1000, 0.05);
          const elapsed = (frameTime - startTime) / 1000;
          lastFrameTime = frameTime;
  
          pointer.lerp(pointerTarget, 0.035);
          const calmPageWeight = isInfoPage() || isRecordPage() ? 1 : 0;
          stage.rotation.y = pointer.x * (calmPageWeight ? 0.018 : 0.035);
          stage.rotation.x = -pointer.y * (calmPageWeight ? 0.006 : 0.012);
          const monitorTarget = isInfoPage()
            ? closedMonitorPosition
            : isRecordPage()
              ? recordMonitorPosition
              : isOpen
                ? (isSmallViewport() ? mobileOpenMonitorPosition : openMonitorPosition)
                : closedMonitorPosition;
          monitorGroup.position.lerp(monitorTarget, 1 - Math.pow(0.0009, delta));
          monitorGroup.rotation.x = THREE.MathUtils.lerp(
            monitorGroup.rotation.x,
            isInfoPage() ? -0.035 : isRecordPage() ? -0.03 : isOpen ? -0.02 : -0.08,
            1 - Math.pow(0.0009, delta),
          );
          monitorGroup.rotation.z = THREE.MathUtils.lerp(
            monitorGroup.rotation.z,
            isInfoPage() ? 0 : isRecordPage() ? 0.04 : isOpen ? (isSmallViewport() ? 0.04 : 0.18) : 0,
            1 - Math.pow(0.0009, delta),
          );
          camera.position.x = pointer.x * (calmPageWeight ? 0.035 : 0.08);
          camera.position.y = 0.8 + pointer.y * (calmPageWeight ? 0.025 : 0.055);
          camera.lookAt(0, 0, 0);
  
          particles.rotation.y += delta * 0.018;
          particles.rotation.x = Math.sin(elapsed * 0.22) * 0.04;
          raycaster.setFromCamera(pointerTarget, camera);
          const hovered = !isInfoPage() && !isRecordPage() && raycaster.intersectObject(monitor, false).length > 0;
          if (hovered !== isHovering) {
            isHovering = hovered;
            root.classList.toggle("is-hovering", isHovering);
          }
  
          updateTesseract(elapsed, delta);

          if (fieldReturnHint && isOpen) {
            const _hintPos = new THREE.Vector3();
            tesseract.group.getWorldPosition(_hintPos);
            _hintPos.project(camera);
            fieldReturnHint.style.left = ((_hintPos.x + 1) / 2 * window.innerWidth) + "px";
            fieldReturnHint.style.top = ((-_hintPos.y + 1) / 2 * window.innerHeight) + "px";
          }

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
  
        function resize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.position.z = getCameraZ();
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          targetScale = isInfoPage()
            ? getInfoScale()
            : isRecordPage()
              ? getRecordScale()
              : isOpen
                ? getOpenScale()
                : getBaseScale();
        }
  
        window.addEventListener("resize", resize);
        window.addEventListener("popstate", () => {
          applyRouteFromLocation();
        });

        function applyRouteFromLocation() {
          const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
          const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/);

          if (projectMatch) {
            const slug = decodeURIComponent(projectMatch[1]);
            const projectIndex = getSignalIndexBySlug(slug);
            if (projectIndex >= 0 && canOpenSignal(signals[projectIndex])) {
              openProjectRecord(projectIndex, { history: false });
              return;
            }

            openFlow({ history: false });
            writeRoute(routePath.open, { replace: true });
            return;
          }

          if (normalizedPath === routePath.about) {
            openInfoPage("about", { history: false });
            return;
          }

          if (normalizedPath === routePath.contact) {
            openInfoPage("contact", { history: false });
            return;
          }

          if (normalizedPath === routePath.open || window.location.hash === "#open") {
            openFlow({ history: false });
            return;
          }

          if (window.location.hash === "#record") {
            openProjectRecord(activeIndex, { history: false });
            return;
          }

          closeFlow({ history: false });
        }

        const requestedSignalValue = new URLSearchParams(window.location.search).get("signal");
        const requestedSignal = Number(requestedSignalValue);
        if (
          requestedSignalValue !== null &&
          Number.isInteger(requestedSignal) &&
          requestedSignal >= 0 &&
          requestedSignal < signals.length
        ) {
          activeIndex = requestedSignal;
        }
        applyLocalizedShellCopy();
        renderSignals();
        applyRouteFromLocation();
        animate();
      

  return () => {
    container.dataset.archiveMounted = "false";
  };
}
