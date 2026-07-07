const prototypes = [
  {
    name: "Anika Kloodt",
    semester: "Sem 06",
    file: "Anika.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/FUTTG6C60oSiLPzFs3ztzZ/Anika Kloodt 06?node-id=1-4&p=f&viewport=-41%2C-227%2C0.22&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Julia Schröter",
    semester: "Sem 06",
    file: "Julia.fig",
    platform: "figma",
    device: "standard",
    lockDrag: true,
    url: "https://embed.figma.com/proto/UKjsaqeygcBOXhiLUDvaBU/Julia Schröter 04?node-id=1-2&p=f&viewport=45%2C276%2C0.15&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Lina-Marie Baumann",
    semester: "Sem 06",
    file: "Hedi.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/TS3VVuKqKIP6HJHwSYazNI/Lina?node-id=1-4&p=f&viewport=303%2C60%2C1.06&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Hedwig Heinicke",
    semester: "Sem 06",
    file: "Hedi.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/PXuDvpVrL6cEu8fWtrxx53/Hedwig-Heinicke-06?node-id=271-130&viewport=1095%2C-212%2C0.22&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=271%3A130&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Yunseo Kim",
    semester: "Sem 04",
    file: "Marit.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/DmMl0R324IVbRC8vgy8Qfy/Ohne-Namen?node-id=1-5&p=f&viewport=247%2C140%2C0.16&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A5&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Marit Reinel",
    semester: "Sem 04",
    file: "Marit.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/GxWTINBn0Qhh8WxxJ1sgVE/Marit Reinel 04?node-id=1-2&p=f&viewport=45%2C210%2C0.15&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share",
  },
    {
    name: "Linh Phuong Nguyen",
    semester: "Sem 06",
    file: "Marit.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/2HwGUAoNTKxcKGzlhRjYkZ/Linh?node-id=1-2&p=f&viewport=321%2C88%2C0.99&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2&page-id=0%3A1&embed-host=share",
  },
   {
    name: "Nadja Stommel",
    semester: "Sem 06",
    file: "Marit.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/v6UXFPu8XxkfaUj8ODOfLM/Ohne-Namen?node-id=1-887&p=f&viewport=93%2C62%2C0.02&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A887&show-proto-sidebar=1&page-id=0%3A1&embed-host=share",
  },
  {
    name: "Marie Eichler",
    semester: "Sem 06",
    platform: "protopie",
    device: "standard",
    protopieZoom: 1.02,
    protopieOffsetY: "0px",
    preloadOnLeave: true,
    preloadOnStart: true,
    showImmediately: true,
    url: "https://cloud.protopie.io/p/24d77f51ebd0ce121e49b9dd",
  },
   {
    name: "Jeongin Choi",
    semester: "Sem 04",
    file: "Marit.fig",
    platform: "figma",
    device: "standard",
    url: "https://embed.figma.com/proto/KQoyVcTy1gvvC08dqmgDwS/Jeongin-Choi_knock-knock?node-id=46-708&viewport=164%2C285%2C0.14&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=46%3A708&page-id=37%3A62&embed-host=share",
  },
];

const screen = document.querySelector("#screen");
const studentName = document.querySelector("#studentName");
const semester = document.querySelector("#semester");
const counter = document.querySelector("#counter");
const figLink = document.querySelector("#figLink");
const mediaTabs = document.querySelector("#mediaTabs");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const phone = document.querySelector("#phone");
const prototypeBadge = document.querySelector("#prototypeBadge");
const infoButton = document.querySelector("#infoButton");
const infoModal = document.querySelector("#infoModal");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalClose = document.querySelector("#modalClose");

const badgeAssets = {
  try: "Assets/try_badge.png?v=20260707-04",
  video: "Assets/video_badge.png?v=20260707-04",
};

const totalProjectSlots = 12;
let activeIndex = 0;
let touchStartX = 0;
const prototypeViews = [];
let phoneSettlingTimer;

function applyMuteParams(parsedUrl) {
  parsedUrl.searchParams.set("muted", "true");
  parsedUrl.searchParams.set("mute", "true");
  parsedUrl.searchParams.set("sound", "false");
  parsedUrl.searchParams.set("audio", "false");
  parsedUrl.searchParams.set("autoplay", "false");
}

function toFigmaEmbedUrl(item) {
  const { url } = item;
  if (!url) return "";
  const parsedUrl = new URL(url.trim());

  if (parsedUrl.hostname === "embed.figma.com") {
    parsedUrl.searchParams.set("embed-host", "share");
  } else if (parsedUrl.hostname.endsWith("figma.com")) {
    parsedUrl.hostname = "embed.figma.com";
    parsedUrl.searchParams.set("embed-host", "share");
  } else {
    return url.trim();
  }

  parsedUrl.searchParams.delete("viewport");
  parsedUrl.searchParams.set("scaling", "scale-down-width");
  parsedUrl.searchParams.set("content-scaling", "fixed");

  parsedUrl.searchParams.set("viewport-controls", "false");
  parsedUrl.searchParams.set("footer", "false");
  parsedUrl.searchParams.set("hide-ui", "1");
  parsedUrl.searchParams.set("show-proto-sidebar", "false");
  parsedUrl.searchParams.set("disable-default-keyboard-nav", "true");
  applyMuteParams(parsedUrl);

  return parsedUrl.toString();
}

