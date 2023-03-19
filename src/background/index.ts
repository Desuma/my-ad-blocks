const ALWAYS = [
  /googleads\.g\.doubleclick\.net/,
  /googletagmanager\.com/,
  /ads\.servenobid\.com/,
  /pagead\w*\.googlesyndication\.com/,
  /partner\.googleadservices\.com/,
  /adservice\.google\.com/,
  /googleads\.g.doubleclick\.net/,
  /googletagservices\.com/,
  /tpc\.googlesyndication\.com/,
  /pc\.jinrongwang\.net/,
  /securepubads\.g\.doubleclick\.net/,
  /mob\.xxzzsj\.xyz\/code/,
  /juringupstage\.com/,
  /c\.v4dwkcv\.com/,
  /pc\.stgowan\.com/,
  /v2\.euqq\.cn/,
  /zg.byspellgorier.com/,
  /page_runtime_v5/,
  /www\.cocomanga\.com\/logo\/ad\.js/,
  /si\.vouninked\.com\/rCeWS1hQR6rdYfXnZ\/57154/,
  /rebrickstowp/,
  /su\.tahltanboutell\.com/
  // /cdn\.ampproject\.org/
  // /cdn\.adpushup\.com/
  // /ib\.adnxs\.com/
];

const listener = (request: any) => {
  const { initiator, url } = request ?? {};

  const shouldCancel = ALWAYS.some(
    bklist => bklist && url.search(bklist) > -1
  );

  return shouldCancel
    ? { cancel: true }
    : request;
};

const filter = {
  urls: ['<all_urls>'],
  types: ['image', 'media', 'script', 'xmlhttprequest'],
};

const extraInfoSpec = ['blocking'];

chrome
  ?.webRequest
  ?.onBeforeRequest
  ?.addListener
  ?.(listener, filter, extraInfoSpec);