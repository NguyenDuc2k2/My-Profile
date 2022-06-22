new WOW().init();

const getId = (id) => document.getElementById(id);

const getAll = (element) => document.querySelectorAll(element);

const getElement = (element) => document.querySelector(element);

getId('sidebarToggler').onclick = (element) => {
    getAll('.bar').forEach((element) => {
        element.classList.toggle("change");
    });
    getId('dropDown').classList.toggle('active')
}

getId('buttonIntroduce').onclick = (element) => {
    getId('introducerLink').classList.toggle('show');
};

let wrapper;

let sleep = (ms) => new Promise((resole) => { setTimeout(resole, ms) });

const write = async (text) => {
    let i = 0;
    while (i < text.length) {
        const timeOut = 150;
        await sleep(timeOut);
        i++;
        wrapper.innerHTML = text.substr(0, i);
    }
};

const erase = async () => {
    while (wrapper.textContent.length) {
        const timeOut = 150;
        await sleep(timeOut);
        wrapper.textContent = wrapper.textContent.substring(
            0,
            wrapper.textContent.length - 1
        );
    }
};

const writeAll = async (stringTarget, container) => {
    wrapper = getId(container);
    const stringContainer = getAll('.' + stringTarget);
    while (wrapper) {
        for (i = 0; i < stringContainer.length; i++) {
            const string = stringContainer[i].textContent;
            await write(string);
            await sleep(1500);
            await erase();
            await sleep(1500)
        }
    }
}

writeAll('text-item', 'textType');

getAll('.show_item').forEach((element) => {
    element.onclick = () => {
        element.classList.toggle('skills_active')
    }
});

const ulHeader = getElement('.nav_pages');
const arrLiHeader = ulHeader.querySelectorAll('li');

const activeHeader = (li) => {
    getElement('.nav_pages li .active').classList.remove('active');
    li.classList.add('active');
};


window.onscroll = () => {
    const offset = window.scrollY;
    const width = window.innerWidth;
    if (offset > 15) {
        getId('header').classList.add('header_onsrcoll');
    } else {
        getId('header').classList.remove('header_onsrcoll');
    }

    if ((offset >= 3450)) {
        if (width < 992 && offset >= 4200) {
            activeHeader(arrLiHeader[5].children[0]);
        } else if (width < 992 && offset >= 3500) {
            activeHeader(arrLiHeader[4].children[0]);
        } else {
            activeHeader(arrLiHeader[5].children[0]);
        }
    }
    else if (width > 992 && offset >= 2800) {
        activeHeader(arrLiHeader[4].children[0]);
    }
    else if (offset >= 1950) {
        activeHeader(arrLiHeader[3].children[0]);
    }
    else if (offset >= 1350) {
        activeHeader(arrLiHeader[2].children[0]);
    }
    else if (offset >= 500) {
        activeHeader(arrLiHeader[1].children[0]);
    } else {
        activeHeader(arrLiHeader[0].children[0]);
    }
}

window.onload = () => {
    setTimeout(() => {
        getElement("body").classList.remove("preloading");
    }, 4500);
    setTimeout(() => {
        getId("preload").classList.add("animate__fadeOut");
    }, 3500);
    setTimeout(() => {
        getId("preload").style.display = "none";
    }, 4500);
};
