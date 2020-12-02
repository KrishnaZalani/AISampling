//Values were generated using a random number between (0,1) and calculated the average over 10 iterations.

let rn = {
    '+rn': 0.57,
    '-rn': 0.43,
};
let sm = {
    '+sm': 0.34,
    '-sm': 0.66,
};
let wis = {
    '+wis': 0.45,
    '-wis': 0.55,
};
let sf = {
    '+sf': 0.41,
    '-sf': 0.59,
};
let ft = {
    '+ft': 0.39,
    '-ft': 0.61,
};
let cc = {
    '+rn': {
        '+cc': 0.79,
        '-cc': 0.21,
    },
    '-rn': {
        '+cc': 0.34,
        '-cc': 0.66,
    },
};
let pn = {
    '+wis': {
        '+sf': {
            '+cc': {
                '+pn': 0.95,
                '-pn': 0.05,
            },
            '-cc': {
                '+pn': 0.86,
                '-pn': 0.14,
            },
        },
        '-sf': {
            '+cc': {
                '+pn': 0.84,
                '-pn': 0.16,
            },
            '-cc': {
                '+pn': 0.65,
                '-pn': 0.35,
            },
        },
    },
    '-wis': {
        '+sf': {
            '+cc': {
                '+pn': 0.57,
                '-pn': 0.43,
            },
            '-cc': {
                '+pn': 0.53,
                '-pn': 0.47,
            },
        },
        '-sf': {
            '+cc': {
                '+pn': 0.23,
                '-pn': 0.77,
            },
            '-cc': {
                '+pn': 0.12,
                '-pn': 0.88,
            },
        },
    },
};

let lc = {
    '+sm': {
        '+lc': 0.85,
        '-lc': 0.15,
    },
    '-sm': {
        '+lc': 0.35,
        '-lc': 0.65,
    },
};

let br = {
    '+sm': {
        '+br': 0.75,
        '-br': 0.25,
    },
    '-sm': {
        '+br': 0.45,
        '-br': 0.55,
    },
};

let c19 = {
    '+ft': {
        '+sf': {
            '+cc': {
                '+c19': 0.93,
                '-c19': 0.07,
            },
            '-cc': {
                '+c19': 0.88,
                '-c19': 0.12,
            },
        },
        '-sf': {
            '+cc': {
                '+c19': 0.78,
                '-c19': 0.22,
            },
            '-cc': {
                '+c19': 0.63,
                '-c19': 0.37,
            },
        },
    },
    '-ft': {
        '+sf': {
            '+cc': {
                '+c19': 0.61,
                '-c19': 0.39,
            },
            '-cc': {
                '+c19': 0.55,
                '-c19': 0.45,
            },
        },
        '-sf': {
            '+cc': {
                '+c19': 0.17,
                '-c19': 0.83,
            },
            '-cc': {
                '+c19': 0.09,
                '-c19': 0.91,
            },
        },
    },
};

let wc = {
    '+pn': {
        '+br': {
            '+wc': 0.85,
            '-wc': 0.15,
        },
        '-br': {
            '+wc': 0.52,
            '-wc': 0.48,
        },
    },
    '-pn': {
        '+br': {
            '+wc': 0.56,
            '-wc': 0.44,
        },
        '-br': {
            '+wc': 0.03,
            '-wc': 0.97,
        },
    },
};

let dc = {
    '+c19': {
        '+dc': 0.88,
        '-dc': 0.12,
    },
    '-c19': {
        '+dc': 0.23,
        '-dc': 0.77,
    },
};
let sba = {
    '+c19': {
        '+sba': 0.92,
        '-sba': 0.08,
    },
    '-c19': {
        '+sba': 0.12,
        '-sba': 0.88,
    },
};

