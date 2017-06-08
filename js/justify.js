var CSS = [
    {
        property: 'justify-content',
        values: [
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'inherit'
        ]
    }
];

// Build app
function app(appCSS) {
    var i;

    // Give body an `app` class
    document.body.classList.add('app');

    // Add app container
    createNewElement(appCSS, {
        tagName: 'div',
        classNames: [
            'container',
            'display_none',
            'color_dark-gray'
        ],
        parent: 'app'
    });

    // Add app title
    createNewElement(appCSS, {
        tagName: 'h1',
        classNames: [
            'page-title'
        ],
    });

    // Add app title link
    createNewElement(appCSS, {
        tagName: 'a',
        classNames: [
            'page-title__text',
            'font-weight_300',
            'font-family_sans-serif',
            'text-decoration_none',
            'color_dark-gray'
        ],
        parent: 'page-title',
        content: appCSS.property,
        MDNHref: true
    });

    // Create sections
    for (i = 0; i < appCSS.values.length; i++) {
        // Create section title
        createNewElement(appCSS, {
            tagName: 'h2',
            classNames: [
                'font-weight_600',
                'font-family_sans-serif',
                'color_dark-gray'
            ],
            content: appCSS.values[i]
        });

        // Create section for CSS value
        createNewElement(appCSS, {
            tagName: 'section',
            classNames: [
                'group',
                'display_flex',
                appCSS.property + '_' + appCSS.values[i],
                'background-color_light-gray'
            ]
        });

        // Create three divs for each CSS value section
        createNewElement(appCSS, {
            tagName: 'div',
            classNames: [
                'group__box',
                'width_3rem',
                'height_3rem',
                'background-image_blue-gradient'
            ],
            parent: appCSS.property + '_' + appCSS.values[i],
            amount: 3
        });

        // Show container with all content loaded
        document.getElementsByClassName('container')[0].classList.remove('display_none');
    }
}

// Add element(s)
function createNewElement(appCSS, o) {
    var j, k,
        classNames = o.classNames || [],
        parent = document.getElementsByClassName(o.parent)[0] || document.getElementsByClassName('container')[0],
        amount = o.amount || 1,
        content = o.content || '',
        MDNHref = o.MDNHref;

    for (j = 0; j < amount; j++) {
        var newElement = document.createElement(o.tagName);

        parent.appendChild(newElement);

        if (classNames) {
            for (k = 0; k < classNames.length; k++) {
                newElement.classList.add(classNames[k]);
            }
        }

        if (content) {
            newElement.innerHTML = content;
        }

        if (MDNHref) {
            newElement.setAttribute('href', '//developer.mozilla.org/en-US/docs/Web/CSS/' + appCSS.property);
        }
    }
}

// Run app
app(CSS[0]);