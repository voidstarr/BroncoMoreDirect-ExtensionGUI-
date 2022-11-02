// inject BroncoMoreDirect html
fetch(chrome.runtime.getURL('panel.html')).then(r => r.text()).then(html => {
    document.getElementById("gh-main-content").insertAdjacentHTML('afterbegin', html);
});

{
    // inject BroncoMoreDirect javascript
    let bmdReactAppScript = document.createElement('script');
    bmdReactAppScript.src = chrome.runtime.getURL('panel.bundle.js');
    document.head.appendChild(bmdReactAppScript);
}