let hcp = {
    '+pn': {
        '+lc': {
            '+c19': {
                '+hcp': 0.95,
                '-hcp': 0.05,
            },
            '-c19': {
                '+hcp': 0.86,
                '-hcp': 0.14,
            },
        },
        '-lc': {
            '+c19': {
                '+hcp': 0.73,
                '-hcp': 0.27,
            },
            '-c19': {
                '+hcp': 0.64,
                '-hcp': 0.36,
            },
        },
    },
    '-pn': {
        '+lc': {
            '+c19': {
                '+hcp': 0.68,
                '-hcp': 0.32,
            },
            '-c19': {
                '+hcp': 0.58,
                '-hcp': 0.42,
            },
        },
        '-lc': {
            '+c19': {
                '+hcp': 0.14,
                '-hcp': 0.86,
            },
            '-c19': {
                '+hcp': 0.06,
                '-hcp': 0.94,
            },
        },
    },
};

let dy = {
    '+pn': {
        '+lc': {
            '+br': {
                '+c19': {
                    '+dy': 0.98,
                    '-dy': 0.02,
                },
                '-c19': {
                    '+dy': 0.87,
                    '-dy': 0.13,
                },
            },
            '-br': {
                '+c19': {
                    '+dy': 0.89,
                    '-dy': 0.11,
                },
                '-c19': {
                    '+dy': 0.69,
                    '-dy': 0.31,
                },
            },
        },
        '-lc': {
            '+br': {
                '+c19': {
                    '+dy': 0.88,
                    '-dy': 0.12,
                },
                '-c19': {
                    '+dy': 0.64,
                    '-dy': 0.36,
                },
            },
            '-br': {
                '+c19': {
                    '+dy': 0.58,
                    '-dy': 0.42,
                },
                '-c19': {
                    '+dy': 0.11,
                    '-dy': 0.89,
                },
            },
        },
    },
    '-pn': {
        '+lc': {
            '+br': {
                '+c19': {
                    '+dy': 0.85,
                    '-dy': 0.15,
                },
                '-c19': {
                    '+dy': 0.71,
                    '-dy': 0.29,
                },
            },
            '-br': {
                '+c19': {
                    '+dy': 0.61,
                    '-dy': 0.39,
                },
                '-c19': {
                    '+dy': 0.28,
                    '-dy': 0.72,
                },
            },
        },
        '-lc': {
            '+br': {
                '+c19': {
                    '+dy': 0.55,
                    '-dy': 0.45,
                },
                '-c19': {
                    '+dy': 0.28,
                    '-dy': 0.72,
                },
            },
            '-br': {
                '+c19': {
                    '+dy': 0.22,
                    '-dy': 0.78,
                },
                '-c19': {
                    '+dy': 0.01,
                    '-dy': 0.99,
                },
            },
        },
    },
};

let parent = {
    rn: [],
    sm: [],
    wis: [],
    sf: [],
    ft: [],
    cc: ['rn'],
    pn: ['wis', 'sf', 'cc'],
    lc: ['sm'],
    br: ['sm'],
    c19: ['ft', 'sf', 'cc'],
    wc: ['pn', 'br'],
    dc: ['c19'],
    sba: ['c19'],
    hcp: ['pn', 'lc', 'c19'],
    dy: ['pn', 'lc', 'br', 'c19'],
};
let variables = ['rn', 'sm', 'wis', 'sf', 'ft', 'cc', 'pn', 'lc', 'br', 'c19', 'wc', 'dc', 'sba', 'hcp', 'dy'];

let random = (min, max) => Math.random() * (max - min) + min;
let samples = 50;
let sample;
let total = 0,
    count = 0;
for (let index = 0; index < samples; index++) {
    sample = {};
    variables.forEach(item => {
        let newItem = item;
        parent[item].forEach(parentItem => {
            newItem = eval(newItem)[sample[parentItem]];
        });

        // console.log(eval(newItem));

        let value = eval(newItem)[`+${item}`];

        if (random(0, 1) < value) sample[item] = `+${item}`;
        else sample[item] = `-${item}`;
    });
    console.log(
        Object.keys(sample)
            .map(item => sample[item])
            .join(' ')
    );
}