function toProtoPieEmbedUrl(url) {
  if (!url) return "";
  const parsedUrl = new URL(url.trim());

  if (parsedUrl.hostname.endsWith("protopie.io")) {
    parsedUrl.searchParams.set("ui", "false");
    parsedUrl.searchParams.set("scaleToFit", "true");
    parsedUrl.searchParams.set("deviceFrame", "false");
    parsedUrl.searchParams.set("device-frame", "false");
    parsedUrl.searchParams.set("showDeviceFrame", "false");
    parsedUrl.searchParams.set("mockup", "false");
    parsedUrl.searchParams.set("showMockup", "false");
    parsedUrl.searchParams.set("displayMockup", "false");
    parsedUrl.searchParams.set("hotspotHints", "false");
    parsedUrl.searchParams.set("cursorType", "touch");
    applyMuteParams(parsedUrl);
  }

  return parsedUrl.toString();
}

function getEmbedUrl(item) {
  if (item.platform === "figma") return toFigmaEmbedUrl(item);
  if (item.platform === "protopie") return toProtoPieEmbedUrl(item.url);
  return item.url || "";
}

function createFallback(item) {
  const fallback = document.createElement("div");
  fallback.className = "fallback";
  fallback.innerHTML = `
    <p>Prototyp-Link fehlt</p>
    <small>Für ${item.name} ist noch kein teilbarer Prototyp-Link eingetragen.</small>
  `;
  return fallback;
}

function createPrototypeView(item, index) {
  const view = document.createElement("div");
  view.className = `prototype-view prototype-view--${item.platform || "fallback"}`;
  view.classList.toggle("prototype-view--drag-locked", Boolean(item.lockDrag));
  if (item.protopieZoom) {
    view.style.setProperty("--protopie-zoom", item.protopieZoom);
  }
  if (item.protopieOffsetY) {
    view.style.setProperty("--protopie-offset-y", item.protopieOffsetY);
  }
  view.setAttribute("aria-hidden", "true");
  view.dataset.index = String(index);

  if (!item.url) {
    view.append(createFallback(item));
    view.classList.add("is-loaded");
    return view;
  }

  const iframe = document.createElement("iframe");
  iframe.title = `${item.name} Prototyp`;
  iframe.loading = "eager";
  iframe.scrolling = item.lockDrag ? "no" : "auto";
  iframe.allow = "camera *; microphone *; fullscreen *; clipboard-read; clipboard-write; accelerometer; gyroscope; autoplay 'none'";
  iframe.setAttribute("allowusermedia", "true");
  iframe.allowFullscreen = true;
  const markLoaded = () => {
    // ProtoPie can paint once before it has settled into the iframe size.
    const loadDelay = item.showImmediately ? 0 : item.platform === "protopie" ? 2400 : 120;
    window.setTimeout(() => view.classList.add("is-loaded"), loadDelay);
  };
  iframe.addEventListener("load", markLoaded, { once: true });

  view.append(iframe);
  return view;
}

function setupPrototypeViews() {
  screen.replaceChildren();

  prototypes.forEach((item, index) => {
    const view = createPrototypeView(item, index);
    prototypeViews[index] = view;
    screen.append(view);

    if (item.preloadOnStart) {
      const iframe = view.querySelector("iframe");
      iframe.src = getEmbedUrl(item);
      view.dataset.loadedOnce = "true";
      if (item.showImmediately) {
        view.classList.add("is-loaded");
      }
    }
  });
}

function renderPrototype() {
  prototypeViews.forEach((view, index) => {
    const isActive = index === activeIndex;
    const item = prototypes[index];
    view.classList.toggle("is-active", isActive);
    view.setAttribute("aria-hidden", String(!isActive));

    if (isActive && !view.dataset.loadedOnce) {
      const iframe = view.querySelector("iframe");
      iframe.src = getEmbedUrl(item);
      view.dataset.loadedOnce = "true";
      if (item.showImmediately) {
        view.classList.add("is-loaded");
      }
    }

    if (isActive && item.platform === "protopie" && !item.showImmediately) {
      view.classList.add("is-settling");
      window.clearTimeout(view.settlingTimer);
      view.settlingTimer = window.setTimeout(() => {
        view.classList.remove("is-settling");
      }, 2600);
    } else {
      view.classList.remove("is-settling");
    }
  });
}

function preloadPrototypeInBackground(index) {
  const item = prototypes[index];
  const view = prototypeViews[index];
  const iframe = view?.querySelector("iframe");

  if (!item?.preloadOnLeave || !iframe) return;

  if (!item.showImmediately) {
    view.classList.remove("is-loaded");
  }
  iframe.removeAttribute("src");

  window.setTimeout(() => {
    iframe.addEventListener("load", () => {
      const loadDelay = item.showImmediately ? 0 : item.platform === "protopie" ? 2400 : 120;
      window.setTimeout(() => view.classList.add("is-loaded"), loadDelay);
    }, { once: true });
    iframe.src = getEmbedUrl(item);
    view.dataset.loadedOnce = "true";
  }, 120);
}

function renderTabs() {
  mediaTabs.replaceChildren();

  prototypes.forEach((item, index) => {
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(index === activeIndex));
    tab.setAttribute("aria-label", `${item.name} anzeigen`);
    tab.addEventListener("click", () => {
      const previousIndex = activeIndex;
      activeIndex = index;
      render();
      if (previousIndex !== activeIndex) {
        preloadPrototypeInBackground(previousIndex);
      }
    });
    mediaTabs.append(tab);
  });
}

function renderPageIndicators() {
  counter.replaceChildren();
  counter.setAttribute("aria-label", `Projekt ${activeIndex + 1} von ${totalProjectSlots}`);

  for (let index = 0; index < totalProjectSlots; index += 1) {
    const indicator = document.createElement("span");
    indicator.className = "page-indicator";
    indicator.textContent = "I";
    if (index === activeIndex) {
      indicator.setAttribute("aria-current", "true");
    }
    counter.append(indicator);
  }
}

function getBadgeType(item) {
  const name = item.name.toLowerCase();
  return name.includes("linh") || name.includes("lina") ? "video" : "try";
}

function restartBadgeAnimation() {
  prototypeBadge.classList.remove("is-entering");
  void prototypeBadge.offsetWidth;
  window.requestAnimationFrame(() => {
    prototypeBadge.classList.add("is-entering");
  });
}

function renderBadge(item) {
  const badgeType = getBadgeType(item);

  prototypeBadge.className = `prototype-badge prototype-badge--${badgeType}`;
  prototypeBadge.src = badgeAssets[badgeType];
  prototypeBadge.alt = "";

  restartBadgeAnimation();
}

function render() {
  const item = prototypes[activeIndex];

  studentName.textContent = item.name;
  semester.textContent = item.semester;
  phone.dataset.device = item.device || "standard";
  phone.dataset.prototype = item.name.toLowerCase();
  phone.classList.toggle("phone--protopie", item.platform === "protopie");
  phone.classList.toggle("phone--video-only", getBadgeType(item) === "video");
  window.clearTimeout(phoneSettlingTimer);
  if (item.platform === "protopie" && !item.showImmediately) {
    phone.classList.add("phone--settling");
    phoneSettlingTimer = window.setTimeout(() => {
      phone.classList.remove("phone--settling");
    }, 3600);
  } else {
    phone.classList.remove("phone--settling");
  }
  figLink.href = item.file || item.url || "#";
  figLink.textContent = item.file ? ".fig" : item.platform || "link";
  figLink.setAttribute("aria-label", `${item.name} Quelle öffnen`);
  figLink.toggleAttribute("hidden", !item.file && !item.url);

  renderPrototype();
  renderTabs();
  renderPageIndicators();
  renderBadge(item);
}

function move(direction) {
  const previousIndex = activeIndex;
  activeIndex = (activeIndex + direction + prototypes.length) % prototypes.length;
  render();
  preloadPrototypeInBackground(previousIndex);
}

prevButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
});

document.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) > 52) move(distance > 0 ? -1 : 1);
});

screen.addEventListener("mouseenter", () => {
  if (getBadgeType(prototypes[activeIndex]) === "video") {
    restartBadgeAnimation();
  }
});

screen.addEventListener("pointerdown", () => {
  if (getBadgeType(prototypes[activeIndex]) === "video") {
    restartBadgeAnimation();
  }
});

function openInfo() {
  infoModal.classList.add("is-open");
  infoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeInfo() {
  infoModal.classList.remove("is-open");
  infoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  infoButton.focus();
}

function holdHover(button) {
  button.classList.add("is-hover-held");
}

function releaseHeldHover(button) {
  button.classList.remove("is-hover-held");
}

infoButton.addEventListener("click", () => {
  openInfo();
  holdHover(modalClose);
});
modalBackdrop.addEventListener("click", closeInfo);
modalClose.addEventListener("click", () => {
  closeInfo();
  holdHover(infoButton);
});
infoButton.addEventListener("pointerleave", () => releaseHeldHover(infoButton));
modalClose.addEventListener("pointerleave", () => releaseHeldHover(modalClose));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && infoModal.classList.contains("is-open")) {
    closeInfo();
  }
});

setupPrototypeViews();
render();
